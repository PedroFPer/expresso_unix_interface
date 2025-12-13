import { useNavigate } from 'react-router-dom';
import "../styles/HeaderMobileResume.css"


export default function HeaderMobileResume() {
    const navigate = useNavigate();

    return (
        <header id="header-mobile-resume">
            <p>Resumo da Viagem</p>
        </header>
    );
}
