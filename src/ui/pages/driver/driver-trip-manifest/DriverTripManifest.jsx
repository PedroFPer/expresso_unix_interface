import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile";
import ManifestStatusTitle from "../driver-trip-manifest/Components/ManifestStatusTitle";
import PassengerManifest from "./Components/PassengerManifest";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/DriverTripManifest.css";

export default function DriverTripManifest() {
  const { id } = useParams();
  const { travelInfo, setTravelInfo } = useContext(TravelContext);
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (travelInfo.length === 0) {
      setLoading(true);
      return;
    }

    const foundTravel = travelInfo.find(trip => trip.id === Number(id));
    setTravel(foundTravel || null);
    setLoading(false);
  }, [travelInfo, id]);



  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!travel) {
    return <div>Viagem não encontrada</div>;
  }

   console.log(travel.passengerManifest.isFinalized)

  return (
    <div id="driver-trip-manifest">
      <HeaderBaseMobile textHeader="Lista de Presença" />

      <ManifestStatusTitle passengerManifest={travel.passengerManifest} />

      <div id="scroll-content-trip-manifest">
        <PassengerManifest
          travel={travel}
          setTravel = {setTravel}
          setTravelInfo = {setTravelInfo}
        />
      </div>
    </div>
  );
}