import React, { Fragment, useEffect, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const arr = ["anasayfa", "hakkımızda", "profil", "iletişim"];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <div className="menu-button-fixer">
        <div
          onClick={() => setOpenMenu((prev) => !prev)}
          className={openMenu ? "open menu-button" : "menu-button"}
        >
          <div className="menu-button__burger"></div>
        </div>
      </div>
      <header
        className="navigation"
        style={{ transform: openMenu ? "translateY(0)" : "translateY(-150%)" }}
      >
        <ul>
          {arr.map((item) => (
            <li key={item}>
              <NavLink
                data-text={`${item}`}
                to={item === "anasayfa" ? "/" : `/${item}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </Fragment>
  );
};

export default Navbar;
