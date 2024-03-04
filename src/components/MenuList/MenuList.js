import "./MenuList.css";
import { NavLink, useLocation } from "react-router-dom";

function MenuList() {
  const { pathname } = useLocation();

  return (
    <ul className="menu__list">
      <NavLink
        className="menu__link"
        to="/promocodes"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Промокоды
      </NavLink>
      <NavLink
        className="menu__link"
        to="/ambassadors"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Амбассадоры
      </NavLink>
      <NavLink
        className="menu__link"
        to="/content"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Контент
      </NavLink>
      <NavLink
        className="menu__link"
        to="/send-merch"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Отправка мерча
      </NavLink>
      <NavLink
        className="menu__link"
        to="/budget-info"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Бюджет на мерч
      </NavLink>
      <NavLink
        className="menu__link"
        to="/loyalty-programm"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Программа лояльности
      </NavLink>
      <NavLink
        className="menu__link"
        to="/faq"
        style={({ isActive }) => ({
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        FAQ
      </NavLink>
    </ul>
  );
}

export default MenuList;
