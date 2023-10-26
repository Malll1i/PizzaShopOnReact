import React from "react";
import SliderComponent from "./slider";
import miniPizza from "../../../img/image 8.png";
import LeftSidePic from "../../../img/image 14.png";
import RightSidePic from "../../../img/image 3400.svg";
import CatalogPizza from "./catalogPizza";
import OurStocks from "../../../img/image 26.svg";

function Main() {
    return (
        <main>
            <SliderComponent/>
                
                    <div className="containerNovelties">
                        <h1>Новинки</h1>
                        <div className="novelties__cards">
                            <div className="novelties__cards-main">
                                <div className="novelties__cards-main-card">
                                    <div className="novelties__cards-main-card-img"><img src={miniPizza} alt="" /></div>
                                    <div className="novelties__cards-main-card-text">
                                        <h1>Карбонара</h1>
                                        <p>от 120₽</p>
                                    </div>
                                </div>
                                <div className="novelties__cards-main-card">
                                    <div className="novelties__cards-main-card-img"><img src={miniPizza} alt="" /></div>
                                    <div className="novelties__cards-main-card-text">
                                        <h1> Карбонара</h1>
                                        <p>от 120₽</p>
                                    </div>
                                </div>
                                <div className="novelties__cards-main-card">    
                                    <div className="novelties__cards-main-card-img"><img src={miniPizza} alt="" /></div>
                                    <div className="novelties__cards-main-card-text">
                                        <h1>Карбонара</h1>
                                        <p>от 120₽</p>
                                    </div>
                                </div>
                                <div className="novelties__cards-main-card">
                                    <div className="novelties__cards-main-card-img"><img src={miniPizza} alt="" /></div>
                                    <div className="novelties__cards-main-card-text">
                                        <h1>Карбонара</h1>
                                        <p>от 120₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <div className="left-side-photo">
                <img src={LeftSidePic} alt="" />
            </div>

            <CatalogPizza/>

            <div className="our__stocks">
                <h1>Наши <span>акции</span></h1>
                <div className="our__stocks-flex">
                    <div className="our__stocks-flex-large"> <img src={OurStocks} alt="" /></div>
                    <div className="our__stocks-flex-grid">
                        <div className="our__stocks-flex-grid-small"> <img src={OurStocks} alt="" /> </div>
                        <div className="our__stocks-flex-grid-small"> <img src={OurStocks} alt="" /> </div>
                        <div className="our__stocks-flex-grid-small"> <img src={OurStocks} alt="" /> </div>
                        <div className="our__stocks-flex-grid-small"> <img src={OurStocks} alt="" /> </div>
                    </div>
                </div>
                <button>Все акции</button>
            </div>

            <div className="right-side-photo">
                <img src={RightSidePic} alt="" />
            </div>
        </main>
    )
}


export default Main

