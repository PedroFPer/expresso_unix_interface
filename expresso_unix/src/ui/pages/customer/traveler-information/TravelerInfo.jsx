import { useState } from "react"
import { useNavigate } from "react-router-dom";
import HeaderBaseMobile from "../../../common-components/header-base-mobile/HeaderBaseMobile.jsx"
import BuyerInfoCard from "./Components/BuyerInfoCard.jsx"
import InfoCardModel from "../../../common-components/info-card-model/InfoCardModel.jsx"
import PassengerInfoCard from "./Components/PassengerInfoCard.jsx"
import { travelerValidations } from "../../../../infrastructure/validators/travelerValidations.js"
import "./styles/TravelerInfo.css"

export default function TravelerInfo() {
    const textHeader = "Dados do Passageiro"
    const navigate = useNavigate();

    const infoCardAvailableSeats ={
        titleCard: "Assentos Disponiveis" ,
        describe: "10"
    }

    const [errors, setErrors] = useState({
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
    });


    const [travelerInfoList, setTravelerInfoList] = useState([{
        travelerId: crypto.randomUUID(),
        name: "",
        cpf: "",
        email: "",
        phoneNumber: "",
        typeTraveler: "buyer"
    }])


    const handleInputChange = (travelerId, field, value) => {
        setTravelerInfoList(prev =>
            prev.map(item =>
                item.id === travelerId
                ? {... item, [field]: value}
                :item
            )
        )

        const validation = travelerValidations.validateField(field, value);

        setErrors(prev => ({
            ...prev,
            [field]: validation.valid ? "" : validation.message
        }));
    };


    const handleGoToPayment = () => {
        const traveler = travelerInfoList[0];
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
            navigate("/customer/payment-information", { state: { travelerInfoList } });
        }
    };


    return (
        <div id="traveler-information">
            <HeaderBaseMobile textHeader={textHeader} />
            <BuyerInfoCard
                handleInputChange={handleInputChange}
                travelerInfoList={travelerInfoList}
                errors={errors}
            />
            <InfoCardModel infoCard={infoCardAvailableSeats} />
            <PassengerInfoCard />


            <button onClick={handleGoToPayment} className="btn btn-primary btn-custom">Ir para pagamento</button>
        </div>
    )
}