import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import PayeeInfo from "../../../common-components/components/PayeeInfo";
import BoletoInstructionCard from "./Components/BoletoInstructionCard";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/CustomerBoletoPaymentDetails.css"

export default function CustomerBoletoPaymentDetails() {
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

    const textHeader = "Pagamento Via Boleto";

    return <div id="boleto-payment-details">
        <HeaderBaseMobile textHeader={textHeader} />
        <div id="scroll-content-boleto-payment">
            <BoletoInstructionCard />
            <PayeeInfo travel = {travel} />
        </div>
    </div>
}