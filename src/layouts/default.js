import SideBar from "../components/SideBar/SideBar";

function Layout({ children }) {
  return (
    <main className="main">
      <SideBar></SideBar>
      <section className="content">{children}</section>
    </main>
  );
}

export default Layout;
