import React, { Component } from 'react';
import './Tarea.css';
import PropTypes from 'prop-types';

class Tarea2 extends Component {



    // Estilos: 
    //          Otra forma mas de implementar estilos.

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.datos.done ? 'gray' : 'black',
            textDecoration: this.props.datos.done ? 'line-through' : 'none'
        }
    }


    render () {

        //Para no esccribir todo el rato this.props, transformamos la propiedad que viene de la etiqueta anterior en una variable constante que dentro tenga el this.props        
        const {datoTarea2} = this.props;
        return <p>

            {datoTarea2.title} - 
            {datoTarea2.description} - 
            {datoTarea2.done} - 
            {datoTarea2.id}
            
            <input type = "checkbox" onChange = {this.props.checkearDone.bind(this, datoTarea2.id)}/>
            <button onClick = {this.props.borrarTarea.bind(this, datoTarea2.id)}>
                x
            </button>

        </p>
    }
}

// PropTypes: Validamos que el tipo de dato que tiene que llegar de la pagina anterior sea un objeto. --- Revisar documentacion para mas propTypes
// Tarea2.PropTypes = {

//     datoTarea2: PropTypes.object.isRequired

// }

export default Tarea2;