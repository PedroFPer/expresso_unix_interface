import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile.jsx";
import PassengerFormCard from "./Components/PassengerFormCard.jsx";
import { travelerValidations } from "../../../../infrastructure/validators/travelerValidations.js";
import { CustomerContext } from "../../../../infrastructure/context/CustomerContext.jsx";
import "./styles/PassengerRegistration.css";

export default function PassengerRegistration() {
    const { travelInfo, travelerInfo, setTravelerInfo } = useContext(CustomerContext);

    const navigate = useNavigate();
    const textHeader = "Dados do Passageiro";

    const [errors, setErrors] = useState({
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
    });

    const handleInputChange = (field, value) => {
        setTravelerInfo(prev => ({
            ...prev,
            [field]: value,
        }));

        const validation = travelerValidations.validateField(field, value);

        setErrors(prev => ({
            ...prev,
            [field]: validation.valid ? "" : validation.message,
        }));
    };

    const handleGoToPayment = () => {
        const fields = ["name", "cpf", "email", "phoneNumber"];
        const newErrors = {};

        fields.forEach(field => {
            const validation =
                travelerValidations.validateField(field, travelerInfo[field]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[field] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate("/customer/payment-summary");
        }
    };

    return (
        <div id="traveler-information">
            <HeaderBaseMobile textHeader={textHeader} />

            <div id="scroll-content-travel-info">
                <PassengerFormCard
                    handleInputChange={handleInputChange}
                    travelerInfo={travelerInfo}
                    errors={errors}
                />
            </div>

            <button
                onClick={handleGoToPayment}
                className="btn btn-primary btn-custom"
            >
                Ir para pagamento
            </button>
        </div>
    );
}
