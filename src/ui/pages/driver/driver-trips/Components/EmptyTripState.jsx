import withoutTripIcon from "../../../../../assets/without-trip-icon.png"
import "../styles/EmptyTripState.css"

export default function EmptyTripState(){
    return(
        <div id="empty-trip-state">
            <figure id="figure-empty-trip-state"><img src={withoutTripIcon} alt="Sem viagens disponiveis" /></figure>
            <p>Nenhum viagem Encontrada</p>
        </div>
    )
}