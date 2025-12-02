import logo from "../../../assets/LogoPequenaExpressoUnix.png";
import logoSideBarOpen from "../../../assets/LogoExpressoUnix.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "../styles/SideBar.css";


export default function SideBar({ sideBarIsOpen, setSideBarIsOpen }) {
    const companyName = "Travel Bus";

    const handleToogleSideBar = () => {
        setSideBarIsOpen(prev => !prev);
    }



    return (
        <aside id="side-bar-wrapper">
            <div id="side-bar" >
                <figure id="logo-side-bar">
                    <img src={logoSideBarOpen} alt="Logo com a Side bar aberta" />
                </figure>

                <div id="company-name">
                    <p>{companyName}</p>
                </div>

                <div id="nav-side-bar">
                    <nav className="group-nav-bar">
                        <ul className="nav-list-option">
                            <li className="nav-item-option">
                                <Link to="/">
                                    <i className="bi bi-house-door"></i>
                                    {sideBarIsOpen && <p className="button-text">Inicio</p>}
                                </Link>

                            </li>
                        </ul>
                    </nav>

                    <nav className="group-nav-bar">
                        <ul className="nav-list-option">
                            <li className="nav-item-option"></li>
                        </ul>
                    </nav>
                </div>




            </div>
            <button
                onClick={handleToogleSideBar}
                id="btn-toogle-side-bar"
            >
                <i className={`bi ${sideBarIsOpen ? "bi-caret-left" : "bi-caret-right"}`}></i>
            </button>

        </aside>
    )
}

