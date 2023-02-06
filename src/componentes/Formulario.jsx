import React, {useState} from "react";
import '../estilos/Formulario.css';
import { v4 as uuidv4 } from 'uuid';


function CampoTarea(props){

    const [input, setInput]=useState('');



    const manejarCambio = (valorInput) =>{
        setInput(valorInput.target.value);
        
    };

    const manejarEnvio = (e) =>{
        e.preventDefault();//no se recarga la aplicación al enviar

        const tareaNueva={
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva);
    };

    return(
        <form 
            className="tarea-form"
            onSubmit={manejarEnvio}
        >
            <input 
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name='texto'
                onChange={manejarCambio}
            />
            <button
                className="tarea-boton"
            >
                Agregar Tarea
            </button>
        </form>
    );
}

export default CampoTarea;