import { useState } from "react"
import { useNavigate } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile"
import BuyerInformationCard from "./Components/BuyerInformationCard"
import { travelerValidations } from "../../../../infrastructure/validators/travelerValidations.js"
import "./styles/TravelerInformation.css"

export default function TravelerInformation() {
    const textHeader = "Dados do Passageiro"
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
    });

    const [travelerInformationList, setTravelerInformationList] = useState([{
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
    }])


    const handleInputChange = (field, value) => {
        setTravelerInformationList([{
            ...travelerInformationList[0],
            [field]: value
        }]);

        const validation = travelerValidations.validateField(field, value);

        setErrors(prev => ({
            ...prev,
            [field]: validation.valid ? "" : validation.message
        }));
    };


    const handleGoToPayment = () => {
        const traveler = travelerInformationList[0];
        const fields = ["name", "cpf", "email", "phoneNumber"];
        const newErrors = {};

        fields.forEach(field => {
            const validation = travelerValidations.validateField(field, traveler[field]) || { valid: false, message: "Campo inválido" };
            if (!validation.valid) {
                newErrors[field] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            navigate("/customer/payment-information", { state: { travelerInformationList } });
        }
    };




    return (
        <div id="traveler-information">
            <HeaderBaseMobile textHeader={textHeader} />
            <BuyerInformationCard
                handleInputChange={handleInputChange}
                travelerInformationList={travelerInformationList}
                errors={errors}
            />

            <button onClick={handleGoToPayment} className="btn btn-primary btn-custom">Ir para pagamento</button>
        </div>
    )
}