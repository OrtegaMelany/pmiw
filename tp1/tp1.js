//https://youtu.be/Rf336IdmRxA

let miImagen;
let mostrarLineasVerticales = false;
let mostrarLineasVerticalesAbajo = false;
let mostrarLineasHorizontales = false;
let mostrarLineasHorizontalesAbajo = false;

let escalaRombo = 1;
let animarRombo = false;
let achicando = true;

let colorIzquierdaArriba;
let colorIzquierdaAbajo;
let colorDerechaArriba;
let colorDerechaAbajo;

 
function reiniciarBoolean(valor, reiniciar) {
  if (reiniciar) return false;
  return valor;
}

function reiniciarFloat(valor, reiniciar) {
  if (reiniciar) return 1.0;
  return valor;
}

function reiniciarColor(c, reiniciar) {
  if (reiniciar) return color(247, 190, 218);
  return c;
}

function preload() {
  miImagen = loadImage("Op_art.png");
}

function setup() {
  createCanvas(800, 400);
  noFill();
  colorIzquierdaArriba = color(247, 190, 218);
  colorIzquierdaAbajo = color(247, 190, 218);
  colorDerechaArriba = color(247, 190, 218);
  colorDerechaAbajo = color(247, 190, 218);
}

function draw(){ 
  background(188,0,3);
  image(miImagen, 0, 0, 400, 400);
  dibujarObra();
  dibujarRombo();
  strokeWeight(1);
}

function mousePressed() {
  // cuadrante izquierdo arriba
  if (mouseX >= 420 && mouseX <= 598 && mouseY >= 20 && mouseY <= 195) {
    mostrarLineasVerticales = !mostrarLineasVerticales;
    colorIzquierdaArriba = color(random(255), random(255), random(255));
  }

  // cuadrante izquierda abajo
  if (mouseX >= 421 && mouseX <= 594 && mouseY >= 202 && mouseY <= 379) {
    mostrarLineasHorizontalesAbajo = !mostrarLineasHorizontalesAbajo;
    colorIzquierdaAbajo = color(random(255), random(255), random(255));
  }

  // cuadrante derecho abajo
  if (mouseX >= 603 && mouseX <= 780 && mouseY >= 206 && mouseY <= 380) {
    mostrarLineasVerticalesAbajo = !mostrarLineasVerticalesAbajo;
    colorDerechaAbajo = color(random(255), random(255), random(255));
  }

  // cuadrante derecho arriba
  if (mouseX >= 601 && mouseX <= 780 && mouseY >= 20 && mouseY <= 199) {
    mostrarLineasHorizontales = !mostrarLineasHorizontales;
    colorDerechaArriba = color(random(255), random(255), random(255));
  }

 //centro del rombo
   if (mouseX >= 550 && mouseX <= 650 && mouseY >= 150 && mouseY <= 250 && !animarRombo) {
    animarRombo = true;
   }
   }
 
 // funcion con parametros que no retorna un valor
 function reiniciarColores(c1, c2, c3, c4) {
  colorIzquierdaArriba = c1;
  colorIzquierdaAbajo = c2;
  colorDerechaArriba = c3;
  colorDerechaAbajo = c4;
}

 function reiniciarTodo(reiniciar) {
  mostrarLineasVerticales = reiniciarBoolean(mostrarLineasVerticales, reiniciar);
  mostrarLineasVerticalesAbajo = reiniciarBoolean(mostrarLineasVerticalesAbajo, reiniciar);
  mostrarLineasHorizontales = reiniciarBoolean(mostrarLineasHorizontales, reiniciar);
  mostrarLineasHorizontalesAbajo = reiniciarBoolean(mostrarLineasHorizontalesAbajo, reiniciar);

  escalaRombo = reiniciarFloat(escalaRombo, reiniciar);
  animarRombo = false;

  colorIzquierdaArriba = reiniciarColor(colorIzquierdaArriba, reiniciar);
  colorIzquierdaAbajo = reiniciarColor(colorIzquierdaAbajo, reiniciar);
  colorDerechaArriba = reiniciarColor(colorDerechaArriba, reiniciar);
  colorDerechaAbajo = reiniciarColor(colorDerechaAbajo, reiniciar);
}

function keyPressed() {
  if (key == ' ') {  // espacio
    reiniciarTodo(true);
  } 
} 
