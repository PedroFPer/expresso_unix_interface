import "../styles/ModelAddEmployees.css"

export default function ModelAddEmployees({openModal}){
    return(
        <aside className={`${openModal ? "model-add-employees-show" : "model-add-employees-hidden"}`}>
            <h1>modal</h1>
        </aside>
    )
}