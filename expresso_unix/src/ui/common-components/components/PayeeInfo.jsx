import "../styles/PayeeInfo.css"

export default function PayeeInfo(){
    return(
        <section id="payee-info">
            <h3>Dados do Favorecido</h3>

                    <div id="payee-name" className="summary-item-pix-payment">
                        <strong>Favorecido</strong>
                        <p>Travel Bus Serviço de Transporte</p>
                    </div>

                    <div className="summary-item-pix-payment">
                        <strong>Valor Total</strong>
                        <p>R$ 160,00</p>
                    </div>
        </section>
    )
}