import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import PixInstructionCard from "./Components/PixInstructionCard";
import PayeeInfo from "../../../common-components/components/PayeeInfo";
import { TravelContext } from "../../../../infrastructure/context/TravelProvider";
import "./styles/PixPaymentDetails.css"

export default function PixPaymentDetails() {
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


    const textHeader = "Pagamento Via Pix";

    return (
        <div id="pix-payment-details">
            <HeaderBaseMobile textHeader={textHeader} />

            <div id="scroll-content-pix-payment">
                <PixInstructionCard />
                <PayeeInfo travel = {travel} />
            </div>
        </div>
    )
}