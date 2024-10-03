import React, {useState} from "react";
import './Authorization.css'
import './AuthorizationPage.css'


import Authorization from "./Authorization";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const AuthorizationPage = ({setIsLoggedIn, setAccountInfo}) => {


        return (
            <>
                <Header />
                <Authorization setIsLoggedIn={setIsLoggedIn} setAccountInfo={setAccountInfo}/> {/* Передаем функцию изменения состояния в Authorization */}
                <Footer/>
            </>
        )
    }

export default AuthorizationPage;
