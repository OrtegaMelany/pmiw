class Juego {
  constructor() {
    this.estado = "titulo"; 
  this.personaje = new Personaje();
    this.mover = new MoverPersonaje(this.personaje);
    this.pantallas = new Pantallas();
    this.contador = 0;
    this.tiempoTitulo = 0;
    this.piedras = new Piedras();
  this.troncos = new Troncos(); 
  }

  mostrar() {
    if (this.estado === "titulo") 
    this.pantallas.mostrarTitulo();
    else if (this.estado === "instrucciones") this.pantallas.mostrarInstrucciones();
    else if (this.estado === "caminos") { 
      this.pantallas.mostrarCaminos(); 
      let posOriginal = this.personaje.y;
      this.personaje.y = posOriginal - 100;
      this.mover.dibujar();
      this.personaje.y = posOriginal;
    } 
else if (this.estado === "troncos") {
  this.pantallas.mostrarTroncos();
  this.mover.mover(this.estado);
  this.mover.dibujar();
  this.troncos.verificarColisiones(this.personaje); 
}
    else if (this.estado === "piedras") {
  this.pantallas.mostrarPiedras();   // imagen de fondo
  this.mover.mover(this.estado);     // movimiento del personaje
  this.piedras.dibujar();            // (opcional) cajas de colisión
  this.mover.dibujar();              // AQUÍ APARECE EL PERSONAJE
  this.piedras.verificarColisiones(this.personaje); 
}
    else if (this.estado === "SinObstaculos") {
      this.pantallas.mostrarSinObstaculos();
      this.mover.mover(this.estado);
      this.mover.dibujar();
    }
    else if (this.estado === "pantalla7") {
      this.pantallas.mostrarPantalla7();
      this.mover.mover(this.estado);
      this.mover.dibujar();
    }
    else if (this.estado === "ganaste") this.pantallas.mostrarGanaste();
    else if (this.estado === "perdiste") this.pantallas.mostrarPerdiste();
    else if (this.estado === "creditos") this.pantallas.mostrarCreditos();
  
    // Mostrar tiempo en pantallas de juego
    if (
      this.estado === "caminos" ||
      this.estado === "troncos" ||
      this.estado === "piedras" ||
      this.estado === "SinObstaculos"||
      this.estado === "pantalla7"
    ) {
      this.mostrarTiempo();
    }

    // Llegada a pantalla7 si personaje toca la parte superior
    if (
      (this.estado === "troncos" || this.estado === "piedras" || this.estado === "SinObstaculos") &&
      this.personaje.y - this.personaje.alto / 2 <= 0
    ) {
      this.estado = "pantalla7";
      this.personaje.reiniciarPosicion();
    }
  }

  mostrarTiempo() {
  let tiempoRestante = 2700 - this.contador;
  let minutos = 0;
  let segundos = 0;

//for es un bucle
  for (let i = 1; i <= tiempoRestante; i++) { 
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
  }

  let minTexto = minutos < 10 ? "0" + minutos : "" + minutos;
  let segTexto = segundos < 10 ? "0" + segundos : "" + segundos;

  fill(255);
  textSize(19);
  textAlign(RIGHT, TOP);
  text(minTexto + ":" + segTexto, width - 13, 35);
}



  actualizar() {
    if (this.estado === "titulo") {
      this.tiempoTitulo++;
      if (this.tiempoTitulo > 180) this.estado = "instrucciones";
    }

    if (
      this.estado === "caminos" ||
      this.estado === "troncos" ||
      this.estado === "piedras" ||
      this.estado === "SinObstaculos" ||
      this.estado === "pantalla7"
    ) {
      this.contador++;
      if (this.contador > 2700) this.estado = "perdiste";
    }

    if (this.estado === "ganaste" || this.estado === "perdiste") {
      this.tiempoTitulo++;
      if (this.tiempoTitulo > 400) this.estado = "creditos";
    }
  }

  mousePresionado(mx, my) {
    // Pantalla 2  botón INICIAR
    if (this.estado === "instrucciones") {
      let botonX = width - 110;
      let botonY = height - 60;
      let botonAncho = 90;
      let botonAlto = 35;

      if (mx > botonX && mx < botonX + botonAncho &&
          my > botonY && my < botonY + botonAlto) {
        this.estado = "caminos";
      }
    }

    // Pantalla 3 → elegir camino
    if (this.estado === "caminos") {
      if (mx > 32 && mx < 96 && my > 240 && my < 288) this.estado = "piedras";
      else if (mx > 192 && mx < 256 && my > 144 && my < 192) this.estado = "troncos";
      else if (mx > 496 && mx < 560 && my > 264 && my < 312) this.estado = "SinObstaculos";
    }

    // Pantalla 7 lección final
if (this.estado === "pantalla7") {
   // Camino 1 pierde
   if (mx > 190.4 - 30 && mx < 190.4 + 30 && my > 322.8 - 30 && my < 322.8 + 30) {
      this.estado = "perdiste";
      if (sonidoperdiste && !sonidoperdiste.isPlaying()) {
          sonidoperdiste.play();
      }
   }
   
   // Camino 2 → gana
   if (mx > 350.4 - 30 && mx < 350.4 + 30 && my > 206.4 - 30 && my < 206.4 + 30) {
      this.estado = "ganaste";
      if (sonidoganaste && !sonidoganaste.isPlaying()) {
          sonidoganaste.play();
      }
   }
}

    // Pantalla 10 → Créditos → botón reiniciar
    if (this.estado === "creditos") {
      let px = this.pantallas.botonX;
      let py = this.pantallas.botonY;
      let ancho = this.pantallas.botonAncho;
      let alto = this.pantallas.botonAlto;

      if (mx > px && mx < px + ancho && my > py && my < py + alto) {
        this.estado = "titulo";
        this.contador = 0;
        this.tiempoTitulo = 0;
        this.personaje.reiniciarPosicion();
      }
    }
  }
}
