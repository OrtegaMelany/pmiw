function dibujarObra(){
  line(600,20,600,380);
  line(420,200,780,200);
  
  fill(78,131,80);
  noStroke();
  rect(600,20,7,180);
  rect(780,200,-180,7);
  rect(595,380,7,-180);
  rect(420,195,180,7);

 // cuadrante izquierdo arriba
if (!mostrarLineasVerticales) {
  stroke(colorIzquierdaArriba);
  for (let i = 20; i <= 196; i += 4) {
    if (mouseY >= i - 2 && mouseY <= i + 2 && mouseX >= 420 && mouseX <= 599) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(420, i, 599, i);
  }
} else {
  stroke(240, 92, 39);
  for (let i = 420; i <= 599; i += 4) {
    if (mouseX >= i - 2 && mouseX <= i + 2 && mouseY >= 20 && mouseY <= 196) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(i, 20, i, 196);
  }
}
   //cuadrante derecho abajo
if (!mostrarLineasVerticalesAbajo) {
  stroke(colorDerechaAbajo);
  for (let i = 207; i <= 382; i += 4) {
    if (mouseY >= i - 2 && mouseY <= i + 2 && mouseX >= 603 && mouseX <= 780) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(780, i, 603, i);
  }
} else {
  stroke(240,92,39);
  for (let i = 603; i <= 780; i += 4) {
    if (mouseX >= i - 2 && mouseX <= i + 2 && mouseY >= 207 && mouseY <= 382) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(i, 207, i, 382);
  }
}
    //cuadrante derecho arriba
  if (!mostrarLineasHorizontales) { 
    stroke(colorDerechaArriba);
  for (let i = 610; i <= 780; i += 4) {
    if (mouseX >= i - 2 && mouseX <= i + 2 && mouseY >= 20 && mouseY <= 200) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(i, 20, i, 200);
  }
} else {
  stroke(240,92,39);
  for (let i = 20; i <= 200; i += 4) {
    if (mouseY >= i - 2 && mouseY <= i + 2 && mouseX >= 610 && mouseX <= 780) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(610, i, 780, i);
  }
}

   //cuadrante izquierdo abajo
 if (!mostrarLineasHorizontalesAbajo) {
   stroke(colorIzquierdaAbajo);
  for (let i = 420; i <= 595; i += 4) {
    if (mouseX >= i - 2 && mouseX <= i + 2 && mouseY >= 202 && mouseY <= 380) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(i, 202, i, 380);
  }
} else {
  stroke(240,92,39);
  for (let i = 202; i <= 380; i += 4) {
    if (mouseY >= i - 2 && mouseY <= i + 2 && mouseX >= 420 && mouseX <= 595) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(420, i, 595, i);
  }
}
  //lineas del borde de la imagen
  stroke(67,95,247);
  for(let i=400; i<=420; i+=2){
  line(i,0,i,400);
  }
  
  for(let i=780; i<=800;i+=2){
   line(i,0,i,400); 
  }
  
  for(let i=0; i<=20;i+=2){
    line(420,i,780,i);
  }
  
  for(let i=380; i<=400;i+=2){
    line(420,i,780,i);
  }
 }
 
    function dibujarRombo(){
    if (animarRombo) {
  if (achicando) {
    escalaRombo -= 0.02;
    if (escalaRombo <= 0.5) {
      achicando = false;
    }
  } else {
    escalaRombo += 0.02;
    if (escalaRombo >= 1) {
      escalaRombo = 1;
      animarRombo = false;
      achicando = true;
    }
  }
    }
    
    push();
    translate(600,200);
    scale(escalaRombo);
  stroke(119,119,124,120);
  for(let i=2; i<=180;i+=3){
  line(-i,-180+i,180-i,-180+i+180);
  }
  pop();
 }
