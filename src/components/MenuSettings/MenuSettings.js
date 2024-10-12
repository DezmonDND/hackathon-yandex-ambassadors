import "./MenuSettings.css";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AppContext from "../../context/AppContext";

function MenuSettings() {
  const navigate = useNavigate();
  const app = useContext(AppContext);

  function handleLogout() {
    app.setIsLoggedIn(localStorage.setItem('isLoggedIn', false));
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('JWT')
    navigate("/signin")
  }
  return (
    <ul className="menu__settings">
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
            <span>4</span>
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
      <button
        className="logout"
        onClick={handleLogout}
      >
        Выйти
      </button>
    </ul>
  );
}

export default MenuSettings;
