import "../styles/PopUp.css"

function PopUP({Title, Description, onConfirm, onCancel}) {
    

    return(
        <div className="layout-pop-up">
            <h3 className="title">{Title}</h3>
            <p className="description">{Description}</p>

            <div className="layout-buttons">
                <button className="button confirm-button" onClick={()=> {onConfirm(true); onCancel(false)}}>Confirmar</button>
                <button className="button cancel-button" onClick={()=>{onCancel(true) ; onConfirm(false)}}>Cancelar</button>
            </div>
        </div>
    )
}
export default PopUP;