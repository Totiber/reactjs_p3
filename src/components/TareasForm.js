import React, { Component } from 'react';

class TareasForm extends Component {


    state = {

        title: '',
        descripcion: ''

    }

//------------------------------------------------ LEYENDO LO QUE ESCRIBE EL USUARIO ---------------------------------------------

    enviar = (evento) => {

        this.props.addTarea(this.state.title, this.state.descripcion);
        console.log (this.state);
    //  Para que la pagina no se refresque al hacer la accion enviar
        evento.preventDefault();

    }

    leerText = (evento) => {

        console.log(evento.target.name, evento.target.value);
        
       this.setState({
//              target.value: Lee todo lo que se escribe en los textos. A cada segundo
            [evento.target.name]: evento.target.value
        

       }) 

    }


//------------------------------------------------------------------------------------------------------------------------------


    render() {
        
//        this.props.addTarea();
//------------------------------------- CREANDO LA ESTRUCTURA DE LO QUE EL USUARIO INGRESA ------------------------------
        return(

            <form onSubmit= {this.enviar}> 

                <br/>
                <input  type="text" 
                        placeholder="Escribe una Tarea"     
                        onChange= {this.leerText} 
                        name = "title"
                        value = {this.state.title}
                />
                <br/>
                <br/>
                <textarea   placeholder= "Escribe una descripcion" 
                            onChange= {this.leerText} 
                            name = "descripcion"
                            value = {this.state.descripcion}
                ></textarea> 
                <br/>
                <button type= "submit">
                    CREAR
                </button>

            </form>
        )
    }

// --------------------------------------------------------------------------------------------------------------------------------------

}

export default TareasForm;