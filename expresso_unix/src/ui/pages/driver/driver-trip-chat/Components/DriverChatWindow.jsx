import { useState } from "react";
import iconSubmit from "../../../../../assets/icon-submit.png"
import "../styles/DriverChatWindow.css"

export default function DriverChatWindow() {

    const loggedUserId = 1;

    const [messages, setMessages] = useState([{
        id: 1,
        userId: 2,
        name: "Rodrigo",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ratione repudiandae...",
        date: "11:30"
    },
    {
        id: 2,
        userId: 1,
        name: "Você",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ratione repudiandae...",
        date: "11:30"
    },
    {
        id: 3,
        userId: 1,
        name: "Você",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ratione repudiandae...",
        date: "11:31"
    },
    {
        id: 4,
        userId: 2,
        name: "Rodrigo",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ratione repudiandae...",
        date: "11:32"
    }])

    const [inputValue, setInputValue] = useState("");


    const handleSubmitMessage = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        const newMessage = {
            id: messages.length + 1,
            userId: 1,
            name: "Você",
            message: inputValue,
            date: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit"
            })
        };

        setMessages(prev => [...prev, newMessage]);

        setInputValue("");
    };






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

                <ul id="message-list">
                    {messages.map(msg => {
                        const isCurrentUser = msg.userId === loggedUserId;

                        return (
                            <li
                                key={msg.id}
                                className={`message-item ${isCurrentUser ? "message-item-current-user" : "message-item-other-user"}`}
                            >
                                {!isCurrentUser && <strong>{msg.name}</strong>}
                                <p>{msg.message}</p>
                                <time>{msg.date}</time>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <form id="input-submit-message" onSubmit={handleSubmitMessage}>
                <input
                    type="text"
                    placeholder="Digite uma mensagem"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button id="btn-submit-message">
                    <figure>
                        <img src={iconSubmit} alt="icone Buscar" />
                    </figure>
                </button>
            </form>


        </section>
    )
}
