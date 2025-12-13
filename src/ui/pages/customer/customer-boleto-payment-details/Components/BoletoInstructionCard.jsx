import IllustrativeBoletoImage from "../../../../../assets/Illustrative-boleto-image.png"
import "../styles/BoletoInstructionCard.css"

export default function BoletoInstructionCard() {
    return (
        <section id="boleto-instruction-card">
            <p id="boleto-instruction">
                Copie o código abaixo para pagar via boleto em
                qualquer aplicativo habilitado.
            </p>

            <figure id="boleto-figure"><img src={IllustrativeBoletoImage} alt="Imagem Ilustrativa Boleto" /></figure>

            <button id="btn-boleto" className="btn btn-primary btn-custom ">Copiar Código</button>

            <p id="boleto-info">
                Assim que o pagamento for
                confirmado,seu bilhete será enviado automaticamente para o seu WhatsApp e e-mail.
            </p>

        </section>
    )
}