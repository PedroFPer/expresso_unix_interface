import "../styles/ManifestStatusTitle.css"

export default function ManifestStatusTitle({ passengerList }) {
    const status = passengerList.isFinalized ? "Concluido" : "Pendente";
    const color = passengerList.isFinalized ? "green" : "red";

    return (
        <div id="manifest-status-title">
            <h3>
                Embarque - <span style={{ color }}>{status}</span>
            </h3>
        </div>
    );
}
