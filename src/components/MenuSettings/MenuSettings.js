import "./MenuSettings.css";
import { NavLink } from "react-router-dom";

function MenuSettings() {
  return (
    <ul className="menu__settings">
      <NavLink
        className="menu__link"
        to="/history"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        История изменений
      </NavLink>
      <NavLink
        className="menu__link"
        to="/settings"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Настройки
      </NavLink>
    </ul>
  );
}

export default MenuSettings;
