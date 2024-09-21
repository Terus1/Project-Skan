import React, {useState} from "react";
import './Authorization.css'
import './AuthorizationPage.css'


import Authorization from "./Authorization";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const AuthorizationPage = ({setIsLoggedIn}) => {


        return (
            <>
                <Header />   {/* Передаем состояние в Header */}
                <Authorization setIsLoggedIn={setIsLoggedIn}/> {/* Передаем функцию изменения состояния в Authorization */}
                <Footer/>
            </>
        )
    }

export default AuthorizationPage;
