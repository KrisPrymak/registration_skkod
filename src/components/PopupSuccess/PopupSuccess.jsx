import React from 'react';
import style from './PopupSuccess.module.css';

const PopupSuccess = () => {
    return (
        <div className={style.popupBg}>
        <div className={style.popup}>
            <h1 className={style.popup__title}>Пароль выслан</h1>
            <div className={style.popup__text}>Перейдите на страницу авторизации и войдите используя номер телефона и присланный пароль.</div>
            <button className={style.popup__buttonDesktop + ' ' + style.button}>Войти</button>
            <button className={style.popup__buttonMobile + ' ' + style.button}>Обратно</button>
        </div>
    </div>
    );
};

export default PopupSuccess;