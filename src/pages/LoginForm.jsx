import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginForm.module.css";

import logo from "../img/logo.png";
import fundo from "../img/fundo.jpg";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className={styles.overlay}></div>

      <main className={styles.wrap}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.logo}>
            <img src={logo} alt="Logótipo +FATURAS" />
          </div>

          <label htmlFor="user">Nome de utilizador ou e-mail</label>
          <div className={styles.field}>
            <input
              id="user"
              className={styles.input}
              type="text"
              placeholder="Inserir nome de utilizador ou e-mail"
              autoComplete="username"
              required
            />
          </div>

          <label htmlFor="pass">Palavra-passe</label>
          <div className={styles.field}>
            <input
              id="pass"
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Inserir palavra-passe"
              autoComplete="current-password"
              required
            />
          <button
  type="button"
  className={styles.eyeBtn}
  onClick={() => setShowPassword(!showPassword)}
  aria-label="Mostrar/ocultar senha"
>
  <svg
    className={`${styles.eyeIcon} ${showPassword ? styles.open : styles.closed}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      className={styles.eyePath}
      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
    />
    <circle cx="12" cy="12" r="3" />
    <line
      className={styles.eyeSlash}
      x1="1"
      y1="1"
      x2="23"
      y2="23"
    />
  </svg>
</button>

          </div>

          <div className={styles.forgot}>
            <a href="#">Esqueceu a sua palavra-passe?</a>
          </div>

          <button className={styles.btn} type="submit">
            Login
          </button>

          <p className={styles.small}>
            Ainda não tem uma conta? <a href="#">Faça o seu registo</a>
          </p>
        </form>
      </main>

      <button className={styles.support}>💬 Suporte</button>
    </div>
  );
};

export default LoginForm;
