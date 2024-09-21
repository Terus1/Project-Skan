import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";



const HMF = ({isLoggedIn, setIsLoggedIn}) =>  {
    console.log('HMF: ' + isLoggedIn)

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Удаляем запись из localStorage
        setIsLoggedIn(false); // Обновляем состояние в React
    };

        return(
            <>
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
                <Main />
                <Footer />
            </>
        )

}

export default HMF;
