import { Link } from 'react-router-dom'
import './App.css';


export default function App() {
  return (
    <div id='conteiner' >
      <div id='home-page'>
        <h1>Tela principal</h1>
        <p>Escolha qual home abrir:</p>
        <Link to="/admin" className="btn btn-danger m-2">Administrador</Link>
        <Link to="/customer" className="btn btn-primary m-2">Cliente</Link>
        <Link to="/driver" className="btn btn-primary m-2">Motorista</Link>
        <Link to="/trip-manager" className="btn btn-success m-2">Gestor de Viagens</Link>
      </div>
    </div>
  )
}