class ArrayCategorias {
  constructor() {
    this._inscritos = []
    this.categoria = []
  }
  
  adicionarCategorias(novaCategoria) {
    this.categoria.push(novaCategoria)
    this.notificar()
  }

  inscrever(func) {
    this._inscritos.push(func)
  }

  deinscrever(func){
    this._inscritos= this._inscritos.filter(f=> f !== func)
  }

  notificar() {
    this._inscritos.forEach(func => {
      func(this.categoria)
    })
  }
}

export default ArrayCategorias
