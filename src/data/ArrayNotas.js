class ArrayNotas {
  constructor() {
    this.nota = []
    this._inscritos = []
  }

  adicionarNota(titulo, texto, categoria) {
    const novoArrayNotas = new Nota(titulo, texto, categoria)
    this.nota.push(novoArrayNotas)
    this.notificar()
  }

  apagarNota(index) {
    this.nota.splice(index, 1)
    this.notificar()
  }

  inscrever(func) {
    this._inscritos.push(func)
  }

  deinscrever(func) {
    this._inscritos = this._inscritos.filter(f => f !== func)
  }

  notificar() {
    this._inscritos.forEach(func => {
      func(this.nota)
    })
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo
    this.texto = texto
    this.categoria = categoria
  }
}

export default ArrayNotas
