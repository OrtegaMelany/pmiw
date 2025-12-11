class Piedras {
  constructor() {
    this.x = [210, 415, 220, 330, 265, 450];
    this.y = [445, 425, 350, 245, 140, 100];

    this.ancho = 90;
    this.alto = 65;
  }
  dibujar(){
  }

   verificarColisiones(personaje) {
    let px = personaje.x;
    let py = personaje.y + personaje.alto / 2;

    for (let i = 0; i < this.x.length; i++) { 
      let izq = this.x[i] - this.ancho / 2;
      let der = this.x[i] + this.ancho / 2;
      let arriba = this.y[i] - this.alto / 2;
      let abajo = this.y[i] + this.alto / 2;

      if (px > izq && px < der && py > arriba && py < abajo) {
        personaje.reiniciarPosicion();
        return;
      }
    }
  }
}
