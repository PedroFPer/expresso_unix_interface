import { Link } from "react-router-dom";
import iconArrow from "../../../../../assets/icon-arrow.png"
import "../styles/PaymentMethodCard.css"

export default function PaymentMethodCard({travel}) {
    return (
        <section id="payment-method-card">
            <h3>Escolha sua Forma de Pagamento</h3>

            <div className="summary-item-payment-method" >
                <strong>Pix</strong>
                <figure>
                    <Link to={`/customer/${travel.id}/pix-payment-details`}>
                        <img src={iconArrow} alt="Pagamento em Pix" />
                    </Link>
                </figure>
            </div>

            <div className="summary-item-payment-method" >
                <strong>Boleto</strong>
                <figure>
                    <Link to= {`/customer/${travel.id}/boleto-payment-details`}>
                        <img src={iconArrow} alt="Pagamento em Boleto" />
                    </Link>
                </figure>
            </div>

        </section>
    )
}