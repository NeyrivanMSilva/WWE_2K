import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// STYLES
import "./sidenav.css"

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="header_web" id="navbar2">
        <div class="vertical-nav" id="sidebar">
          <div className="row header-row-logo">
            <img className="header-logo" src={"./magnifinance-logo.svg"} />
          </div>


          <ul class="nav flex-column mb-0" id="header_menu_web">


            <Link to="/" className="nav-link-container">
              <p className="nav-link-text">Home</p>
            </Link>

            <Link to="/Cursos" className="nav-link-container">
              <p className="nav-link-text">Cursos</p>
            </Link>
            <Link to="/Disciplinas" className="nav-link-container">
              <p className="nav-link-text">Disciplinas</p>
            </Link>
            <Link to="/Professores" className="nav-link-container">
              <p className="nav-link-text">Professores</p>
            </Link>
            <Link to="/Alunos" className="nav-link-container">
              <p className="nav-link-text">Alunos</p>
            </Link>
          </ul>


        </div>
      </div>

    </>
  );
}
