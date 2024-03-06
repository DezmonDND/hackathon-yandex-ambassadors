import "./MenuSettings.css";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function MenuSettings() {
  return (
    <ul className="menu__settings">
      <NavLink
        className="menu__link"
        to="/notices"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
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
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        История изменений
      </NavLink>
      <button
        className="logout"
      >
        Выйти
      </button>
    </ul>
  );
}

export default MenuSettings;
