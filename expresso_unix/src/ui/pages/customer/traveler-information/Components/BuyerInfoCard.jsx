import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/BuyerInfoCard.css"

export default function BuyerInformationCard({ handleInputChange, travelerInfoList, errors }) {


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
                        value={maskUtils.formattersField("text",travelerInfoList[0].name)}
                        onChange={(e) => handleInputChange(travelerInfoList.travelerId, "name", e.target.value)}
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
                        value={maskUtils.formattersField("cpf", travelerInfoList[0].cpf)}
                        onChange={(e) => {
                            const onlyNumbers = maskUtils.onlyDigits(e.target.value);
                            handleInputChange(travelerInfoList.travelerId, "cpf", onlyNumbers);
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
                        value={maskUtils.formattersField("text", travelerInfoList[0].email)}
                        onChange={(e) => handleInputChange(travelerInfoList.travelerId, "email", e.target.value)}
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
                        value={maskUtils.formattersField("phoneNumber", travelerInfoList[0].phoneNumber)}
                        onChange={(e) =>{
                            const onlyNumbers = maskUtils.onlyDigits(e.target.value)
                            handleInputChange(travelerInfoList.travelerId, "phoneNumber", onlyNumbers)
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