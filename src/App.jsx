import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import NotFoundPage from "./pages/404/404.jsx";
import { Home } from "./pages/home/Home.jsx";
import ProtectedRoute from "./components/protected-route/ProtectedRoute.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Profile } from "./pages/profile/Profile.jsx";
import { Admin } from "./pages/admin/Admin.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const handleLogout = () => setUser(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} onLogout={handleLogout} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute isAuth={user === "user"}>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "admin",
          element: (
            <ProtectedRoute isAuth={user === "admin"}>
              <Admin />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: <Login setUser={setUser} />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
