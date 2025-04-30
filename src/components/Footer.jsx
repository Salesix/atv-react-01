const Footer = () => {
    return (
      <footer style={{
        marginTop: "2rem",
        padding: "1rem",
        background: "#eee",
        textAlign: "center"
      }}>
        <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;