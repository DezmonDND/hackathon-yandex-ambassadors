import MenuList from "../MenuList/MenuList";
import MenuSettings from "../MenuSettings/MenuSettings";
import "./SideBar.css";
import Header from "../Header/Header";

function SideBar() {
  return (
    <nav className="sideBar">
      <Header></Header>
      <MenuList></MenuList>
      <MenuList></MenuList>
      <MenuList></MenuList>
      <MenuList></MenuList>
      <MenuList></MenuList>
      <MenuSettings></MenuSettings>
    </nav>
  );
}

export default SideBar;
