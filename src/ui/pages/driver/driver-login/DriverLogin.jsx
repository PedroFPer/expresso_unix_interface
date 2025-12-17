import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import HeaderDriverLogin from "./Components/HeaderDriverLogin"
import DriverFormCard from "./Components/DriverFormCard"
import { DriverContext } from "../../../../infrastructure/context/DriverProvider";
import { validationsUtils } from "../../../../infrastructure/utils/validationsUtils";
import "./styles/DriverLogin.css"

export default function DriverLogin() {
    const { driverCredentials, setDriverCredentials } = useContext(DriverContext);
    const navigate = useNavigate();


    const [driverCredentialsInput, setDriverCredentialsInput] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (field, value) => {
        setDriverCredentialsInput(prev => ({
            ...prev,
            [field]: value,
        }));

        const validation = validationsUtils.validateField(field, value);

        setErrors(prev => ({
            ...prev,
            [field]: validation.valid ? "" : validation.message,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const fields = ["email", "password"];
        const newErrors = {};

        fields.forEach(field => {
            const validation =
                validationsUtils.validateField(field, driverCredentialsInput[field]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[field] = validation.message;
            }
        });

        setErrors(newErrors);

        const isEqualLogin = isEqual(driverCredentialsInput, driverCredentials);

        if (Object.keys(newErrors).length !== 0) {
            return;
        }

        if (isEqualLogin) {
            navigate("/driver/trips");
        } else {
            window.alert("Usuário não encontrado");
            return;
        }




    };

    return (
        <div id="driver-login">
            <HeaderDriverLogin />
            <DriverFormCard
                driverCredentialsInput={driverCredentialsInput}
                handleInputChange={handleInputChange}
                handleLogin={handleLogin}
                errors={errors} />
        </div>
    )
}