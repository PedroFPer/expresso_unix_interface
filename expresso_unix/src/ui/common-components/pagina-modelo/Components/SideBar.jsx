import { Routes, Route, Navigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";
import { useState, useEffect } from "react";
import logo from "../../../../assets/logo.png";

function SideBar(){

    const [SideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [NomeDaEmpresa] = useState("Travel Bus");

    let sidebarClass = SideBarIsOpen ? "side-bar open" : "side-bar closed";

    // === MODELO 1: ajusta o MAIN sem mexer no layout ===
    useEffect(() => {
        if (SideBarIsOpen) {
            document.documentElement.classList.add("sidebar-open");
        } else {
            document.documentElement.classList.remove("sidebar-open");
        }
    }, [SideBarIsOpen]);

    return(
        <div className="layout-sidebar">
            <aside className={sidebarClass}>

                <div className='layout-logo-and-name'>
                    <img src={logo} alt="logo" className={`empresa-logo ${SideBarIsOpen ? "open" : "closed"}`} />
                    <p className="empresa-name">{NomeDaEmpresa}</p>
                </div>

                <div className='layout-buttons-1'>
                    <Link to="/">
                        <button className={`button-menu home-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i class="bi bi-house-door"></i>
                            {SideBarIsOpen ? (<p className="button-text">Inicio</p>) : (<p></p>)}
                        </button>
                    </Link>
                    <Link to="/admin/catalogo">
                        <button className={`button-menu trip-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi-suitcase"></i>
                            {SideBarIsOpen ? (<p className="button-text">Catalogo de Viagens</p>) : (<p></p>)}
                        </button>
                    </Link>
                    <Link to="/admin/modelo">
                        <button className={`button-menu list-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i class="bi bi-table"></i>
                            {SideBarIsOpen ? (<p className="button-text">Lista de Viagens</p>) : (<p></p>)}
                        </button>
                    </Link>
                    <Link to="/admin/modelo">
                        <button className={`button-menu relatorio-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i class="bi bi-clipboard2-data"></i>
                            {SideBarIsOpen ? (<p className="button-text">Relatorio de Viagens</p>) : (<p></p>)}
                        </button>
                    </Link>
                </div>

                <div className='layout-buttons-2'>
                    <Link to="/admin/manage-employees">
                        <button className={`button-menu employees-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi-person-vcard"></i>
                            {SideBarIsOpen ? (<p className="button-text">Gerenciar Funcionarios</p>) : (<p></p>)}
                        </button>
                    </Link>
                    <Link to="/admin/perfil">
                        <button className={`button-menu custom-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi-pencil"></i>
                            {SideBarIsOpen ? (<p className="button-text">Customização</p>) : (<p></p>)}
                        </button>
                    </Link>
                </div>

                <div layout-buttons-3>
                    <Link to="/admin/account">
                        <button className={`button-menu account-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-person-circle"></i>
                            {SideBarIsOpen ? (<p className="button-text">Minha Conta</p>) : (<p></p>)}
                        </button>
                    </Link>

                    <Link>
                        <button className={`button-menu settings-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-gear"></i>
                            {SideBarIsOpen ? (<p className="button-text">Configuração</p>) : (<p></p>)}
                        </button>
                    </Link>

                    <Link to="/admin/support">
                        <button className={`button-menu suport-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-headset"></i>
                            {SideBarIsOpen ? (<p className="button-text">Suporte</p>) : (<p></p>)}
                        </button>
                    </Link>

                    <Link to="/admin/login">
                        <button className={`button-menu out-button ${SideBarIsOpen ? "open" : "closed"}`}>
                            <i className="bi bi-box-arrow-right"></i>
                            {SideBarIsOpen ? (<p className="button-text">Sair</p>) : (<p></p>)}
                        </button>
                    </Link>
                </div>
            </aside>

            <button 
                onClick={() => setSideBarIsOpen(!SideBarIsOpen)} 
                className="button-open-sidebar"
            >
                {SideBarIsOpen ? (<i className="bi bi-caret-left"></i>) : (<i className="bi bi-caret-right"></i>)}
            </button>
        </div>
    )
}

export default SideBar;
