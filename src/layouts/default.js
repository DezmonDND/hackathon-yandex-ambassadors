import SideBar from "../components/SideBar/SideBar";

function Layout({ children }) {
  return (
    <main className="main">
      <SideBar></SideBar>
      {children}
    </main>
  );
}

export default Layout;
