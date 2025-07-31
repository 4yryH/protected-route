import React from "react";
import { Navigation } from "./components/navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";

export const Layout = ({ user, onLogout }) => {
  return (
    <>
      <Navigation user={user} onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
