import React from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";



const SearchPage = ({isLoggedIn, setIsLoggedIn, accountInfo}) =>  {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Удаляем запись из localStorage
        setIsLoggedIn(false); // Обновляем состояние в React
    };

    return(
        <>
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} accountInfo={accountInfo}/>
            <Search />
            <Footer />
        </>
    )

}

export default SearchPage;
