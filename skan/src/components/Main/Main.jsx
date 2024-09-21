import React from "react";
import './Main.css'


import bigIconSwitchMan from '../../media/big-icon-switch-man.svg'
import arrowIcon from '../../media/arrow-icon.svg'
import groupClock from '../../media/group-clock.svg'
import groupLoupe from "../../media/group-loupe.svg"
import groupShield from "../../media/group-shield.svg"
import groupManSitting from "../../media/group-man-sitting.svg"
import beginnerIcon from "../../media/beginner-icon.svg"
import tariffIncludesBeginner from "../../media/tariff-includes-beginner.svg"
import targetIcon from "../../media/target-icon.svg"
import tariffIncludesPro from "../../media/tariff-includes-pro.svg"
import businessIcon from "../../media/business-icon.svg"
import tariffIncludesBusiness from "../../media/tariff-includes-business.svg"
import greenCheckMark from '../../media/green_check_mark.svg'


const Main = () => {


        return (
            <>
                <main className="main">
                    <div className="upper-part-site">
                        <div className="site-about">
                            <h1 className="site-h1">
                                сервис по поиску<br/>
                                публикаций<br/>
                                о компании<br/>
                                по его ИНН
                            </h1>

                            <p className="small-text">
                                Комплексный анализ публикаций, получение данных <br/> в формате PDF на электронную
                                почту.
                            </p>
                        </div>

                        <div className="div-big-icon-switch-man">
                            <img className="big-icon-switch-man" src={bigIconSwitchMan} alt="icon"/>
                        </div>
                    </div>

                    <div className="why-are-we">
                        <p className="p-why-are-we">почему именно мы</p>
                        <div className="carousel">
                            <div className="carousel-track">
                                <div className="carousel-item">1</div>
                                <div className="carousel-item">2</div>
                                <div className="carousel-item">3</div>
                                <div className="carousel-item">4</div>
                            </div>
                        </div>

                        <button className="prev">Назад</button>
                        <button className="next">Вперед</button>
                        {/*                        <div className="carousel-position">*/}

                        {/*                            <img className="arrow-nav-left next" src={arrowIcon} alt="arrow-left-icon"/>*/}


                        {/*                            <div className="container">*/}

                        {/*                                <div className="window">*/}
                        {/*                                    <div id="carousel">*/}
                        {/*/!*<img class="slide" id="s1" src="https://w-dog.ru/wallpapers/5/16/293857227813431/britanskaya-korotkoshrstnaya-britanec-kot-koshka-morda.jpg" alt="">*!/*/}
                        {/*/!*<img class="slide" id="s2" src="https://polinka.top/uploads/posts/2023-05/1685047513_polinka-top-p-kartinki-shotlandskikh-koshek-krasivo-37.jpg" alt="">*!/*/}
                        {/*/!*<img class="slide" id="s3" src="https://img.goodfon.ru/original/5000x3330/0/68/koshka-kot-polosatyy-glaza.jpg" alt="">*!/*/}

                        {/*                                        <div className="first-reason slide" id="s1">*/}
                        {/*                                            <img src={groupClock} alt="clock"/>*/}
                        {/*                                        </div>*/}

                        {/*                                        <div className="second-reason slide" id="s2">*/}
                        {/*                                            <img src={groupLoupe} alt="loupe"/>*/}
                        {/*                                        </div>*/}

                        {/*                                        <div className="third-reason slide" id="s3">*/}
                        {/*                                            <img src={groupShield} alt="shield-icon"/>*/}
                        {/*                                        </div>*/}
                        {/*                                    </div>*/}
                        {/*                                </div>*/}
                        {/*/!*<span id="prev">PREV</span>*!/*/}
                        {/*/!*<span id="next">NEXT</span>*!/*/}
                        {/*                            </div>*/}

                        {/*                            <img className="arrow-nav-right prev" src={arrowIcon} alt="arrow-right-icon"/>*/}

                        {/*                        </div>*/}
                    </div>

                    <div className="man-sitting">
                        <img src={groupManSitting} alt="man-sitting"/>
                    </div>

                    <div className="block-our-tariffs">
                        <p className="text-our-tariffs">наши тарифы</p>

                        <div className="list-of-tariffs">


                            <div className="beginner grid-item">
                                <div className="tariff-header-beginner">
                                    <div className="head-tariff-beginner">
                                        <p className="name-of-tariff">Beginner</p>
                                        <p className="shortly">Для небольшого исследования</p>
                                    </div>

                                    <div className="beginner-icon">
                                        <img src={beginnerIcon} alt="beginner-icon"/>

                                    </div>
                                </div>

                                <div className="tariff-body-beginner">
                                    <div className="div-new-price">
                                        <p className="new-price">799 ₽</p>
                                    </div>
                                    <div className="div-old-price">
                                        <p className="old-price">
                                            <del>1200 ₽</del>
                                        </p>
                                    </div>


                                    <div className="current-tariff">
                                    <p className="text-current-tariff">Текущий тариф</p>
                                    </div>

                                    <p className="monthly">или 150 ₽/мес. при рассрочке на 24 мес.</p>

                                    <div className="div-tariff-includes">
                                        <p className={'text-tariff-includes'}>В тариф входит:</p>
                                        <div className="body-tariff-includes">
                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-1'}/>
                                            <p className={'text-in-body-tariff-includes-1'}>Безлимитная история
                                                запросов</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-2'}/>
                                            <p className={'text-in-body-tariff-includes-2'}>Безопасная сделка</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-3'}/>
                                            <p className={'text-in-body-tariff-includes-3'}>Поддержка 24/7</p>

                                        </div>

                                    </div>

                                    <div className="beginner-button">
                                    <button className="to-personal-acc">Перейти в личный кабинет</button>
                                    </div>
                                </div>

                            </div>
                            {/*=============================================================================================================*/}
                            <div className="pro grid-item">
                                <div className="tariff-header-pro">
                                    <div className="head-tariff-pro">
                                        <p className="name-of-tariff">Pro</p>
                                        <p className="shortly">Для HR и фрилансеров</p>
                                    </div>

                                    <div className="pro-icon">
                                        <img src={targetIcon} alt="target-icon"/>

                                    </div>
                                </div>
                                <div className="tariff-body-beginner">
                                    <div className="div-new-price">
                                        <p className="new-price">1299 ₽</p>

                                    </div>
                                    <div className="div-old-price">
                                        <p className="old-price">
                                            <del>2600 ₽</del>
                                        </p>
                                    </div>


                                    <p className="monthly">или 279 ₽/мес. при рассрочке на 24 мес.</p>
                                    <div className="div-tariff-includes">
                                        <p className={'text-tariff-includes'}>В тариф входит:</p>
                                        <div className="body-tariff-includes">
                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-1'}/>
                                            <p className={'text-in-body-tariff-includes-1'}>Все пункты тарифа Beginner</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-2'}/>
                                            <p className={'text-in-body-tariff-includes-2'}>Экспорт истории</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-3'}/>
                                            <p className={'text-in-body-tariff-includes-3'}>Рекомендации по приоритетам</p>

                                        </div>
                                    </div>

                                    <div className="pro-button">
                                        <button className="more-white">Подробнее</button>
                                    </div>
                                </div>

                            </div>

                            <div className="business grid-item">
                                <div className="tariff-header-business">
                                    <div className="head-tariff-business">
                                        <p className="name-of-tariff-business">Business</p>
                                        <p className="shortly-business">Для корпоративных клиентов</p>
                                    </div>

                                    <div className="beginner-icon">
                                        <img src={businessIcon} alt="business-icon"/>
                                    </div>
                                </div>

                                <div className="tariff-body-beginner">
                                    <div className="div-new-price">
                                    <p className="new-price">2379 ₽</p>

                                    </div>
                                    <div className="div-old-price">
                                        <p className="old-price">
                                            <del>3700 ₽</del>
                                        </p>
                                    </div>

                                    <div className="div-tariff-includes">
                                        <p className={'text-tariff-includes'}>В тариф входит:</p>
                                        <div className="body-tariff-includes">
                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-1'}/>
                                            <p className={'text-in-body-tariff-includes-1'}>Все пункты тарифа Pro</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-2'}/>
                                            <p className={'text-in-body-tariff-includes-2'}>Безлимитное количество запросов</p>

                                            <img src={greenCheckMark} alt="green-check-mark"
                                                 className={'green-check-mark-3'}/>
                                            <p className={'text-in-body-tariff-includes-3'}>Приоритетная поддержка</p>

                                        </div>
                                    </div>


                                    <div className="button-business">
                                    <button className="more-white ">Подробнее</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </main>
            </>
        )

}


export default Main;
