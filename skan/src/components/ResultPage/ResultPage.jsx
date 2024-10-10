import React from "react";
import Header from "../Header/Header";
import Result from "../Result/Result";
import Footer from "../Footer/Footer";



const ResultPage = ({isLoggedIn, setIsLoggedIn, accountInfo}) =>  {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Удаляем запись из localStorage
        setIsLoggedIn(false); // Обновляем состояние в React
    };

    return(
        <>
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} accountInfo={accountInfo}/>
            <Result />
            <Footer />
        </>
    )

}

export default ResultPage;
