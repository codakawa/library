import React from "react";
import styles from "./LoginPage.module.css";
import logo from "../../assests/images/logo/logo_library.svg";
import library from "../../assests/images/windows/library_photo.jpg";
import playMarket from "../../assests/images/windows/playMarket.png";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className={styles.parent_login}>
      <div className={styles.inner_login_left}></div>
      <div className={styles.inner_login_right}>
        <img src={library} alt="" />
      </div>
      <div className="container">
        <div className={styles.child_login}>
          <div className={styles.child_login_left}>
            {/* <div className={styles.block_logo}>
              <div>
                <img src={logo} alt="" />
              </div>
              <h1>Muras</h1>
            </div> */}
            <h2>Добро пожаловать! </h2>
            <p>
              Войдите, что бы бесплатно читать великие произведения кыргызских
              писателей на нашем сайте.
            </p>
            <div className={styles.block_btns_active}>
              <button>
                <NavLink to={"/registration"}>Регистрация</NavLink>
              </button>
              <button className={styles.active_btn_win}>
                <NavLink to={"/login"}>Вход</NavLink>
              </button>
            </div>
            <form action="">
              <label>
                {/* <img src={key} alt="key" /> */}
                <input placeholder="E-mail " />
              </label>
              <input placeholder="Пароль " />
              <button type="submit">Войти</button>
            </form>
            <span>Вы забыли пароль?</span>
            <button>Восстановить</button>
          </div>
          <div className={styles.child_login_right}>
            <p>
              Читайте книги великих кыргызских писателей на нашем сайте или
              скачайте приложение “Мурас” в Google Play бесплатно.
            </p>
            <div>
              <button>
                <img src={playMarket} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
