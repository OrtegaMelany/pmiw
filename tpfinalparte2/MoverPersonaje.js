class MoverPersonaje {
  constructor(personaje) {
    this.personaje = personaje;
    this.vel = 4; // velocidad
    this.izquierda = false;
    this.derecha = false;
    this.arriba = false;
  }

  dibujar() {
    this.personaje.dibujar();
  }

  mover(estadoJuego) {
    let x = this.personaje.x;
    let y = this.personaje.y;

    // pantalla 4 / 5: puede moverse a los lados y arriba, pero con límites
    if (estadoJuego === "troncos" || estadoJuego === "piedras") {
      if (this.izquierda) x -= this.vel;
      if (this.derecha) x += this.vel;
      if (this.arriba) y -= this.vel;

      // límites de movimiento
      if (x < 150) x = 150;
      if (x > width - 150) x = width - 150;
      if (y < 0) y = 0;
    }
    // pantalla 6: solo moverse hacia arriba
    else if (estadoJuego === "SinObstaculos") {
      if (this.arriba) y -= this.vel;
      if (y < 50) y = 50;
    }
    
else if (estadoJuego === "pantalla7") {
}

    // actualizar la posición del personaje
    this.personaje.x = x;
    this.personaje.y = y;
  }
}
