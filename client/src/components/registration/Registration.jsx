import React, {useState} from 'react';
import Input from '../utils/input/Input';
import s from './registration.module.css';
import {registrationApi} from '../../api/api';

const Registration = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className={s.authorization}>
            <div className={s.authorization__header}>Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите password" />
            <button className={s.authorization__btn} onClick={() => registrationApi(email, password)}> Отправить </button>
        </div>
    );
};

export default Registration;