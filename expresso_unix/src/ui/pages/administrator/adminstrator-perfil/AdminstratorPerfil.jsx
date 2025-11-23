import { useState } from "react";
import SideBar from "../../../common-components/components/SideBar";
import PerfilPreview from "./components/PerfilPreview";
import PerfilCustom from "./components/PerfilCustom";
import "./styles/AdminstratorPerfil.css"
function AdminstratorPerfil() {

    const [abaAtiva, setAbaAtiva] = useState("custom");

    return (
        <div className="grid-geral">
            <SideBar/>

            <main>
                <h1>Perfil</h1>

                <div>
                    <div className="buttons-chosse-component-show">
                        <button onClick={() => setAbaAtiva("custom")}>
                            Customização
                        </button>

                        <button onClick={() => setAbaAtiva("previa")}>
                            Prévia
                        </button>
                    </div>

                    <div>
                        {abaAtiva === "custom" ? (
                            <div>

                                <PerfilCustom></PerfilCustom>
                            </div>
                        ) : (

                            <div>
                               <PerfilPreview></PerfilPreview>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminstratorPerfil;
