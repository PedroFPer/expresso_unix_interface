import { Link } from 'react-router-dom'
import { useContext } from "react";
import ItineraryCard from "../../../common-components/itinerary-card/ItineraryCard"
import InfoCardModel from "../../../common-components/info-card-model/InfoCardModel"
import HeaderMobileResume from "./Components/HeaderMobileResume"
import { CustomerContext } from '../../../../infrastructure/context/CustomerContext';
import "./styles/TravelSummary.css"

export default function TravelSummary() {
    const { travelInfo } = useContext(CustomerContext);

    const infoCardPrice = {
        titleCard: "Valor Unitário",
        describe: travelInfo?.[0]?.price
    }
    const infoCardAvailableSeats = {
        titleCard: "Assentos Disponiveis",
        describe: travelInfo?.[0]?.availableSeats
    }

    return (
        <div id="resume-travel">
            <HeaderMobileResume />

            <div id="scroll-content-resume-travel">
                <ItineraryCard travelInfo={travelInfo} />
                <InfoCardModel infoCard={infoCardPrice} />
                <InfoCardModel infoCard={infoCardAvailableSeats} />
            </div>

            <Link
                to={"/customer/passenger-registration"}
                className="btn btn-primary btn-custom"
            >Continuar</Link>
        </div>
    )
}