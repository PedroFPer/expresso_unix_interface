import { Link } from "react-router-dom";
import iconArrow from "../../../../../assets/icon-arrow.png"
import "../styles/TripManifestCard.css"

export default function TripManifestCard({ travel }) {
    return (
        <section id="trip-manifest-card">
            <h3>Lista de Presença</h3>

            <div id="summary-item-trip-manifest" >
                <div id="trip-status">
                    <strong>Embarque</strong>
                    <p>Concluida</p>
                </div>
                <figure>
                    <Link
                        to={"trip-manifest"}
                        state={{ travel }}>
                        <img src={iconArrow} alt="Lista de Presença" />
                    </Link>
                </figure>
            </div>

        </section>
    )
}