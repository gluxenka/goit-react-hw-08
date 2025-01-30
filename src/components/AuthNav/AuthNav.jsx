import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.Navigation}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : "")}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : "")}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
