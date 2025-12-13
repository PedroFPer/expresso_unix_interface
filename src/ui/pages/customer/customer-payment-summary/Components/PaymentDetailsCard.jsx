import {formatUtils} from "../../../../../infrastructure/utils/formatUtils"
import "../styles/PaymentDetailsCard.css"

export default function PaymentDetailsCard({travelInfo}) {
    const priceTravel = formatUtils.toCurrencyBRL(travelInfo?.[0]?.price);

    return (
        <section id="payment-details-card">
            <h3>Resumo da Compra</h3>
            <div className="summary-item-payment-details">
                <strong>Valor Unitário</strong>
                <p>R${priceTravel}</p>
            </div>

            <div className="summary-item-payment-details" >
                <strong>Quant Assentos</strong>
                <p>1</p>
            </div>

            <div id="summary-total" className="summary-item-payment-details">
                <strong>Valor à Vista</strong>
                <p>R${priceTravel}</p>
            </div>
        </section>
    )
}