import { NavLink } from "react-router-dom";
import MenuList from "../components/MenuList/MenuList";
import Layout from "../layouts/default";

export function NewPage() {
  return (
    <Layout>
      <NavLink
        className="menu__sub-link"
        to="/budget"
        style={({ isActive }) => ({
          // backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Бюджет
      </NavLink>
      <NavLink
        className="menu__sub-link"
        to="/budget-price"
        style={({ isActive }) => ({
          // backgroundColor: isActive ? "#2337B7" : "",
          color: isActive ? "#FFFFFF" : "",
        })}
      >
        Стоимость товара
      </NavLink>
    </Layout>
  );
}
