import "./styles/HeaderBaseMobile.css"

export default function HeaderBaseMobile({textHeader}){

    return(
        <header id="header-base-mobile">
            <i className="bi bi-arrow-left-circle"></i>
            <p>{textHeader}</p>
        </header>
    );
}