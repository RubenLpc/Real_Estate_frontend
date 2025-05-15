import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common.js";
import useHeaderColor from "../../hooks/useHeaderColor.jsx";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu.jsx";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal.jsx";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    setModalOpened(true);
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings-lr h-container">
        {/* Logo */}
        <Link to="/">
          <img className="header_logo" src="../logo1.png" alt="Logo" width={100} 
          />
        </Link>

        {/* Desktop / large menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/">Startseite</NavLink>
            <NavLink to="/properties">Immobilien</NavLink>
            <a href="mailto:lupancuruben2@gmail.com">Kontakt</a>
            {/* Dacă vrei să reintroduci butonul de adăugare proprietate: */}
            {/* <div onClick={handleAddPropertyClick}>Inserat hinzufügen</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} /> */}
          </div>
        </OutsideClickHandler>

        {/* Mobile menu icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
