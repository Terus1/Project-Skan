import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";



const HMF = ({isLoggedIn, setIsLoggedIn, accountInfo, setAccountInfo}) =>  {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Удаляем запись из localStorage
        setIsLoggedIn(false); // Обновляем состояние в React
    };

        return(
            <>
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} accountInfo={accountInfo}/>
                <Main isLoggedIn={isLoggedIn} />
                <Footer />
            </>
        )

}

export default HMF;
