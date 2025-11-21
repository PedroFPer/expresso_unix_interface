import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import PixInstructionCard from "./Components/PixInstructionCard";
import PayeeInfo from "../../../common-components/payee-info/PayeeInfo";
import "./styles/PixPaymentDetails.css"

export default function PixPaymentDetails(){
    const textHeader = "Pagamento Via Pix";

    return(
        <div id="pix-payment-details">
            <HeaderBaseMobile textHeader = {textHeader} />

            <div id="scroll-content-pix-payment">
                <PixInstructionCard />
                <PayeeInfo />
            </div>
        </div>
    )
}