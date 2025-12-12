import logo from "../../../assets/LogoPequenaExpressoUnix.png";
import logoSideBarOpen from "../../../assets/LogoExpressoUnix.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SideBar.css";

export default function SideBar({ sideBarIsOpen, setSideBarIsOpen }) {
  const companyName = "Travel Bus";

  const handleToogleSideBar = () => {
    setSideBarIsOpen(prev => !prev);
  };

  return (
    <aside id="side-bar-wrapper">
      <div id="side-bar">
        <figure id="logo-side-bar">
          <img src={logoSideBarOpen} alt="Logo com a Side bar aberta" />
        </figure>

        <div
          id="company-name"
          className={sideBarIsOpen ? "company-name-side-bar-open" : "company-name-side-bar-close"}
        >
          <p>{companyName}</p>
        </div>

        <nav id="nav-side-bar">
          <ul  className="nav-list-option">
            <li>
              <Link to="/" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-house-door"></i>
                <p>Inicio</p>
              </Link>
            </li>

            <li>
              <Link to="/admin/travel-catalog" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-suitcase"></i>
                <p>Catalogo de Viagens</p>
              </Link>
            </li>
    

            <li>
              <Link to="#" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-clipboard2-data"></i>
                <p>Relatório de Viagens</p>
              </Link>
            </li>

            <li>
              <Link to="/admin/manage-employees" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-person-vcard"></i>
                <p>Gerenciar Funcionários</p>
              </Link>
            </li>
          </ul>

          <ul className="nav-list-option">
            <li>
              <Link to="#" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-person-circle"></i>
                <p>Minha Conta</p>
              </Link>
            </li>

            <li>
              <Link to="#" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-gear"></i>
                <p>Configuração</p>
              </Link>
            </li>

            <li>
              <Link to="#" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-headset"></i>
                <p>Suporte</p>
              </Link>
            </li>

            <li>
              <Link to="/admin/login" className={`nav-item ${sideBarIsOpen ? "nav-item-open" : "nav-item-closed"}`}>
                <i className="bi bi-box-arrow-right"></i>
                <p>Sair</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button onClick={handleToogleSideBar} id="btn-toogle-side-bar">
        <i className={`bi ${sideBarIsOpen ? "bi-caret-left" : "bi-caret-right"}`}></i>
      </button>
    </aside>
  );
}
