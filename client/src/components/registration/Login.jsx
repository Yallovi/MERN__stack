import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Input from '../utils/input/Input';
import s from './registration.module.css';
import { loginApi } from '../../api/api';

const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return(
        <div className={s.authorization}>
            <div className={s.authorization__header}>Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите password" />
            <button className={s.authorization__btn} onClick={() => dispatch(loginApi(email, password))} > Войти </button>
        </div>
    );
};

export default Login;