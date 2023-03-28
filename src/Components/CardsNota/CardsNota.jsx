import React, { Component } from 'react';
import {ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

import './estilo.css'

class CardsNota extends Component {

  _deletarNota(){
    const indice = this.props.indice
   this.props.deletarNota(indice)
 }
 
  render() { 
    return (
      <section className='card-nota'>
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3>{/*this.props vem dos atributos criados em listaNotas*/}
          <DeleteSVG 
          onClick={this._deletarNota.bind(this)}
          />
          <h4>{this.props.categorias}</h4>
        </header>
        <p className='card-nota_texto'>{this.props.texto}</p>
      </section>
    );
  }
}
 
export default CardsNota;