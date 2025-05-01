import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css"
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="app-layout">
      <Sidebar />
      <div className="content">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Layout;