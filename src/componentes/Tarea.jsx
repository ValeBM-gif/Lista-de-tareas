import React from "react";
import '../estilos/Tarea.css';
import {AiFillCloseCircle} from 'react-icons/ai';

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}>
            <div 
                className={completada ? 'texto-tarea completada' : 'texto-tarea'}
                onClick={() =>completarTarea(id)}>
                {texto}
            </div>
            <div className="icono-cerrar-contenedor"
                onClick={() =>eliminarTarea(id)}>
                <AiFillCloseCircle className="icono-cerrar" />
            </div>
        </div>
    );
}

export default Tarea;