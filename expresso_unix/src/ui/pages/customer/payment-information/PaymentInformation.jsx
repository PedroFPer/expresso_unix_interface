import { useLocation } from "react-router-dom";
import "./styles/PaymentInformation.css"

export default function PaymentInformation() {
    const location = useLocation();
    const travelerInfoList = location.state?.travelerInfoList || [];

    return (
        <div>
            <h1>Dados do Passageiro</h1>
            {travelerInfoList.length > 0 ? (
                travelerInfoList.map((traveler, index) => (
                    <div key={index}>
                        <p>Nome: {traveler.name || ""}</p>
                        <p>CPF: {traveler.cpf || ""}</p>
                        <p>Email: {traveler.email || ""}</p>
                        <p>Telefone: {traveler.phoneNumber || ""}</p>
                        <p>Data de Nascimento: {traveler.dateBirth ? new Date(traveler.dateBirth).toLocaleDateString() : ""}</p>
                    </div>
                ))
            ) : (
                <p>Nenhum passageiro encontrado.</p>
            )}
        </div>
    )
}
