import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/DriverFormCard.css"

export default function DriverFormCard({ driverCredentials, handleInputChange, errors }) {
    return (
        <section id="driver-form-card">
            <form>
                <div className="form-group form-custom">
                    <label className="form-label">Digite seu email*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: Email@email.com"
                        value={maskUtils.maskField("text", driverCredentials.email)}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <p className="input-error">
                        {errors.email || "\u00A0"}
                    </p>
                </div>

                <div className="form-group form-custom">
                    <label className="form-label">Digite seu email*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="********"
                        value={maskUtils.maskField("text", driverCredentials.password)}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <p className="input-error">
                        {errors.password || "\u00A0"}
                    </p>
                </div>

            </form>
        </section>
    )
}