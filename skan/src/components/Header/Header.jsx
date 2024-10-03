import React, {useEffect} from "react";
import './Header.css'
import logoHeader from '../../media/logo-header.svg'
import stick from '../../media/stick.svg'

import {Link} from "react-router-dom";
import cat from '../../media/cat.jpg'


const Header = ({ isLoggedIn, handleLogout, accountInfo}) => {

        return(
            <>
                <header className="header">

                    <div className="logo-header">
                        <img src={logoHeader} alt="Логотип"/>
                    </div>

                    <div className="navigation">
                        <ul className="nav-list">
                            <li className="list-item"><a className="list-link" href="#">Главная</a></li>
                            <li className="list-item"><a className="list-link" href="#">Тарифы</a></li>
                            <li className="list-item"><a className="list-link" href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {isLoggedIn ? (
                            <div className="authorized">

                                    {accountInfo ? (
                                        <div className="info-about-companies">
                                            <p className={'used-companies'}>Использовано компаний {accountInfo.eventFiltersInfo.companyLimit}</p>
                                            <p className={'limit-companies'}>Лимит по компаниям {accountInfo.eventFiltersInfo.usedCompanyCount}</p>
                                        </div>)

                                : (
                                    <div className="info-about-companies">
                                        <p className="used-companies">Загрузка информации...</p>
                                    </div>)
                                    }


                                <p className={'user-name'}>Вася П.</p>
                                <img src={cat} alt="cat" className={'photo-profile'}/>

                                <Link to={"/"} className={'quit'} onClick={handleLogout}>Выйти</Link>

                                {/*<Link to={'/'}>*/}
                                {/*    <button className="my-office-button exit" onClick={handleLogout}><span className="entrance">Выйти</span></button>*/}
                                {/*</Link>*/}

                            </div>
                        )
                        :
                        (
                            <div className="my-office">

                                <a className="sign-up" href="#">Зарегистрироваться</a>

                                <img src={stick} alt="stick"/>

                            <Link to={'/authorization'}>
                                <button className="my-office-button"><span className="entrance">Войти</span></button>
                            </Link>


                        </div>
                    )}


                </header>

            </>
        )

}


export default Header;
