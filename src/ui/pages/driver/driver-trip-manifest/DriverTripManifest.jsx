import { useParams } from "react-router-dom";
import { useContext } from "react";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile";
import ManifestStatusTitle from "../driver-trip-manifest/Components/ManifestStatusTitle";
import PassengerManifest from "./Components/PassengerManifest";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/DriverTripManifest.css";

export default function DriverTripManifest() {
  const { id } = useParams();
  const { travelInfo, setTravelInfo } = useContext(TravelContext);

  const travel = travelInfo.find(trip => trip.id === id);

  if (!travel) {
    return <div>Carregando...</div>;
  }

  return (
    <div id="driver-trip-manifest">
      <HeaderBaseMobile textHeader="Lista de Presença" />

      <ManifestStatusTitle passengerList={travel.passengerManifest} />

      <div id="scroll-content-trip-manifest">
        <PassengerManifest
          passengerManifest={travel.passengerManifest}
          travelId={travel.id}
          setTravelInfo={setTravelInfo}
        />
      </div>
    </div>
  );
}
