import React from 'react';
import s from './navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={s.navbar}>
            <div className = {s.container}>
                <img src={logo} alt="#" className={s.navbar__logo}/>
                <div className={s.navbar__login}><NavLink to="/login">Войти</NavLink></div>
                <div className={s.navbar__registration}><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;
