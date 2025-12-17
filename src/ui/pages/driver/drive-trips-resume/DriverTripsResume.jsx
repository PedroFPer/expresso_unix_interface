import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider"
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import InfoCardModel from "../../../common-components/components/InfoCardModel"
import ItineraryCard from "../../../common-components/components/ItineraryCard"
import TripManifestCard from "./Components/TripManifestCard";
import "./styles/DriverTripsResume.css"

export default function DriverTripsResume() {
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


    const textHeader = "Detalhes da Viagem";

    const infoCard = {
        titleCard: "Motorista",
        describe: travel.driver
    }



    return (
        <div id="driver-trips-resume">
            <HeaderBaseMobile textHeader={textHeader} />
            <div id="scroll-content-driver-trips-resume">
                <ItineraryCard travel={travel} />
                <InfoCardModel infoCard={infoCard} />
                <TripManifestCard
                    travel={travel}
                />
            </div>
        </div>
    )
}