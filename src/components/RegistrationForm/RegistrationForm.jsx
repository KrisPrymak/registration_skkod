import React from "react";
import style from './RegistrationForm.module.css'

const RegistrationForm = ({onSubmit}) => {

  return (
    <form className={style.registration__form} action="#0">
      <h1 className={style.registration__title}>Регистрация</h1>
      <input
        className={style.registration__input}
        type="tel"
        maxlength="11"
        pattern="[0-9]{11}"
        placeholder="Номер телефона"
      />
      <label className={style.registration__checkboxGroup}>
        <input
          type="checkbox"
          className={style.registration__checkbox}
          required
        />
        <span className={style.registration__checkboxText}>
          Согласен на <a href="#0">обработку персональных данных</a>
        </span>
      </label>
      <button onClick={() => {onSubmit(true)}} className={style.registration__submit + " " + style.button}>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;
