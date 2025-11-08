import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";
import { useState } from "react";

function SideBar(){

    const [SideBarIsOpen, setSideBarIsOpen] = useState(false);
    const [NomeDaEmpresa] = useState("Travel Bus");

    let sidebarClass = "sidebar closed";

    if (SideBarIsOpen) {
    sidebarClass = "SideBar Open";
  } else {
    sidebarClass = "SideBar Closed";
  }

    return(
        <div className="BT">
            <aside className={sidebarClass}>

                <img src="" alt="Logo" /> {/* lembrar de voltar aq pois nao estou conseguimdo colocar img*/}

                    <p className="EmpresaName">{NomeDaEmpresa}</p>

                <button className={`ButtonMenu ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    {SideBarIsOpen?(<p>Catalogo de Viagens Ativo</p>):(<p></p>)}
                    <i class="bi bi-copy"></i>
                </button>

                <button className={`ButtonMenu ButtonTrip ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i className="bi-suitcase"></i>
                    {SideBarIsOpen?(<p>Catalogo de Viagens</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonEmployees ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i className="bi-person-vcard"></i>
                    {SideBarIsOpen?(<p>Gerenciar Funcionarios</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonCustom ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i className="bi-pencil"></i>
                    {SideBarIsOpen?(<p>Customização</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonAccount ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i class="bi bi-person-circle"></i>
                    {SideBarIsOpen?(<p>Minha Conta</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonSettings ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i class="bi bi-gear"></i>
                    {SideBarIsOpen?(<p>Configuração</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonSuport ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i class="bi bi-person-circle"></i>
                    {SideBarIsOpen?(<p>Suporte</p>):(<p></p>)}
                </button>

                <button className={`ButtonMenu ButtonOut ${SideBarIsOpen ? "Open" : "Closed"}`}>
                    <i class="bi bi-box-arrow-right"></i>
                    {SideBarIsOpen?(<p>Sair</p>):(<p></p>)}
                </button>
                

            </aside>

            <button onClick={() => setSideBarIsOpen(!SideBarIsOpen)} className={'ButtonOpenSideBar'}>
                {SideBarIsOpen?(<i class="bi bi-caret-left"></i>):<i class="bi bi-caret-right"></i>}
            </button>
        </div>
    )
}

export default SideBar;