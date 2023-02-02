import React, { useState } from 'react';
import style from './Registration.module.css';
import logo from './media/logo-2-color 1.png';
import ButtonEnter from './components/ButtonEnter/ButtonEnter';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import PopupSuccess from './components/PopupSuccess/PopupSuccess';

function Registration() {
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const onSubmit = (value) => {
    setIsRegistrationSuccess(value);
  }



  return (
    <div className={style.container}>
      {isRegistrationSuccess && <PopupSuccess />}
      <HeaderMobile />
        <main className={style.main}>
          <ButtonEnter />
           <div className={style.main__content}>
            <img className={style.main__logoDesktop} src={logo} alt="Логотип СККОД"/>
            <RegistrationForm onSubmit={onSubmit}/>
           </div>
        </main>
    </div>
  );
}

export default Registration;
