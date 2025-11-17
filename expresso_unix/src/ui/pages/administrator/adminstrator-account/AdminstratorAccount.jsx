import { useState } from "react";
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import "./styles/AdminstratorAccount.css";

function AdminstratorAccount() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className="grid-geral">
            <SideBar/>
            <main>
                <div className="title-account">
                    <h1>Minha Conta</h1>
                    <h2>Informações pessoais</h2>
                </div>

                <div className="layout-inputs">

                    
                    <div className="layout-input-name">
                        <p className="title-input">Nome</p>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    
                    <div className="input-email-and-text">
                        <p className="title-input">Email</p>    
                        <div className="layout-input-email">
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button>Alterar Email</button>
                        </div>
                    </div>

                    
                    <div>
                        <p className="title-input">Senha</p>
                        <div className="layout-input-senha">
                            <input 
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <button>Alterar Senha</button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default AdminstratorAccount;
