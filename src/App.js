import React, { Component } from 'react';
import './App.css';
import tareas from './ejemplos/tareas.json';
import Tareas from './components/Tareas';
import TareasForm from './components/TareasForm';


class App extends Component {


// state RECIBE los datos de JSON

  state = {

    tareas: tareas

  }

// Funcion Agrega un elemento tarea
  addTarea = (title, descripcion) => {

    console.log(title, descripcion);

  // crea variable constante con estados locales
    const newTarea = {
      title : title,
      descripcion : descripcion,
      id : this.state.tareas.length
    }

    console.log(newTarea);

  // enviamos la variable creada al estado tareas. [...]: para agregar a loq ue ya estaba en e arreglo lo siguiente.
    this.setState({
      tareas : [...this.state.tareas, newTarea]
    })
  }
  

  borrarTarea = (id) => {

    const newTask = this.state.tareas.filter(tarea => tarea.id !== id);
    console.log(newTask);

  }


  checkear = () => {



  }

  render(){


// --------------------------------------------------- ENVIA LOS DATOS AL COMPONENTE Y CONTRUYE EL COMPONENTE ------------------------------------------


//  Aqui instanceamos el COMPONENTE Tareas en forma de etiqueta. Le pasamos una propiedad llamada datos. Que en react.js funciona como PARAMETRO de un componente.
//  "datos" recoje los datos del estado. El flujo es el siguiente:

//      tareas.json -----> state -----> Componente instanseado recoje del estado,    -----> Componente real
//                                      los datos mediante una PROPIEDAD  
    return <div>

      <TareasForm addTarea = {this.addTarea}/>
      <Tareas  />

    </div>
  }
}
// ----------------------------------------------------------------------------------------------------------------------------------------
export default App;
