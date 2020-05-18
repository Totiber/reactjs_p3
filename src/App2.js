import React, { Component } from 'react';
import './App.css';

// Componentes
import tareas from './ejemplos/tareas.json';
import Tareas2 from './components/Tareas2.js';
import TareasForm from './components/TareasForm';
import Post from './components/Post';



// En App2.js, Tarea2.js, Tareas2.js veremos como separamos este componente

class App2 extends Component {

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

  // filtra tarea por id 
  const newTask = this.state.tareas.filter(tareas => tareas.id !== id)

  // modifica estado
  this.setState({tareas: newTask})

  
  console.log(newTask);
}
  
// Funcion para manejar el checkbox. En este caso cambiamos true/false un elemento de la tarea (done)
chekearDone = (id) => {

// dice: quiero ver el estado de tareas.recorrerlo(por cada tarea que vas a recorrer => quiero un if)
        const newTask2 = this.state.tareas.map(tareas => {
          if (tareas.id === id) {
//            cambia de true o/a false tareas.done
            tareas.done = !tareas.done
          } 

          return tareas;
        })

        this.setState(newTask2)
        
        console.log(newTask2)
}


  render(){


    return <div>

      <TareasForm addTarea = {this.addTarea}/>
      <Tareas2  datos2 = {this.state.tareas} 
                borrarTarea = {this.borrarTarea}
                checkearDone = {this.chekearDone}/>
      <Post/>

    </div>
  }
}
export default App2;
