import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import HeaderBaseMobile from "../../../common-components/components/HeaderBaseMobile.jsx";
import PassengerFormCard from "./Components/PassengerFormCard.jsx";

import { validationsUtils } from "../../../../infrastructure/utils/validationsUtils.js";
import { CustomerContext } from "../../../../infrastructure/context/CustomerProvider.jsx";

import "./styles/PassengerRegistration.css";

export default function PassengerRegistration() {
    const { travelerInfo, setTravelerInfo } = useContext(CustomerContext);
    const { id } = useParams();
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

        const validation = validationsUtils.validateField(field, value);

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
                validationsUtils.validateField(field, travelerInfo[field]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[field] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate(`/customer/${id}/payment-summary`);
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
