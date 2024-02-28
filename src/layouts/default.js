import SearchBlock from "../components/SearchBlock/SearchBlock"
import SideBar from "../components/SideBar/SideBar";

function Layout({ children }) {
  return (
    <main className="main">
      <SideBar></SideBar>
      <section>
        <SearchBlock />
        {children}
      </section>
    </main>
  );
}

export default Layout;
