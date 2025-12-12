import "../styles/HeaderTravelCatalog.css"

export default function HeaderTravelCatalog(){
    return(
        <div id="header-travel-catalog">
            <h1>Catalogo de Viagens</h1>
            <nav>
                <a className="catalog-option-active" href="#">Viagens Ativas</a>
                <a className="catalog-option-inactive" href="#">Viagens Finalizadas</a>
                <a className="catalog-option-inactive" href="#">Viagens Canceladas</a>
            </nav>
        </div>
    )
}