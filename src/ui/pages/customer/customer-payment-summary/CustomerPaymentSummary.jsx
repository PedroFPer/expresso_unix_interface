import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile";
import ItineraryCard from "../../../common-components/components/ItineraryCard";
import PaymentDetailsCard from "./Components/PaymentDetailsCard";
import PaymentMethodCard from "./Components/PaymentMethodCard";
import { CustomerContext } from "../../../../infrastructure/context/CustomerProvider";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/PaymentSummary.css";

export default function PaymentSummary() {
    const { travelerInfo, ticketInfo, setTicketInfo } = useContext(CustomerContext);
    const { travelInfo } = useContext(TravelContext);

    const { id } = useParams();

    const [travel, setTravel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!travelInfo || travelInfo.length === 0) {
            setLoading(true);
            return;
        }

        const foundTravel = travelInfo.find(
            trip => trip.id === Number(id)
        );

        setTravel(foundTravel || null);
        setLoading(false);
    }, [travelInfo, id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!travel) {
        return <div>Viagem não encontrada</div>;
    }

    const textHeader = "Informações de Pagamento";

    return (
        <div id="payment-summary">
            <HeaderBaseMobile textHeader={textHeader} />

            <div id="scroll-content-payment-summary">
                <ItineraryCard travel={travel} />

                <PaymentDetailsCard travel={travel} />

                <PaymentMethodCard travel={travel} />
            </div>
        </div>
    );
}
