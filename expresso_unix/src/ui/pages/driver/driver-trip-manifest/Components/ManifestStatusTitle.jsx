import "../styles/ManifestStatusTitle.css"

export default function ManifestStatusTitle({statusTitle}){
    

    return(
        <div id="manifest-status-title">
            <h3>Embarque - <span id="status-title">{statusTitle}</span></h3>
        </div>
    )
}