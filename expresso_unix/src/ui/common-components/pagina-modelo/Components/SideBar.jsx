import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";
import { useState } from "react";

function SideBar(){

    const [open, setOpen] = useState(false);
    const [NomeDaEmpresa] = useState("Travel Bus");

    let sidebarClass = "sidebar closed";

    if (open) {
    sidebarClass = "SideBar Open";
  } else {
    sidebarClass = "SideBar Closed";
  }


  
    
    
    return(

        <aside className={sidebarClass}>
            <button onClick={() => setOpen(!open)}>
                {open?(<i className="bi bi-arrow-bar-left"></i>):<i className="bi bi-arrow-bar-right"></i>}
            </button>

                <p>{NomeDaEmpresa}</p>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i className="bi-suitcase"></i>
                {open?(<p>Catalogo de Viagens</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i className="bi-person-vcard"></i>
                {open?(<p>Gerenciar Funcionarios</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i className="bi-pencil"></i>
                {open?(<p>Customização</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i class="bi bi-person-circle"></i>
                {open?(<p>Minha Conta</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i class="bi bi-gear"></i>
                {open?(<p>Configuração</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i class="bi bi-person-circle"></i>
                {open?(<p>Suporte</p>):(<p></p>)}
            </button>

            <button className={`ButtonMenu ${open ? "Open" : "Closed"}`}>
                <i class="bi bi-box-arrow-right"></i>
                {open?(<p>Sair</p>):(<p></p>)}
            </button>
            

        </aside>
    )
}

export default SideBar;