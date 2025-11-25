import { useLocation } from "react-router-dom";
import "./styles/DriverTripManifest.css";

export default function DriverTripManifest() {
  const location = useLocation();
  const { travel } = location.state || {}; 


  return (
    <div>
      <h1>TripManifest</h1>

      {/* Imprimir JSON formatado */}
      <pre>{JSON.stringify(travel, null, 2)}</pre>
    </div>
  );
}
