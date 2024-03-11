import { NavLink } from "react-router-dom";
import "./BudgetTabs.css";

function BudgetTabs() {
  return (
    <ul className="page__buget">
      <NavLink
        className="page__link"
        to="/budget-info"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#1D6BF3" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Бюджет
      </NavLink>
      <NavLink
        className="page__link"
        to="/budget-price"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#1D6BF3" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Стоимость товара
      </NavLink>
    </ul>
  );
}
export default BudgetTabs;
