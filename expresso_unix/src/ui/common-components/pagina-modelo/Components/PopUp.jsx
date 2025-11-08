import "../styles/PopUp.css"

function PopUP({Title, Description}){
    

    return(
        <div className="PopUp">
            <h3 className="TitlePopUp">{Title}</h3>
            <p className="Description">{Description}</p>

            <div className="ButtonsPopUpLayout">
                <button className="ButtonPopUp ConfirmButton">Confirmar</button>
                <button className="ButtonPopUp CancelButton">Cancelar</button>
            </div>
        </div>
    )
}
export default PopUP;