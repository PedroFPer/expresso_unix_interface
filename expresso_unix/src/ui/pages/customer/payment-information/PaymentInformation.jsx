import { useLocation } from "react-router-dom";
import "./styles/PaymentInformation.css"

export default function PaymentInformation() {
    const location = useLocation();
    const travelerInformationList = location.state?.travelerInformationList || [];

    return (
        <div>
            <h1>Dados do Passageiro</h1>
            {travelerInformationList.length > 0 ? (
                travelerInformationList.map((traveler, index) => (
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
