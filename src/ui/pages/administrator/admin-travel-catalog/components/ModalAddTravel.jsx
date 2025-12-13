import { useState, useContext } from "react";
import ModalHeaderAddTravel from "./ModalHeaderAddTravel";
import ModalFormAddTravel from "./ModalFormAddTravel"
import ModalPreviewAddTravel from "./ModalPreviewAddTravel";
import { AdminContext } from "../../../../../infrastructure/context/AdminProvider";
import { validationsUtils } from "../../../../../infrastructure/utils/validationsUtils";
import "../styles/ModalAddTravel.css"

export default function ModalAddTravel({ openAddModal, handleToggleAddModal }) {
    const [activeTab, setActiveTab] = useState("form");
    const { travelInfo, setTravelInfo } = useContext(AdminContext);

    const [travel, setTravel] = useState({
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        date: new Date(),
        company: "",
        driver: ""
    });

    const emptyTravel = {
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        date: new Date(),
        company: "",
        driver: ""
    };

    const [errors, setErrors] = useState({
        type: "",
        departureTime: "",
        durationTravel: "",
        arrivalTime: "",
        originCity: "",
        originAddress: "",
        destinyCity: "",
        destinyAddress: "",
        price: "",
        availableSeats: "",
        totalSeats: "",
        date: new Date(),
        company: "",
        driver: ""
    });

    const validationMap = {
        type: "typeTravel",
        departureTime: "time",
        durationTravel: "time",
        arrivalTime: "time",
        originCity: "select",
        originAddress: "text",
        destinyCity: "select",
        destinyAddress: "text",
        price: "price",
        totalSeats: "totalSeats",
        date: "date",
        driver: "name"
    };

     const handleInputChange = (attribute, value) => {
        const field = validationMap[attribute];


        setTravel(prev => ({
            ...prev,
            [attribute]: value
        }));

        const validation = validationsUtils.validateField(field, value);

        console.log(validation.message);

        setErrors(prev => ({
            ...prev,
            [attribute]: validation.valid ? "" : validation.message
        }));
    };

     const handleRegisterTravel = () => {
        const newErrors = {};

        const finalTravel = {
            ...travel,
            company: "Travel Bus",
            availableSeats: travel.totalSeats,
        };


        Object.entries(validationMap).forEach(([attribute, field]) => {
            const validation =
                validationsUtils.validateField(field, finalTravel[attribute]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[attribute] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setTravelInfo(prev => [...prev, finalTravel]);

        window.alert("Usuário cadastrado!");

        setTravel(emptyTravel);
        
        handleToggleAddModal();
    };


    return (
        <aside className={`modal-add-travel ${openAddModal ? "modal-add-travel-show" : "modal-add-travel-hidden"}`}>
            <ModalHeaderAddTravel activeTab={activeTab} setActiveTab={setActiveTab}></ModalHeaderAddTravel>

            {activeTab === "form" && <ModalFormAddTravel />}
            {activeTab === "preview" && <ModalPreviewAddTravel />}

            <div id="group-button-add-travel">
                <button id="cancel-button-add-travel" onClick={handleToggleAddModal}>Cancelar</button>
                <button id="continue-button-add-travel">Continuar</button>

            </div>
        </aside>
    )
}