import "../styles/BuyerInformationCard.css"

export default function BuyerInformationCard({ handleInputChange, travelerInformationList, errors}) {


    return (
        <section id="buyer-information-card">
            <h3>Dados de quem está comprando </h3>

            <form>
                <div className="form-group form-custom">
                    <label className="form-label">Digite seu nome completo*</label>
                    <input
                        type="text"
                        className="form-input"
                        value={travelerInformationList[0].name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                         />
                    <p className="input-error">
                       {errors.name || "\u00A0"}
                    </p>

                </div>

            </form>
        </section>
    )
}