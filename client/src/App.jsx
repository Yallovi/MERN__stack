import React, {useEffect} from 'react';
import Navbar from './components/navbar/Navbar';
import s from './app.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registration from "./components/registration/Registration";
import Login from './components/registration/Login';
import {useSelector,useDispatch} from 'react-redux';
import {authApi} from "./api/api";



function App() {
  const isAuth = useSelector(state => state.user.isAuth); 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(authApi());
  }, []);

  return (
    <BrowserRouter>
      <div className={s.app}>
        <Navbar />
      {!isAuth &&
        <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        </Switch> 
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
