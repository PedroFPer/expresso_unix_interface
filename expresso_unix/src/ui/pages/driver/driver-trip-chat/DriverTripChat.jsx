import { useLocation } from "react-router-dom";
import "./styles/DriverTripChat.css"

export default function DriverTripChat() {
    const location = useLocation();
    const { travel } = location.state || {};

    return (
        <div>
            <h1>TripChat</h1>

            {/* Imprimir JSON formatado */}
            <pre>{JSON.stringify(travel, null, 2)}</pre>
        </div>
    )
}