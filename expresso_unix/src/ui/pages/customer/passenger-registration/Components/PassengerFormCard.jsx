import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/PassengerFormCard.css"

export default function PassengerFormCard({ handleInputChange, travelerInfo, errors }) {


    return (
        <section id="buyer-information-card">
            <h3>Dados de quem está comprando </h3>

            <form>
                <div className="form-group form-custom">
                    <label className="form-label">Digite seu nome completo*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: João da Silva"
                        value={maskUtils.formattersField("text",travelerInfo.name)}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    <p className="input-error">
                        {errors.name || "\u00A0"}
                    </p>
                </div>

                <div className="form-group form-custom">
                    <label className="form-label">Digite seu CPF*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: 123.456.789-10"
                        value={maskUtils.formattersField("cpf", travelerInfo.cpf)}
                        onChange={(e) => {
                            const onlyNumbers = maskUtils.onlyDigitsCpf(e.target.value);
                            handleInputChange("cpf", onlyNumbers);
                        }}
                    />
                    <p className="input-error">
                        {errors.cpf || "\u00A0"}
                    </p>
                </div>

                <div className="form-group form-custom">
                    <label className="form-label">Digite seu Email*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: Nome@email.com"
                        value={maskUtils.formattersField("text", travelerInfo.email)}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <p className="input-error">
                        {errors.email || "\u00A0"}
                    </p>
                </div>

                <div className="form-group form-custom">
                    <label className="form-label">Digite seu Telefone*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: (00) 00000-0000"
                        value={maskUtils.formattersField("phoneNumber", travelerInfo.phoneNumber)}
                        onChange={(e) =>{
                            const onlyNumbers = maskUtils.onlyDigitsPhoneNumber(e.target.value)
                            handleInputChange("phoneNumber", onlyNumbers)
                        }}
                    />
                    <p className="input-error">
                        {errors.phoneNumber || "\u00A0"}
                    </p>
                </div>

            </form>
        </section>
    )
}