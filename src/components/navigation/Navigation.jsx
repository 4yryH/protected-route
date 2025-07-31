import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";

export const Navigation = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Домашняя страница
        </NavLink>

        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Профиль
        </NavLink>

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Админ
        </NavLink>

        <NavLink
          to="/login"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Логин
        </NavLink>

        {user ? (
          <div className="user-menu-wrapper">
            <p>
              Вход выполнен: <span>{user}</span>
            </p>
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <div className="user-menu-wrapper">
            <p>Вы вошли как гость</p>
          </div>
        )}
      </nav>
    </>
  );
};
