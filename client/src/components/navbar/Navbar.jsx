import React from 'react';
import s from './navbar.module.css';
import logo from '../../assets/image/header-logo.png';
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { logout } from '../../reducers/userReducer';
const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    return(
        <div className={s.navbar}>
            <div className = {s.container}>
                <img src={logo} alt="#" className={s.navbar__logo}/>
               {!isAuth && <div className={s.navbar__login}><NavLink to="/login">Войти</NavLink></div>}
                {!isAuth && <div className={s.navbar__registration}><NavLink to="/registration">Регистрация</NavLink></div>}
                {isAuth && <div className={s.navbar__login} onClick={()=>dispatch(logout())}>Выход</div>}

            </div>
        </div>
    );
};

export default Navbar;
