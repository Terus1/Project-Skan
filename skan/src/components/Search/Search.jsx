import React, {useEffect, useState} from "react";

import './Search.css'

import greenLeaf from '../../media/green-leaf.svg'
import folders from '../../media/folders.svg'
import manAndRocket from '../../media/man-and-rocket.svg'
import {Link} from "react-router-dom";



const Search = () => {

    // Состояния для ИНН и ошибки
    const [inn, setInn] = useState('');
    const [error, setError] = useState({ code: null, message: '' });


    // Состояние для тональности
    const [tonality, setTonality] = useState('');

    // Состояние для документов
    const [documents, setDocuments] = useState('');

    // Состояния для дат
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateError, setDateError] = useState(''); // Состояние для ошибок с датами

    // Функция для проверки валидности ИНН
    function validateInn(inn) {
        let result = false;
        let error = { code: null, message: '' }; // Инициализируем объект ошибки внутри функции

        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }

        if (!inn.length) {
            error.code = 0;

        } else if (/[^0-9]/.test(inn)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        } else {
            const checkDigit = (inn, coefficients) => {
                let n = 0;
                for (let i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };

            if (inn.length === 10) {
                let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n10 === parseInt(inn[9])) {
                    result = true;
                } else {
                    error.code = 4;
                    error.message = 'Неправильное контрольное число';
                }
            } else {
                error.code = 3;
                error.message = 'ИНН должен содержать 10 цифр';
            }
        }

        // Устанавливаем состояние ошибки
        if (!result) {
            setError(error); // Устанавливаем ошибку
        } else {
            setError({ code: null, message: '' }); // Очищаем ошибку при успешной проверке
        }

        return result;
    }

    // Обработчик изменения поля ввода ИНН
    const handleInnChange = (e) => {
        const value = e.target.value;
        setInn(value);

        // Проверяем ИНН каждый раз, когда пользователь изменяет значение
        validateInn(value);
    }


    // Обработчик для изменения поля ввода "Тональность"
    const handleTonalityChange = (e) => {
        setTonality(e.target.value);
    };

    // Обработчик изменения для поля "Количество документов"
    const handleDocumentsChange = (e) => {
        let value = e.target.value;

        // Ограничиваем значение диапазоном от 1 до 1000
        if (value === '' || (Number(value) >= 1 && Number(value) <= 1000)) {
            setDocuments(value); // Обновляем состояние только если значение корректное
        }
    }

    // Проверка дат
    const validateDates = (start, end) => {
        const today = new Date(); // Текущая дата
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Проверяем, чтобы даты не были в будущем
        if (startDate > today || endDate > today) {
            setDateError('Дата не может быть в будущем');
            return false;
        }

        // Проверяем, чтобы дата начала была не позже даты конца
        if (start && end && startDate > endDate) {
            setDateError('Дата начала не может быть позже даты конца');
            return false;
        }

        setDateError(''); // Если ошибок нет, очищаем сообщение об ошибке
        return true;
    };

    // Обработчик изменения даты начала
    const handleStartDateChange = (e) => {
        const value = e.target.value;
        setStartDate(value);
        validateDates(value, endDate); // Проверяем даты при каждом изменении
    };

    // Обработчик изменения даты конца
    const handleEndDateChange = (e) => {
        const value = e.target.value;
        setEndDate(value);
        validateDates(startDate, value); // Проверяем даты при каждом изменении
    };


    const isFormValid = () => {

        return (
            inn.length === 10 && // ИНН должен быть из 10 цифр
            // tonality !== '' && // Тональность должна быть выбрана
            documents >= 1 && documents <= 1000 && // Количество документов в диапазоне
            startDate !== '' && // Дата начала не должна быть пустой
            endDate !== '' && // Дата конца не должна быть пустой
            dateError === '' // Ошибок с датами нет
        );
    };


    return (
        <>
            <div className="both-parts">
                <div className="left-part">
                    <div className="head">
                        <p className="text-head">Найдите необходимые <br /> данные в пару кликов.</p>
                        <p className="hint">Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск</p>
                    </div>

                    <div className="search-form">
                        <div className="left-part-search-form">
                            <div className="INN">
                                <p className="text-INN">
                                    ИНН компании
                                    <span
                                        className={`required-asterisk ${error.code ? 'error-asterisk' : ''}`}>*</span> {/* Звездочка */}
                                </p>
                                <input
                                    className={`input-INN ${error.code ? 'input-error' : ''}`} // Добавляем класс для ошибки
                                    type="text"
                                    placeholder="10 цифр"
                                    value={inn}
                                    onChange={handleInnChange} // Обработчик изменения
                                />
                                {error.message &&
                                    <p className="error-message">{error.message}</p>} {/* Сообщение об ошибке */}
                            </div>

                            <div className="tonality">
                                <p className="text-tonality">Тональность</p>
                                <select className="select-tonality"
                                        value={tonality}
                                        onChange={handleTonalityChange}>
                                    <option className="option-tonality" value="positive">позитивная</option>
                                    <option className="option-tonality" value="negative">негативная</option>
                                    <option className="option-tonality" value="any">любая</option>
                                </select>
                            </div>

                            <div className="documents">
                                <p className="text-documents">Количество документов в выдаче*</p>
                                <input
                                    className="input-documents"
                                    type="number"
                                    placeholder="От 1 до 1000"
                                    min="1"
                                    max="1000"
                                    value={documents}
                                    onChange={handleDocumentsChange} // Добавим обработчик изменения
                                />
                            </div>

                            <div className="range">
                                <p className="range-text">Диапазон поиска
                                    <span className={`required-asterisk ${dateError ? 'error-asterisk' : ''}`}>*</span> {/* Символ * */}

                                </p>
                                <input
                                    className={`start-date ${dateError ? 'input-error' : ''}`}
                                    type="date"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    placeholder="Дата начала"
                                />
                                <input
                                    className={`end-date ${dateError ? 'input-error' : ''}`}
                                    type="date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    placeholder="Дата конца"
                                />
                                {dateError && <p className="error-message">{dateError}</p>} {/* Сообщение об ошибке */}
                            </div>
                        </div>

                        <div className="right-part-search-form">
                            <div className="checkboxes">
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Признак максимальной полноты
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Упоминания в бизнес-контексте
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox" />
                                    Главная роль в публикации
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox" />
                                    Публикации только с риск-факторами
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox" />
                                    Включать технические новости рынков
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox" />
                                    Включать анонсы и календари
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox" />
                                    Включать сводки новостей
                                </label>
                            </div>

                            <div className="div-button-search">

                                <Link to={"/result"}>
                                    <button disabled={!isFormValid()} className="button-search">Поиск</button>
                                </Link>

                                <p className="explanation">* Обязательные к заполнению поля</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-part">
                    <div className="top-pictures">
                        <div className="div-green-leaf">
                            <img className="green-leaf" src={greenLeaf} alt="green-leaf" />
                        </div>

                        <div className="div-folders">
                            <img className="folders" src={folders} alt="folders" />
                        </div>
                    </div>

                    <div className="div-man-and-rocket">
                        <img src={manAndRocket} alt="man-and-rocket" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;

