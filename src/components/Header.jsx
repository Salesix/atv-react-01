
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header >
      <nav id="navegacao">
        <Link to="/" >Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;