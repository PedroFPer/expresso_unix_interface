import "../styles/WelcomePanel.css"

export default function WelcomePanel({logoExpressoUnix}) {
    return (
        <aside id="left-panel">
            <figure id="system-logo"><img src={logoExpressoUnix} alt="System Logo"  /></figure>
            <div id="left-panel-messages">
                <h3>Bem vindo de Volta!</h3>
                <p>Faça o login para acessar sua conta</p>
            </div>
        </aside>
    )
}