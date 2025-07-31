import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = ({ setUser }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === "admin" && password === "admin") {
      setUser("admin");
      navigate("/admin");
    } else if (login === "user" && password === "user") {
      setUser("user");
      navigate("/profile");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <>
      <h1>Авторизуйтесь</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="login">Введите логин</label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <label htmlFor="password">Введите пароль</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Войти</button>
      </form>
    </>
  );
};
