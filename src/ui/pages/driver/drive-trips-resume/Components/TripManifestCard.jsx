import { Link } from "react-router-dom";
import iconArrow from "../../../../../assets/icon-arrow.png"
import "../styles/TripManifestCard.css"

export default function TripManifestCard({ travel }) {
    const status = travel.passengerManifest.isFinalized ? "Concluído" : "Pendente";
    const color = travel.passengerManifest.isFinalized ? "green" : "red";

    return (
        <section id="trip-manifest-card">
            <h3>Lista de Presença</h3>

            <div id="summary-item-trip-manifest">
                <div id="trip-status">
                    <strong>Embarque</strong>
                    <p style={{ color }}>{status}</p>
                </div>

                <figure>
                    <Link to={`/driver/trips/trips-resume/${travel.id}/trip-manifest`}>
                        <img src={iconArrow} alt="Lista de Presença" />
                    </Link>

                </figure>
            </div>
        </section>
    );
}
