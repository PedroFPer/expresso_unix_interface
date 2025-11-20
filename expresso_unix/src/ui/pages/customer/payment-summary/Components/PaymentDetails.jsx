import "../styles/PaymentDetails.css"

export default function PaymentDetails({travelInfo}) {
    return (
        <section id="payment-details">
            <h3>Resumo da Compra</h3>
            <div className="summary-item">
                <strong>Valor Unitário</strong>
                <p>80</p>
            </div>

            <div className="summary-item" >
                <strong>Quantidade de Assentos</strong>
                <p>1</p>
            </div>

            <div id="summary-total" className="summary-item">
                <strong>Valor à Vista</strong>
                <p>80</p>
            </div>
        </section>
    )
}