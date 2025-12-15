import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import ItineraryCard from "../../../common-components/components/ItineraryCard";
import InfoCardModel from "../../../common-components/components/InfoCardModel";
import HeaderMobileResume from "./Components/HeaderMobileResume";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import { formatUtils } from "../../../../infrastructure/utils/formatUtils";
import "./styles/TravelSummary.css";

export default function TravelSummary() {
  const { id } = useParams();
  const { travelInfo } = useContext(TravelContext);



  const travel = travelInfo.find(trip => trip.id === id);

  if (!travel) {
    return <div>Carregando...</div>;
  }

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
        <ItineraryCard travelInfo={travel} />
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
