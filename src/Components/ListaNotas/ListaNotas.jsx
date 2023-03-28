import React,{Component} from "react";
import './estilo.css'
import CardsNota from "../CardsNota";

class ListaNotas extends Component {
  constructor(){
    super()
    this.state = {notas: []}
    this._novaNota = this._novaNota.bind(this)
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novaNota)
  }

  componentWillUnmount(){
    this.props.notas.deinscrever(this._novaNota)
  }

  _novaNota(notas){
    this.setState({...this.state, notas})
  }

  render() { 
    return (    
      <ul className="lista-notas">
        {this.state.notas.map((nota,index)=>{ //O array  de notas criado em App
          return(
          <li className="lista-notas_item" key={index}>
            <CardsNota 
            categorias={nota.categoria}
            titulo={nota.titulo} 
            texto={nota.texto}
            indice={index}
            deletarNota={this.props.deletarNota}
            />
          </li> 
          )
        })}

      </ul>
    )
  }
}
 
export default ListaNotas;