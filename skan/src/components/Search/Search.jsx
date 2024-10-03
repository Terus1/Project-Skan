import React from "react";

import greenLeaf from '../../media/green-leaf.svg'
import folders from '../../media/folders.svg'
import manAndRocket from '../../media/man-and-rocket.svg'



const Search = () =>  {

    return(
        <>
            <div className="both-parts">

                <div className="left-part">
                    <div className="head">
                        <p className="text-head">Найдите необходимые <br/>
                            данные в пару кликов.</p>
                        <p className="hint">Задайте параметры поиска. <br/>
                            Чем больше заполните, тем точнее поиск</p>
                    </div>

                    <div className="search-form">
                        <div className="left-part-search-form">
                            <div className="INN">
                                <p className="text-INN">ИНН компании*</p>
                                <input className="input-INN" type="text" placeholder="10 цифр"/>
                            </div>

                            <div className="tonality">
                                <p className="text-tonality">Тональность</p>
                                <select className="select-tonality" name="tonalities">
                                    <option className="option-tonality" value="">позитивная</option>
                                    <option className="option-tonality" value="">негативная</option>
                                    <option className="option-tonality" value="">любая</option>
                                </select>

                            </div>

                            <div className="documents">
                                <p className="text-documents">Количество документов в выдаче*</p>
                                <input className="input-documents" type="number" placeholder="От 1 до 1000" min="1"
                                       max="1000"/>
                            </div>

                            <div className="range">
                                <p className="range-text">Диапазон поиска*</p>
                                <input className="start-date" type="date" placeholder="Дата начала"/>
                                <input className="end-date" type="date" placeholder="Дата конца"/>
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
                                    <input className="input-checkbox" type="checkbox"/>
                                    Главная роль в публикации
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Публикации только с риск-факторами
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Включать технические новости рынков
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Включать анонсы и календари
                                </label>
                                <label className="text-label-checkboxes" htmlFor="">
                                    <input className="input-checkbox" type="checkbox"/>
                                    Включать сводки новостей
                                </label>
                            </div>


                            <div className="div-button-search">
                                <button disabled className="button-search">Поиск</button>
                                <p className="explanation">* Обязательные к заполнению поля</p>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="right-part">


                    <div className="top-pictures">

                        <div className="div-green-leaf">
                            <img className="green-leaf" src={greenLeaf} alt="green-leaf"/>
                        </div>

                        <div className="div-folders">
                            <img className="folders" src={folders} alt="folders"/>
                        </div>
                    </div>


                    <div className="div-man-and-rocket">
                        <img src={manAndRocket} alt="man-and-rocket"/>
                    </div>


                </div>


            </div>
        </>
    )

}

export default Search;
