import React, {useState} from "react";
import CampoTarea from "./Formulario";
import '../estilos/ListaDeTareas.css';
import Tarea from "./Tarea";


function ListaTareas() {

const [tareas, setTareas]=useState([]);

const agregarTarea = (tarea) => {
    if(tarea.texto.trim()){

        tarea.texto=tarea.texto.trim();

        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
    }
};

const eliminarTarea=(id)=>{ //filter: el que cumpl la condición entre parentesis irá dentro del arreglo
    const tareasActualizadas= tareas.filter(tarea => tarea.id != id);
    setTareas(tareasActualizadas);
}

const completarTarea= (id)=>{
    const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id===id){
            tarea.completada=!tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
}

    return(
        <>
            <CampoTarea onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id}//atributo o prop que nos ayuda a identificar un elemento en la lista
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;