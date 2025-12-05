import { useState} from "react";
import { maskUtils } from "../../../../../infrastructure/utils/maskUtils";
import "../styles/AdminFormCard.css";

export default function AdminFormCard({ adminInfo, handleLogin, handleInputChange, errors }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
            <section id="right-panel">
                <h2 id="login-title">Faça seu login</h2>

                <form id="form-login-admin">
                    <div className="form-group form-custom-admin">
                        <label className="field-label">Email</label>
                        <input
                            type="email"
                            className="text-field"
                            placeholder="email@email.com"
                            value={maskUtils.limitText(adminInfo.email)}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        <p className="input-error-desktop">
                            {errors.email || "\u00A0"}
                        </p>
                    </div>


                    <div className="form-group form-custom-admin">
                        <label className="field-label">Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="text-field"
                                placeholder="********"
                                value={maskUtils.limitText(adminInfo.password)}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                            />
                            <i
                                className={`password-icon bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </div>
                        <p className="input-error-desktop">
                            {errors.password || "\u00A0"}
                        </p>
                    </div>


                    <button id="btn-login-admin" className="btn" onClick={handleLogin}>
                        Entrar
                    </button>
                </form>

            </section>
    );
}