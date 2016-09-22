export default class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }

  saluda () {
    console.log(`Hi! my name is ${this.nombre}`)
  }
}