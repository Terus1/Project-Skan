import React, {useState} from "react";

import './Result.css'

import girlLookingFor from '../../media/girl-looking-for.svg'


const Result = () => {

    return (
        <>
            <div className="head-text">
                <p className="searching">Ищем. Скоро <br/> будут результаты</p>
                <p className="be-patient">Поиск может занять некоторое время,<br/> просим сохранять терпение.</p>
            </div>

            <div className="head-picture">
                <img src={girlLookingFor} alt="girl-looking-for"/>
            </div>

            <div className="general-summary">
                <p className="text-general-summary">
                    Общая сводка
                </p>
                <p className="found-options">
                    Найдено "количество" вариантов
                </p>
            </div>
        </>
    )
}


export default Result;
