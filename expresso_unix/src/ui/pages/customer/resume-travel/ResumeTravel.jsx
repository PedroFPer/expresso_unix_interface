import { Link } from 'react-router-dom'
import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import ItineraryCard from "./Components/ItineraryCard"
import InfoCardModel from "../../../common-components/info-card-model/InfoCardModel"
import "./styles/ResumeTravel.css"

export default function ResumeTravel() {
    const textHeader = "Resumo da Viagem"
    const infoCardPrice ={
        titleCard: "Valor Unitário" ,
        describe: "R$ 80,00"
    }
    const infoCardAvailableSeats ={
        titleCard: "Assentos Disponiveis" ,
        describe: "10"
    }

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
            date: new Date(2025, 11, 18),
            company: "Travel Bus"
        }
    ];

    return (
        <div id="resume-travel">
            <HeaderBaseMobile textHeader={textHeader} />
            <ItineraryCard travelInfo={travelInfo} />
            <InfoCardModel infoCard ={infoCardPrice} />
            <InfoCardModel infoCard ={infoCardAvailableSeats} />

            <Link to={"/customer/traveler-info"} className="btn btn-primary btn-custom  ">Continuar</Link>
        </div>
    )
}