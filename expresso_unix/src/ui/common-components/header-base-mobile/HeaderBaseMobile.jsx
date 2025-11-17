import { useNavigate } from 'react-router-dom';
import "./styles/HeaderBaseMobile.css"

export default function HeaderBaseMobile({ textHeader }) {
    const navigate = useNavigate();

    return (
        <header id="header-base-mobile">
            <i 
                className="bi bi-arrow-left-circle" 
                onClick={() => navigate(-1)} 
                style={{ cursor: 'pointer' }} 
            ></i>
            <p>{textHeader}</p>
        </header>
    );
}
