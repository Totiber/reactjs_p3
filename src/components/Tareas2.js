import React, { Component } from 'react';
import Tarea2 from './Tarea2';
import PropTypes from 'prop-types';


class Tareas2 extends Component {

    render() {

        // Este componente recorre cada elemento de tarea.json que viene llegando desde App2.js y por cada recorrido genera tareas independientes. Para pintar esto en 
        // pantalla lo enviamos al componente Tarea2, que es el que pinta todo en un div.. donde esta la estructura de la impresion.

                            //               ¡¡¡¡ quitar argumento index despues !!!!
        return this.props.datos2.map((elemento, index) => 
                                                <Tarea2 datoTarea2 = {elemento} 
                                                        key = {index} 
                                                        borrarTarea = {this.props.borrarTarea}
                                                        checkearDone = {this.props.checkearDone}/> 
                                     );
    }
}

// PropTypes: Validar que el tipo de dato que debe llegar de la pagina anterior sea un Array
// Tareas2.PropTypes = {

//     datoTarea2: PropTypes.array.isRequired

// }

export default Tareas2;

