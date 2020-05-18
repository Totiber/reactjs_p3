import React, { Component } from 'react';






class Tareas extends Component {




    render() {


//----------------------------- SE CONSTRUYE EL COMPONENTE CON LOS DATOS --------------------------------------------------------------



// En la siguiente sentencia lo que estamos haciendo es recorrer el arreglo tareas sin ciclos. POR ITERACION

// this.props.datos.map lo que esta haciendo es decir: Mira la propiedad datos de la etiqueta Tareas (que esta en la otra pagina) y recorre cada elemento que reciba datos.
//    Estos elementos llegan del estado con la sentencia this.state.tareas. Estado que trae datos de tareas.json y los almacena en tareas. 
//      Utilizamos una etiqueta <p> para separar cada tarea contenida en tareas en parrafos.

// e.algo dice: Lee el elemento.algo. Al utiliarlo en una etiqueta html/JSX nos aseguramos de estar imprimiendolo al mismo tiempo.
// En este caso Javascript nos pide que cada parrafo tenga un id, asi que le damos la propiedad id de cada tarea a cada uno de los parrafos que muestra dicha tarea.

//      de esta forma es como Llamamos, recojemos e imprimimos datos que vienen desde: JSON --> Pagina que los recoje y envia --> Pagina que imprime y recorre       

        return this.props.datos.map(e => 

        <p key= {e.id} >

            {e.title} - {e.description} - {e.done} - {e.id}

            <input type = "checkbox"/>
            <button>
                x
            </button>
    
        </p>)
    }
}

// ----------------------------------------------------------------------------------------------------

export default Tareas;