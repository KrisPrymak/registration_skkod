import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import style from './HeaderMobile.module.css'

const HeaderMobile = () => {
    return (
        <header className={style.header__mobile}>
                <span className={style.header__mobileLogo}>Сккод</span>
                <BurgerMenu />
        </header>
    );
};

export default HeaderMobile;