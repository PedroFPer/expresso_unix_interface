import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ItineraryCard from "../../../common-components/components/ItineraryCard";
import InfoCardModel from "../../../common-components/components/InfoCardModel";
import HeaderMobileResume from "./Components/HeaderMobileResume";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import { formatUtils } from "../../../../infrastructure/utils/formatUtils";
import "./styles/TravelSummary.css";

export default function TravelSummary() {
  const { id } = useParams();
  const { travelInfo } = useContext(TravelContext);
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

  console.log(travelInfo)
  console.log(travel)

  const infoCardPrice = {
    titleCard: "Valor Unitário",
    describe: formatUtils.toCurrencyBRL(travel.price)
  };

  const infoCardAvailableSeats = {
    titleCard: "Assentos Disponíveis",
    describe: travel.availableSeats
  };

  return (
    <div id="resume-travel">
      <HeaderMobileResume />

      <div id="scroll-content-resume-travel">
        <ItineraryCard travel={travel} />
        <InfoCardModel infoCard={infoCardPrice} />
        <InfoCardModel infoCard={infoCardAvailableSeats} />
      </div>

      <Link
        to={`/customer/${travel.id}/passenger-registration`}
        className="btn btn-primary btn-custom"
      >
        Continuar
      </Link>
    </div>
  );
}
