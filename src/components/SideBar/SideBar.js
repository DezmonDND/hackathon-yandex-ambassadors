import MenuList from "../MenuList/MenuList";
import MenuSettings from "../MenuSettings/MenuSettings";
import "./SideBar.css";
import Header from "../Header/Header";

function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__container">
        <Header></Header>
        <MenuList></MenuList>
        <MenuSettings></MenuSettings>
      </div>
    </nav>
  );
}

export default SideBar;
