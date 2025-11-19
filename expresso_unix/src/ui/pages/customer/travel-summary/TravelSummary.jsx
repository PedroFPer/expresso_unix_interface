import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import ItineraryCard from "../../../common-components/itinerary-card/ItineraryCard"
import InfoCardModel from "../../../common-components/info-card-model/InfoCardModel"
import HeaderMobileResume from "./Components/HeaderMobileResume"
import "./styles/TravelSummary.css"

export default function TravelSummary() {

    const travelInfo = [
        {
            type: "ida",
            departureTime: "07:00",
            durationTravel: "2:00",
            arrivalTime: "09:00",
            originCity: "Feira de Santana, BA",
            originAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
            destinyCity: "Salvador, BA",
            destinyAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
            price: "R$ 80,00",
            availableSeats: 20,
            totalSeats: 40,
            date: new Date(2025, 11, 18),
            company: "Travel Bus"
        },
        {
            type: "volta",
            departureTime: "19:00",
            durationTravel: "2:00",
            arrivalTime: "21:00",
            originCity: "Salvador, BA",
            originAddress: "Praça da Sé, 406 – Pelourinho, 40020-210",
            destinyCity: "Feira de Santana, BA",
            destinyAddress: "R. Augusto dos Anjos, E - Rua Nova, 40301-110",
            price: "R$ 80,00",
            availableSeats: 20,
            totalSeats: 40,
            date: new Date(2025, 11, 18),
            company: "Travel Bus"
        }
    ];


    const infoCardPrice ={
        titleCard: "Valor Unitário" ,
        describe: travelInfo[0].availableSeats
    }
    const infoCardAvailableSeats ={
        titleCard: "Assentos Disponiveis" ,
        describe: travelInfo[0].availableSeats
    }

    return (
        <div id="resume-travel">
            <HeaderMobileResume />

            <div id="scroll-content-resume-travel">
                <ItineraryCard travelInfo={travelInfo} />
                <InfoCardModel infoCard ={infoCardPrice} />
                <InfoCardModel infoCard ={infoCardAvailableSeats} />
            </div>

            <Link 
            to={"/customer/passenger-registration"} 
            className="btn btn-primary btn-custom"
            state={{travelInfo}}>Continuar</Link>
        </div>
    )
}