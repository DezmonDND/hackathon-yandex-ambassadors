import "./Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { REGEXP_EMAIL } from "../../utils/constants";
import fetchUserLogin from "../../utils/fetchUserLogin";

function Login() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    fetchUserLogin({
      email: data.email,
      password: data.password,
    }).then((res) => {
      // if (res.ok) {
      navigate("/promocodes");
      // }
    });
  };

  function onHandleClick() {
    setIsActive((current) => !current);
  }

  return (
    <div className="login__wrapper">
      <form
        id="login_form"
        onSubmit={handleSubmit(onSubmit)}
        className="login__form"
        action="submit"
        noValidate
      >
        <h1 className="login__title">CRM система</h1>
        <h2 className="login__subtitle">Войти в аккаунт</h2>
        <div className="login__inputWrapper">
          <input
            {...register("email", {
              required: "Это поле обязазательно для заполнения",
              pattern: {
                value: REGEXP_EMAIL,
                message: "Почта не соответствует требуемому формату",
              },
            })}
            className={`login__input ${
              errors.email ? "login__inputInvalid" : ""
            }`}
            type="email"
            name="email"
            id="email"
            placeholder="Почта"
          />
          <span className="login__error">
            {errors?.email && errors.email.message}
          </span>
        </div>
        <div className="login__inputWrapper">
          <input
            {...register("password", {
              required: "Это поле обязательно для заполнения",
              minLength: {
                value: 8,
                message: "Текст должен быть не короче 8 символов",
              },
              maxLength: {
                value: 16,
                message: "Текст должен быть не длинее 16 символов",
              },
            })}
            className={`login__input ${
              errors.password ? "login__inputInvalid" : ""
            }`}
            type={isActive ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Пароль"
          />
          <button
            type="button"
            className={`login__eyeButton ${
              isActive ? "login__eyeButtonActive" : ""
            }`}
            onClick={onHandleClick}
          />
          <span className="login__error">
            {errors?.password && errors.password.message}
          </span>
        </div>
        <Link className="login__link" rel="stylesheet" to="/reset-password">
          Не помню пароль
        </Link>
        <button
          type="submit"
          className={`login__submitButton ${
            !isValid ? "login__submitButtonDisable" : ""
          }`}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
