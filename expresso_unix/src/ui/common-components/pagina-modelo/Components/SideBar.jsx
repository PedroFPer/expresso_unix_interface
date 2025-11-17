import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";
import { useState } from "react";
import logo from "../../../../assets/logo.png";

function SideBar(){

    const [SideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [NomeDaEmpresa] = useState("Travel Bus");

    let sidebarClass = "sidebar closed";

    if (SideBarIsOpen) {
    sidebarClass = "side-bar open";
  } else {
    sidebarClass = "side-bar closed";
  }

    return(
        <div className="layout-sidebar">
            <aside className={sidebarClass}>

                <img src={logo} alt="logo" className={`empresa-logo ${SideBarIsOpen ? "open" : "closed"}`} />
                <p className="empresa-name">{NomeDaEmpresa}</p>

                <button className={`button-menu copy-button ${SideBarIsOpen ? "open " : "closed"}`}>
                    {SideBarIsOpen?(<p className="button-text-trip">Catalogo de Viagens Ativo</p>):(<p></p>)}
                    <i class="bi bi-copy"></i>
                </button>

                <button className={`button-menu trip-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i className="bi-suitcase"></i>
                    {SideBarIsOpen?(<p className="button-text">Catalogo de Viagens</p>):(<p></p>)}
                </button>

                <button className={`button-menu employees-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i className="bi-person-vcard"></i>
                    {SideBarIsOpen?(<p className="button-text">Gerenciar Funcionarios</p>):(<p></p>)}
                </button>

                <button className={`button-menu custom-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i className="bi-pencil"></i>
                    {SideBarIsOpen?(<p className="button-text">Customização</p>):(<p></p>)}
                </button>

                <button className={`button-menu account-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i class="bi bi-person-circle"></i>
                    {SideBarIsOpen?(<p className="button-text">Minha Conta</p>):(<p></p>)}
                </button>

                <button className={`button-menu settings-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i class="bi bi-gear"></i>
                    {SideBarIsOpen?(<p className="button-text">Configuração</p>):(<p></p>)}
                </button>

                <button className={`button-menu suport-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i class="bi bi-headset"></i>
                    {SideBarIsOpen?(<p className="button-text">Suporte</p>):(<p></p>)}
                </button>

                <button className={`button-menu out-button ${SideBarIsOpen ? "open" : "closed"}`}>
                    <i class="bi bi-box-arrow-right"></i>
                    {SideBarIsOpen?(<p className="button-text">Sair</p>):(<p></p>)}
                </button>
                

            </aside>

            <button onClick={() => setSideBarIsOpen(!SideBarIsOpen)} className={'button-open-sidebar'}>
                {SideBarIsOpen?(<i class="bi bi-caret-left"></i>):<i class="bi bi-caret-right"></i>}
            </button>
        </div>
    )
}

export default SideBar;