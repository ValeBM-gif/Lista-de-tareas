import logo from './logo.svg';
import './App.css';
import miLogo from './imgs/logo.png'
import Tarea from './componentes/Tarea';
import CampoTarea from './componentes/Formulario';
import ListaTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <div className='miLogo-contenedor'>
        <img 
          src={miLogo} 
          className='miLogo' 
        />
      </div>
      <div className='contenedor-principal-tareas'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
