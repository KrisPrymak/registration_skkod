import React from "react";
import style from "./ButtonEnter.module.css";
import enterButton from "./../../media/enter.svg";

const ButtonEnter = () => {
  return (
    <button className={style.auth__button}>
      <img src={enterButton} alt="Кнопка войти" />
      <span className={style.auth__text}>Войти</span>
    </button>
  );
};

export default ButtonEnter;
