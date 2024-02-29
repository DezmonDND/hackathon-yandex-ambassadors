import "./MenuList.css";
import { NavLink } from "react-router-dom";

function MenuList() {
  return (
    <ul className="menu__list">
      <NavLink
        className="menu__link"
        to="/promocodes"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Промокоды
      </NavLink>
      <NavLink
        className="menu__link"
        to="/ambassadors"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Амбассадоры
      </NavLink>
      <NavLink
        className="menu__link"
        to="/content"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Контент
      </NavLink>
      <NavLink
        className="menu__link"
        to="/send-merch"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Отправка мерча
      </NavLink>
      <NavLink
        className="menu__link"
        to="/budget"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Бюджет на мерч
      </NavLink>
      <NavLink
        className="menu__link"
        to="/budget-price"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Стоимость товара
      </NavLink>
      <NavLink
        className="menu__link"
        to="/loyalty-programm"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Программа лояльности
      </NavLink>
      <NavLink
        className="menu__link"
        to="/faq"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        FAQ
      </NavLink>
    </ul>
  );
}

export default MenuList;
