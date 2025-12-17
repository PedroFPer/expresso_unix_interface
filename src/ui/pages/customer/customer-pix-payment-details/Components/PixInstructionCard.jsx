import qrCodeDefault from "../../../../../assets/qr-code-default.png"
import "../styles/PixInstructionCard.css"

export default function PixInstructionCard({}) {
    return (
        <section id="pix-instruction-card">
            <p id="pix-instruction">Escaneie o QR Code ou copie o código para pagar via Pix até 25/12/2025 às 09h35.</p>
            <figure id="pix-qr-code"><img src={qrCodeDefault} alt="Qr Code Pix" /></figure>
            <button className="btn btn-primary btn-custom ">Copiar Código</button>
            <p id="pix-info">Assim que o pagamento for confirmado,
                seu bilhete será enviado automaticamente para o seu WhatsApp e e-mail.
            </p>
        </section>
    )
}