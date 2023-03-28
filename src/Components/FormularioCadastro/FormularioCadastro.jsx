import React, { Component } from "react";

import './estilo.css'

 class FormularioCadastro extends Component{
  constructor(){
  super()
    this.titulo = ''
    this.texto= ''
    this.categoria = 'Sem categoria'
    this.state = {categorias:[]}
    
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategoria.bind(this))
  }

  _novaCategoria(categorias){
    this.setState({...this.state, categorias})
  }

  _handleCategoria(evento){
    evento.stopPropagation()
    this.categoria = evento.target.value
  }

  _handleTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handleTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto, this.categoria)
  }


  render(){
    return(   
      <form 
      className="form-cadastro" 
      onSubmit={this._criarNota.bind(this)}>
      
        <select 
        className="form-cadastro_input"
        onChange={this._handleCategoria.bind(this)} >
          <option >Sem categoria</option>
          {this.state.categorias.map((categoria, index)=>{
            return(
              <option key={index}>
                {categoria}
              </option>
            )
          })}
        </select>

        <input 
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleTitulo.bind(this)} 
          name="" 
          id="" 
        />

        <textarea 
          className="form-cadastro_input"  
          placeholder="escreva sua nota.." 
          rows={15}
          onChange={this._handleTexto.bind(this)} //.bind(this) = É para que quando o método handleTexto não perca associação com o this do objeto pai(class FormulárioCadastro)
        />

        <button  
          className='form-cadastro_input form-cadastro_submit' 
          type="submit">
            Criar Nota
        </button>

      </form>
    )
  }
 }
 export default FormularioCadastro;