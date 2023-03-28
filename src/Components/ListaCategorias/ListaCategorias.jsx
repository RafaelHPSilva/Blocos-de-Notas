import React, { Component } from 'react';
import './estilo.css'
class ListaCategorias extends Component {
  constructor(){
    super()
   this.state = {categorias: []}
   this._novaCategoria = this._novaCategoria.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategoria)
  }

  componentWillUnmount(){
    this.props.categorias.deinscrever(this._novaCategoria)
  }

  _novaCategoria(categorias){
    this.setState({...this.state, categorias})
  }

  _handleInput(e){
    if (e.key === 'Enter') {     
      let valorCategoria = e.target.value
      this.props.criarCategoria(valorCategoria)
    }
  }

  render() { 
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
          {this.state.categorias.map((categoria, index)=>{
            return(
              <li 
              className='lista-categorias_item'
              key={index}>
                {categoria}
              </li>
            )
          })}
        </ul>
        <input 
        type="text" 
         className='lista-categorias_input'
         placeholder='Crie uma categoria' onKeyUp={this._handleInput.bind(this)}
        />
      </section>
    );
  }
}
 
export default ListaCategorias  ;