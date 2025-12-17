import "../styles/ManifestStatusTitle.css"

export default function ManifestStatusTitle({ passengerManifest }) {
    const status = passengerManifest.isFinalized ? "Concluido" : "Pendente";
    const color = passengerManifest.isFinalized ? "green" : "red";

    return (
        <div id="manifest-status-title">
            <h3>
                Embarque - <span style={{ color }}>{status}</span>
            </h3>
        </div>
    );
}
