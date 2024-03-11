import "./ResetPassword.css";
import "../Login/Login.css";

import { useForm } from "react-hook-form";
import { REGEXP_EMAIL } from "../../utils/constants";
import { Link } from "react-router-dom";
import fetchResetPassword from "../../utils/fetchResetPassword";

function ResetPassword() {
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
    fetchResetPassword({
      email: data.email,
    });

    // .then((res) => { // закомментировала, пока нет baseUrl
    //   if (res.ok) {
    //     navigate('/');
    //   }
    // })
  };

  return (
    <div className="resetPass__wrapper">
      <form
        id="resetPass_form"
        onSubmit={handleSubmit(onSubmit)}
        className="login__form"
        action="submit"
        noValidate
      >
        <h1 className="resetPass__title">CRM система</h1>
        <div className="resetPass__subtitleBlock">
          <h2 className="resetPass__subtitle">Восстановление пароля</h2>
          <h3 className="resetPass__text">
            Введите электронный адрес, указанный при регистрации
          </h3>
        </div>
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
        <button
          type="submit"
          className={`resetPass__submitButton login__submitButton ${
            !isValid ? "login__submitButtonDisable" : ""
          }`}
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <Link className="resetPass__link" rel="stylesheet" to="/signin">
        Назад
      </Link>
    </div>
  );
}

export default ResetPassword;
