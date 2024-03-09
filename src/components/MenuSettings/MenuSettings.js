import "./MenuSettings.css";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function MenuSettings() {
  return (
    <ul className="menu__settings">
      <NavLink
        className="menu__link"
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Войти
      </NavLink>
      <NavLink
        className="menu__link"
        to="/notices"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        <div className="menu__badge">
          Уведомления
          <div>
            <ChatBubbleIcon color="#fff" />
            <span>12</span>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="menu__link"
        to="/history"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        История изменений
      </NavLink>
      <NavLink
        className="menu__link"
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Выйти
      </NavLink>
    </ul>
  );
}

export default MenuSettings;
