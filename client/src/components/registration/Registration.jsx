import React from 'react';
import Input from '../utils/input/Input';
import s from './registration.module.css';

const Registration = () =>{
    return(
        <div className={s.registration}>
            <div className={s.registration__header}>Регистрация</div>
            <Input type="text" placeholder="Введите имя" />
            <Input type="text" placeholder="Введите имя" />
            <Input type="text" placeholder="Введите имя" />
            <Input type="text" placeholder="Введите имя" />
            <button className={s.registration__btn}>Войти</button>
        </div>
    );
};

export default Registration;