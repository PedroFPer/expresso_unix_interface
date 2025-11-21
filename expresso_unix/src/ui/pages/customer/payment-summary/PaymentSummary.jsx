import { useState, useContext } from "react";
import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import ItineraryCard from "../../../common-components/itinerary-card/ItineraryCard"
import PaymentDetailsCard from "./Components/PaymentDetailsCard";
import PaymentMethodCard from "./Components/PaymentMethodCard";
import { CustomerContext } from "../../../../infrastructure/context/CustomerContext";
import "./styles/PaymentSummary.css"

export default function PaymentSummary() {
    const { travelInfo, travelerInfo, ticketInfo, setTicketInfo } = useContext(CustomerContext);

    const textHeader = "Informações de Pagamento";

    return (
        <div id="payment-summary">
            <HeaderBaseMobile textHeader={textHeader} />
            <div id="scroll-content-payment-summary">
                <ItineraryCard 
                travelInfo={travelInfo}
                />

                <PaymentDetailsCard 
                travelInfo={travelInfo} 
                />

                <PaymentMethodCard />
            </div>


        </div>
    )
}
