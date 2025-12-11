class Troncos {
  constructor() {
  
    this.x = [480, 300, 500];
    this.y = [444, 350, 220];

    this.ancho = [120, 160, 180];  
    this.alto  = [25, 20, 25];
  }

  verificarColisiones(personaje) {
    let px = personaje.x;
    let py = personaje.y + personaje.alto / 2; // pies

    for (let i = 0; i < this.x.length; i++) {
      let izq = this.x[i] - this.ancho[i] / 2;
      let der = this.x[i] + this.ancho[i] / 2;
      let arriba = this.y[i] - this.alto[i] / 2;
      let abajo = this.y[i] + this.alto[i] / 2;

      if (px > izq && px < der && py > arriba && py < abajo) {
        personaje.reiniciarPosicion();
        return true;
      }
    }
  }
}
