import { NavLink } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className="link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">Contatos</NavLink>
          </li>
          <li>
            <NavLink to="/user/1" className="link">Usuario</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;