import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile"
import PayeeInfo from "../../../common-components/components/PayeeInfo";
import BoletoInstructionCard from "./Components/BoletoInstructionCard";
import "./styles/BoletoPaymentDetails.css"

export default function BoletoPaymentDetails(){
    const textHeader = "Pagamento Via Boleto";

    return <div id="boleto-payment-details">
        <HeaderBaseMobile textHeader={textHeader} />
        <div id="scroll-content-boleto-payment">
            <BoletoInstructionCard />
            <PayeeInfo />
        </div>
    </div>
}