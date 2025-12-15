import { useParams } from "react-router-dom"
import { useContext } from "react";
import {TravelContext} from "../../../../infrastructure/context/TravelProvider"
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import InfoCardModel from "../../../common-components/components/InfoCardModel"
import ItineraryCard from "../../../common-components/components/ItineraryCard"
import TripManifestCard from "./Components/TripManifestCard";
import "./styles/DriverTripsResume.css"

export default function DriverTripsResume() {
    const { id } = useParams();
    const { travelInfo } = useContext(TravelContext);

    console.log(travelInfo);

    const travel = travelInfo.find(trip => trip.id === id);


      if (!travel) {
        return <div>Carregando...</div>;
    }

    const textHeader = "Detalhes da Viagem";

    const infoCard ={
        titleCard: "Motorista",
        describe: travel.driver
    }

    

    return (
        <div id="driver-trips-resume">
            <HeaderBaseMobile textHeader={textHeader} />
            <div id="scroll-content-driver-trips-resume">
                <ItineraryCard travelInfo={travel} />
                <InfoCardModel infoCard = {infoCard} />
                <TripManifestCard 
                travel = {travel}
                 />
            </div>
        </div>
    )
}