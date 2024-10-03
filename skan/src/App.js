import React, {useEffect, useState} from 'react'
import {Route, Router, Routes} from "react-router-dom";
import HMF from "./components/HMF/HMF";
import AuthorizationPage from "./components/Authorization/AuthorizationPage";




const App = () => {
  const [accountInfo, setAccountInfo] = useState(null); // Состояние для хранения данных аккаунта
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Проверка состояния авторизации при загрузке приложения
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Проверяем, сохранено ли состояние
    setIsLoggedIn(loggedIn);
  }, []);
  return(
    <>

        <Routes>

          {/* Главная страница */}
          <Route path="/" element={<HMF isLoggedIn={isLoggedIn}
                                        setIsLoggedIn={setIsLoggedIn}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}/>} />

          {/* Страница авторизации */}
          <Route path="/authorization" element={<AuthorizationPage setIsLoggedIn={setIsLoggedIn}
                                                                   accountInfo={accountInfo}
                                                                   setAccountInfo={setAccountInfo}/>} />

        </Routes>
    </>
  )
}


export default App;
