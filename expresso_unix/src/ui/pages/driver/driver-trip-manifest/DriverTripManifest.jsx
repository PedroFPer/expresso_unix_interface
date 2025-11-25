import { useLocation } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import ManifestStatusTitle from "../driver-trip-manifest/Components/ManifestStatusTitle";
import PassengerManifest from "./Components/PassengerManifest";
import "./styles/DriverTripManifest.css";

export default function DriverTripManifest() {
  const location = useLocation();
  const { travel } = location.state || {};

  const textHeader = "Lista de Presença"
  const statusTitle = "Pendente"


  return (
    <div id="driver-trip-manifest">
      <HeaderBaseMobile textHeader={textHeader}/>
      <ManifestStatusTitle statusTitle={statusTitle} />

      <div id="scroll-content-trip-manifest">
        <PassengerManifest />
      </div>
    </div>
  );
}
