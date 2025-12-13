import { useParams } from "react-router-dom"
import { useState, useContext } from "react";
import {DriverContext} from "../../../../infrastructure/context/DriverProvider"
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import InfoCardModel from "../../../common-components/components/InfoCardModel"
import ItineraryCard from "../../../common-components/components/ItineraryCard"
import TripManifestCard from "./Components/TripManifestCard";
import TripChatCard from "./Components/TripChatCard";
import "./styles/DriverTripsResume.css"

export default function DriverTripsResume() {
    const { id } = useParams();
    const { travelInfo, setTravelInfo } = useContext(DriverContext);

    const travel =travelInfo[id];

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
                <TripManifestCard travel = {travel} />
                <TripChatCard travel={travel} />
            </div>
        </div>
    )
}