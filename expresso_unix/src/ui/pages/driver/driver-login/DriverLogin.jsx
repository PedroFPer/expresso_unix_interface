import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import HeaderDriverLogin from "./Components/HeaderDriverLogin"
import DriverFormCard from "./Components/DriverFormCard"
import {DriverContext} from "../../../../infrastructure/context/DriverProvider";
import { validationsUtils } from "../../../../infrastructure/utils/validationsUtils";
import "./styles/DriverLogin.css"

export default function DriverLogin() {
    const { driverCredentials, setDriverCredentials } = useContext(DriverContext);
    const navigate = useNavigate();


    const driverCredentialsTest ={
        email: "Name@email.com",
        password: "Dragon2023"
    }

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (field, value) => {
        setDriverCredentials(prev => ({
            ...prev,
            [field]: value,
        }));

        const validation = validationsUtils.validateField(field, value);

        setErrors(prev => ({
            ...prev,
            [field]: validation.valid ? "" : validation.message,
        }));
    };

    const handleLogin = () => {
            const fields = ["email", "password" ];
            const newErrors = {};
    
            fields.forEach(field => {
                const validation =
                    validationsUtils.validateField(field, driverCredentials[field]) ||
                    { valid: false, message: "Campo inválido" };
    
                if (!validation.valid) {
                    newErrors[field] = validation.message;
                }
            });
    
            setErrors(newErrors);

            const isEqualLogin = isEqual(driverCredentialsTest, driverCredentials);

            if (!isEqualLogin){
                window.alert("Usuário não encontrado");
                return
            }
    
            if (Object.keys(newErrors).length === 0) {
                navigate("/driver/trips");
            }
        };

    return (
        <div id="driver-login">
            <HeaderDriverLogin />
            <DriverFormCard 
             driverCredentials={driverCredentials}
             handleInputChange={handleInputChange} 
             errors={errors} />

              <button
                onClick={handleLogin}
                className="btn btn-primary btn-custom"
            >
                Ir para pagamento
            </button>
        </div>
    )
}