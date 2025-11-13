import "../styles/PopUp.css"

function PopUP({Title, Description}){
    

    return(
        <div className="layout-pop-up">
            <h3 className="title">{Title}</h3>
            <p className="description">{Description}</p>

            <div className="layout-buttons">
                <button className="button confirm-button">Confirmar</button>
                <button className="button cancel-button">Cancelar</button>
            </div>
        </div>
    )
}
export default PopUP;