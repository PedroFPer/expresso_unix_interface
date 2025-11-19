import { useLocation } from "react-router-dom";
import "./styles/PaymentSummary.css"

export default function PaymentSummary() {
    const location = useLocation();
    const travelerInfoList = location.state?.travelerInfoList || [];

    return (
        <div>
            
        </div>
    )
}
