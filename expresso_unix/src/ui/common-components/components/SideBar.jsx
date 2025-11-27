import { Routes, Route, Navigate, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";
import { useState, useEffect } from "react";
import logo from "../../../assets/LogoPequenaExpressoUnix.png";
import logoSideBarOpen from "../../../assets/LogoExpressoUnix.png";

function SideBar() {
    const [SideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [NomeDaEmpresa] = useState("Travel Bus");

    const sidebarClass = SideBarIsOpen ? "side-bar open" : "side-bar closed";

    useEffect(() => {
        document.documentElement.classList.toggle("sidebar-open", SideBarIsOpen);
    }, [SideBarIsOpen]);

    return (
        <div className="layout-sidebar">
            <aside className={sidebarClass}>

                <div className="layout-logo-and-name">
                    <img 
                        src={SideBarIsOpen ? logoSideBarOpen : logo} 
                        alt="logo" 
                        className={`empresa-logo ${SideBarIsOpen ? "open" : "closed"}`} 
                    />
                    <p className="empresa-name">{NomeDaEmpresa}</p>
                </div>

                <div className="layout-buttons-1">
                    <Link to="/">
                        <button className={`button-menu home-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-house-door"></i>
                            {SideBarIsOpen && <p className="button-text">Inicio</p>}
                        </button>
                    </Link>

                    <Link to="/admin/catalogo">
                        <button className={`button-menu trip-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-suitcase"></i>
                            {SideBarIsOpen && <p className="button-text">Catalogo de Viagens</p>}
                        </button>
                    </Link>

                    <Link to="#">
                        <button className={`button-menu list-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-table"></i>
                            {SideBarIsOpen && <p className="button-text">Lista de Viagens</p>}
                        </button>
                    </Link>

                    <Link to="#">
                        <button className={`button-menu relatorio-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-clipboard2-data"></i>
                            {SideBarIsOpen && <p className="button-text">Relatorio de Viagens</p>}
                        </button>
                    </Link>
                </div>

                <div className="layout-buttons-2">
                    <Link to="/admin/manage-employees">
                        <button className={`button-menu employees-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-person-vcard"></i>
                            {SideBarIsOpen && <p className="button-text">Gerenciar Funcionarios</p>}
                        </button>
                    </Link>

                    <Link to="#">
                        <button className={`button-menu custom-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-pencil"></i>
                            {SideBarIsOpen && <p className="button-text">Customização</p>}
                        </button>
                    </Link>
                </div>

        
                <div className="layout-buttons-3">
                    
                        <button className={`button-menu account-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-person-circle"></i>
                            {SideBarIsOpen && <p className="button-text">Minha Conta</p>}
                        </button>
                    

                    <Link to="#">
                        <button className={`button-menu settings-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-gear"></i>
                            {SideBarIsOpen && <p className="button-text">Configuração</p>}
                        </button>
                    </Link>

                    <Link to="#">
                        <button className={`button-menu suport-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-headset"></i>
                            {SideBarIsOpen && <p className="button-text">Suporte</p>}
                        </button>
                    </Link>

                    <Link to="/admin/login">
                        <button className={`button-menu out-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-box-arrow-right"></i>
                            {SideBarIsOpen && <p className="button-text">Sair</p>}
                        </button>
                    </Link>
                </div>

            </aside>

            <button 
                onClick={() => setSideBarIsOpen(!SideBarIsOpen)} 
                className="button-open-sidebar"
            >
                <i className={`bi ${SideBarIsOpen ? "bi-caret-left" : "bi-caret-right"}`}></i>
            </button>
        </div>
    );
}

export default SideBar;
