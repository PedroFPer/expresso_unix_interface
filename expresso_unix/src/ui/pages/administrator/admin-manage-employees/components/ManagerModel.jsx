import { useState } from "react";
import "../styles/ManagerModel.css";

function Models({ TitleButton, TitleModel, onSave }) {
  const [ModelsIsClosed, setModelsIsClosed] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [cnh, setCnh] = useState("");

  const [errors, setErrors] = useState({});

  function handleSave() {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Digite o nome";
    if (!email.trim()) newErrors.email = "Digite o email";
    if (!role.trim()) newErrors.role = "Selecione um cargo";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave({
      name,
      email,
      role,
      cnh,
      status: "Ativo"
    });

    setModelsIsClosed(true);
    setName("");
    setEmail("");
    setRole("");
    setCnh("");
  }

  return (
    <div className="background-container">
      <button 
        className="button-open-model" 
        onClick={() => setModelsIsClosed(false)}
      >
        {TitleButton}
      </button>

      {ModelsIsClosed ? (
        <div></div>
      ) : (
        <div 
          className="background-overlay" 
          onClick={() => setModelsIsClosed(true)}
        >
          <div 
            className="model-manager" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-model-manager">
              <h2>{TitleModel}</h2>
            </div>

            <div className="layout-informations-model-manger">

              <div>
                <p className="title-input-manager">Nome do Funcionário</p>
                <input 
                  className="informations-model-manger" 
                  type="text" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div>
                <p className="title-input-manager">E-mail do funcionário</p>
                <input 
                  className="informations-model-manger" 
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="layout-input-cargo-cnh">
                <div>
                  <p className="title-input-manager">Cargo</p>
                  <select
                    className="informations-model-manger"
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                  >
                    <option value="">Selecione um cargo</option>
                    <option>Motorista</option>
                    <option>Diretor</option>
                    <option>Atendente</option>
                  </select>
                  {errors.role && <p className="error-text">{errors.role}</p>}
                </div>

                <div>
                  <p className="title-input-manager">CNH</p>
                  <input 
                    className="informations-model-manger" 
                    type="text"
                    value={cnh}
                    onChange={(e)=>setCnh(e.target.value)}
                    placeholder="Exemplo: 00000000000"
                  />
                </div>
              </div>

              <div className="layout-buttons-model-manager">
                <button 
                  className="button-cancel-model"
                  onClick={() => setModelsIsClosed(true)}
                >
                  Cancelar
                </button>

                <button 
                  className="button-save-model"
                  onClick={handleSave}
                >
                  Salvar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Models;
