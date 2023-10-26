import React from "react";
import Logo from "../../../img/Rectangle 76.svg";
import { FaStar } from "react-icons/fa6";

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__top">
          <div className="navbar__top-control">
            <div className="navbar__top-control-left">
              <div className="navbar__top-logoMain">
                <img src={Logo}></img>
              </div>
              <div className="navbar__top-infDelivery">
                <div className="navbar__top-infDelivery-city">
                  <p>
                    Доставка пиццы <span>Москва</span>
                  </p>
                </div>
                <div className="navbar__top-infDelivery-Reviews">
                  <p>
                    Яндекс еда • 4.8 <FaStar className="star" /> &nbsp; Время
                    доставки • от 30 минут
                  </p>
                </div>
              </div>
            </div>
            <div className="navbar__top-control-right">
              <button>Заказать звонок</button>
              <h1>8 499 391-84-49</h1>
            </div>
          </div>
        </div>
        <section className="navbar__sectionPages">
          <div className="navbar__sectionPages-regulative">
            <div className="navbar__sectionPages-links">
              <a>Пицца</a>
              <a>Паста</a>
              <a>Салаты</a>
              <a>Супы</a>
              <a>Напитки</a>
              <a>Дисерты</a>
              <a>Наборы</a>
              <a>Контакты</a>
              <a>Акции</a>
            </div>
            <div className="navbar__sectionPages-register">
              <a>Войти</a>
            </div>
            <div className="navbar__sectionPages-cart">
              <button>Корзина | 1</button>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
