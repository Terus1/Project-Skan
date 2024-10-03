import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './Authorization.css'

import peopleCarryingKey from '../../media/people-carrying-key.svg'
import lock from '../../media/lock.svg'
import googleButton from '../../media/google-button.svg'
import yandexButton from '../../media/yandex-button.svg'
import facebookButton from '../../media/facebook-button.svg'


const Authorization = ({setIsLoggedIn, setAccountInfo}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Хук для навигации

    // Проверка на заполнение полей
    const isFormValid = username !== '' && password !== '';


    // Функция для авторизации и получения токена
    const loginAndFetch = async () => {
        try {
            // 1. Авторизация (логин)
            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка авторизации: ${response.status}`);
            }

            const data = await response.json();

            // Получение accessToken и даты истечения действия токена
            const accessToken = data.accessToken;
            const expire = data.expire;

            // Сохранение токена в localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('tokenExpire', expire);
            localStorage.setItem('isLoggedIn', 'true'); // Сохранение состояния


            console.log('Токен получен:', accessToken);
            console.log('Срок действия токена до:', expire);

            // После успешной авторизации изменить состояние на авторизованное
            setIsLoggedIn(true);



            // Перенаправление на главную страницу
            navigate('/');

            // Выполняем защищённый запрос и получаем accountInfo
            const accountInfo = await fetchWithToken('https://gateway.scan-interfax.ru/api/v1/account/info', accessToken);

            // Сохраняем информацию о аккаунте в состоянии
            setAccountInfo(accountInfo);
            console.log(accountInfo);

            // Выводим только usedCompanyCount
            console.log('Used Company Count:', accountInfo.eventFiltersInfo.usedCompanyCount);

            // Выводим только companyLimit
            console.log('CompanyLimit:', accountInfo.eventFiltersInfo.companyLimit);

            // 2. После успешной авторизации, выполнить защищённый запрос
            await fetchWithToken('https://gateway.scan-interfax.ru/api/v1/account/info', accessToken);
            await fetchWithToken('https://gateway.scan-interfax.ru/api/v1/account/balance', accessToken);
            // await fetchWithToken('https://gateway.scan-interfax.ru/api/v1/account/purchaseHistory', accessToken);

        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    // Функция для запроса с использованием токена
    const fetchWithToken = async (url, token) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            const data = await response.json();
            console.log('Ответ с авторизацией:', data); // Отладочная информация

            return data; // Вернуть данные для использования
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
    };


    return (
        <>
            <div className="both-parts">
                <div className="left-part-authorization">
                    <p className="text-authorization">
                        Для оформления подписки<br/>
                        на тариф, необходимо<br/>
                        авторизоваться.
                    </p>

                    <div className="div-people-carrying-key">
                        <img src={peopleCarryingKey} alt="people-carrying-key-icon"/>
                    </div>
                </div>

                <div className="right-part-authorization">

                    <div className="container-entrance">
                        <div className="div-lock">
                            <img src={lock} alt="lock"/>
                        </div>
                        <div className="log-reg-tabs">
                            <div className="div-log-tab">
                                <a href="#" className="log-tab">Войти</a>
                                <div className="hr-log-tab-enter"/>
                            </div>

                            <div className="div-reg-tab">
                                <a href="#" className="reg-tab">Зарегистрироваться</a>
                                <div className="hr-log-tab-registration"/>
                            </div>

                        </div>

                        <div className="body-entrance">

                            <div className="log-or-number">
                                <p className="text-log-or-number">Логин или номер телефона:</p>
                                <input type="text" className="input-log-or-number" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>

                            <div className="password">
                                <p className="text-password">Пароль:</p>
                                <input type="password" className="input-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <div className="div-button-entrance">
                                <button disabled={!isFormValid} className="button-entrance" onClick={loginAndFetch}>Войти</button>
                            </div>

                            <div className="recover-password">
                                <a href="#" className={'text-recover-password'}> Восстановить пароль </a>
                            </div>

                            <div className="log-in-using">
                                <p className="text-log-in-using">Войти через:</p>
                                <img className="site-button-google" src={googleButton} alt="google-button"/>
                                <img className="site-button-facebook" src={yandexButton} alt="facebook-button"/>
                                <img className="site-button-yandex" src={facebookButton} alt="yandex-button"/>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}


export default Authorization;
