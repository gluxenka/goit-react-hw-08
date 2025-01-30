import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.Navigation}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : "")}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : "")}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
