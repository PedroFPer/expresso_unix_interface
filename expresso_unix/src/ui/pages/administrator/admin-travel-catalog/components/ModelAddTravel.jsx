import "../styles/ModelAddTravel.css"

export default function ModelAddTravel({openModal}){
    return(
        <aside className={`model-add-travel ${openModal ? "model-add-travel-show" : "model-add-travel-hidden"}`}>
            <h1>modal</h1>
        </aside>
    )
}