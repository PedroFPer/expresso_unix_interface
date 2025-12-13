import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import PixInstructionCard from "./Components/PixInstructionCard";
import PayeeInfo from "../../../common-components/components/PayeeInfo";
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