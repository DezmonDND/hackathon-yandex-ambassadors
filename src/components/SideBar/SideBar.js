import MenuList from "../MenuList/MenuList";
import MenuSettings from "../MenuSettings/MenuSettings";
import "./SideBar.css";
import Account from "../Account/Account";

function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__container">
        <Account></Account>
        <MenuList></MenuList>
        <MenuSettings></MenuSettings>
      </div>
    </nav>
  );
}

export default SideBar;
