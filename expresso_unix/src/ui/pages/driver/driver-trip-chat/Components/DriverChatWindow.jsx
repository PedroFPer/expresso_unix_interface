import iconSubmit from "../../../../../assets/icon-submit.png"
import "../styles/DriverChatWindow.css"

export default function DriverChatWindow() {
    return (
        <section id="driver-chat-window">
            
            <div id="chat-box">
                <div id="chat-alert">
                    <p>
                        As mensagens enviadas neste chat serão
                        encaminhadas para o WhatsApp de todos
                        os passageiros registrados
                    </p>
                    </div>

                    <div>text</div>
            </div>


                <form id="input-submit-message">
                    <input type="text" />
                    <button id="btn-submit-message">
                        <figure>
                            <img src={iconSubmit} alt="icone Buscar" />
                            </figure>
                    </button>
                </form>
        </section>
    )
}