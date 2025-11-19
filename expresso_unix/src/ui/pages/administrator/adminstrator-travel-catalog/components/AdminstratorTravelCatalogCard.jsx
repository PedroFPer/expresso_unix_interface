import "../styles/AdminstratorTravelCatalogCard.css"

function AdminstratorTravelCatalogCard({ origem, destino, duracao, price,goAndGoback }) {
  
  return (
    <div className="layout-card">
      <div className="layout-information-card">
            <div>
                <p className="title-information-card">ORIGEM</p>
                <p className="information-card">{origem}</p>
            </div>
            <div>
                <p className="title-information-card">DESTINO</p>
                <p className="information-card">{destino}</p>
            </div>
            <div>
                <p className="title-information-card">DURACAO</p>
                <p className="information-card">{duracao}</p>
            </div>
            <div>
                <p className="title-information-card">A PARTIR DE</p>
                <p  className="information-card">{price}</p>
            </div>
            <button ><i class="bi bi-copy"></i></button>
      </div>

      <div className="layout-button-card">
        <i class="bi bi-bus-front"></i>
        <i class="bi bi-qr-code-scan"></i>
        <div>
          {goAndGoback == "go"?( <div className="go-and-goback"><i class="bi bi-arrow-right"></i><p>somente ida</p></div> ):(
            <div className="go-and-goback"><i class="bi bi-arrow-left-right"></i><p>ida e volta</p></div>
          )}
        </div>
        <button>Ativa</button>
      </div>
    </div>
  );
}
export default AdminstratorTravelCatalogCard;