import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  const styles = {
    navbar: {
      width: "100%",
      height: "80px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      background: "black",
    },
    links: { marginRight: "50px", display: "flex", alignItems: "center" },
    link: {
      textDecoration: "none",
      color: "white",
      marginLeft: "20px",
      fontSize: "25px",
    },
  };

  return (
    <div className="navbar" style={styles.navbar}>
      <div className="links" style={styles.links}>
        <Link to="/" style={styles.link}>
          Shop
        </Link>
        <Link to="/cart" style={styles.link}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}
