import React, { Component } from 'react'

import FormularioCadastro from './Components/FormularioCadastro'
import ListaNotas from './Components/ListaNotas'
import ListaCategorias from './Components/ListaCategorias'

import './assets/App.css'
import './assets/index.css'
import ArrayNotas from './data/ArrayNotas'
import ArrayCategorias from './data/Categoria'

class App extends Component {
  constructor() {
    super()
    this.notas = new ArrayNotas()
    this.categorias = new ArrayCategorias()
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />

        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.categorias}
            criarCategoria={this.categorias.adicionarCategorias.bind(this.categorias)} 
          />

          <ListaNotas
            deletarNota={this.notas.apagarNota.bind(this.notas)} 
            notas={this.notas}
          />
        </main>
      </section>
    )
  }
}

export default App
