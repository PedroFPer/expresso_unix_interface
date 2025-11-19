import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../../../assets/logo.png";
import "./styles/AdminstratorLogin.css";


function AdminstratorLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [exibirSenha, setExibirSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function validarCampos() {
    let formularioValido = true;

    if (email.trim() === "") {
      setErroEmail("Digite o email");
      formularioValido = false;
    } else {
      setErroEmail("");
    }

    if (senha.trim() === "") {
      setErroSenha("Digite a senha");
      formularioValido = false;
    } else {
      setErroSenha("");
    }

    
  }

  return (
    <div className="pagina-login">
      <div className="caixa-login">

        <div className="lado-esquerdo">
          <img src={logo} alt="Logo" className="logo-sistema" />
          <h1 className="titulo-sistema">Expresso Unix</h1>
          <p className="mensagem-boas-vindas">Bem vindo de volta!</p>
          <p className="mensagem-subtitulo">Faça o login para acessar sua conta</p>
        </div>

        <div className="lado-direito">
          <h2 className="titulo-login">Faça seu login</h2>

          <label className="label-campo">Email</label>
          <input
            type="email"
            className="campo-texto"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erroEmail && <p className="mensagem-erro">{erroEmail}</p>}

          <label className="label-campo">Senha</label>
          <div className="campo-senha">
            <input
              type={exibirSenha ? "text" : "password"}
              className="campo-texto"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <i
              className={`icone-senha bi ${exibirSenha ? "bi-eye-slash" : "bi-eye"}`}
              onClick={() => setExibirSenha(!exibirSenha)}
            ></i>
          </div>

          {erroSenha && <p className="mensagem-erro">{erroSenha}</p>}

          <Link className="link-esqueci-senha" to="/recuperar-senha">
            Esqueci minha senha
          </Link>

          <button className="botao-entrar" onClick={validarCampos}>
            Entrar
          </button>

          <p className="texto-cadastro">
            Novo aqui? <Link to="/cadastro-empresa">Cadastre sua empresa</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default AdminstratorLogin;
