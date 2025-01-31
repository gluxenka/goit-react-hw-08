import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Loader from "../Loader/Loader.jsx";
import { Layout } from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(
  () => import("../../pages/ContactsPage/ContactsPage"),
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(
  () => import("../../pages/RegistrationPage/RegistrationPage"),
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage"),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
