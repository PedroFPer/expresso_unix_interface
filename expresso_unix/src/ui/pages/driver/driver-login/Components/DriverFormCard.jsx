import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/DriverFormCard.css"

export default function DriverFormCard({ driverCredentials, handleInputChange, handleLogin, errors }) {


    return (
        <section id="driver-form-card">
            <form id="form-drive-login">
                <div className="form-group form-custom ">
                    <label className="form-label">Digite seu email*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Exemplo: Email@email.com"
                        value={maskUtils.limitText(driverCredentials.email)}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <p className="input-error">
                        {errors.email || "\u00A0"}
                    </p>
                </div>

                <div className="form-group form-custom">
                    <label className="form-label">Digite sua senha*</label>
                    <input
                        type= "password"
                        className="form-input"
                        placeholder="********"
                        value={maskUtils.limitText("text", driverCredentials.password)}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    
                    <p className="input-error">
                        {errors.password || "\u00A0"}
                    </p>
                </div>

                <button
                    onClick={handleLogin}
                    className="btn btn-primary btn-custom"
                >
                    Entrar
                </button>

            </form>
        </section>
    )
}