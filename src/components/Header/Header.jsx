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
import { HashLink } from "react-router-hash-link";

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
    <section className="h-wrapper" >
      <div className="flexCenter innerWidth paddings-lr h-container">
        {/* Logo */}
        <Link to="/">
          <img
            className="header_logo"
            src="../logo1.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop / large menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/">Startseite</NavLink>
            <NavLink to="/leistungen">Leistungen</NavLink>
            {/* <NavLink to="/properties">Immobilien</NavLink>*/}
            {/* Link către homepage + secțiunea #contact-us */}
            <HashLink
              smooth
              to="/#contact-us"
              onClick={() => setMenuOpened(false)}
              className="menu-link"
            >
              Kontakt
            </HashLink>
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
