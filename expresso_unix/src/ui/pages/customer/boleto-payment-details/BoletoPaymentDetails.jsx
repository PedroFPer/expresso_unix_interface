import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import PayeeInfo from "../../../common-components/payee-info/PayeeInfo";
import "./styles/BoletoPaymentDetails.css"

export default function BoletoPaymentDetails(){
    const textHeader = "Pagamento Via Boleto";

    return <div id="boleto-payment-details">
        <HeaderBaseMobile textHeader={textHeader} />
        <div id="scroll-content-boleto-payment">

            <PayeeInfo />
        </div>
    </div>
}