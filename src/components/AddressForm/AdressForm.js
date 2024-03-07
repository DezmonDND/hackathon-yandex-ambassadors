import { useState } from "react";
import "./AdressForm.css";
import { useForm } from 'react-hook-form';
import { userAdressData as userData } from "../../mocks/card-merch-data";

function AdressForm() {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleSubmit(onSubmit)();
  };

  const handleCopyClick = () => {
    const copiedData = `${userData.postcode}, ${userData.country}, ${userData.city}, ${userData.address}, ${userData.phone}`;

    navigator.clipboard.writeText(copiedData)
    .then(() => {
      // console.log(copiedData);
    })
    .catch((error) => {
      console.error('Ошибка при копировании данных: ', error);
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    // Отправка данных на сервер

    setIsEditing(false);
  }

  return (
    <form
      id="adress_form"
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      action="submit"
      noValidate
    >
      <div className="form__subtitle-block">
        <h2 className="form__subtitle">Адрес</h2>
        <div className="form__button-block">
          {isEditing ? (
              <button
                className="form__button form__button_save"
                type="button"
                onClick={handleSaveClick}
              />
            ) : (
              <>
                <button
                  className="form__button form__button_edit"
                  type="button"
                  onClick={handleEditClick}
                />
                <button
                  className="form__button form__button_copy"
                  type="button"
                  onClick={handleCopyClick}
                />
              </>
          )}
        </div>
      </div>
      <input
        {...register('postcode')}
        className="form__input"
        type="text"
        defaultValue={userData.postcode}
        readOnly={!isEditing}
      />
      <input
      {...register('country')}
        className="form__input"
        type="text"
        defaultValue={userData.country}
        readOnly={!isEditing}
      />
      <input
      {...register('city')}
        className="form__input"
        type="text"
        defaultValue={userData.city}
        readOnly={!isEditing}
      />
      <input
      {...register('address')}
        className="form__input"
        type="text"
        defaultValue={userData.address}
        readOnly={!isEditing}
      />
      <input
      {...register('phone')}
        className="form__input"
        type="text"
        defaultValue={userData.phone}
        readOnly={!isEditing}
      />
    </form>
  );
}

export default AdressForm;
