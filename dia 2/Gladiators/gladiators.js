class gladiator {
  constructor(nombre, arma, ) {
    if (arma=== "lanza" || arma === "garrote"|| arma==="tridente") {
      this.arma=arma
      this.nombre=nombre
    } else {
      alert("arma invalida")
    }
  }
}

class arena {
  constructor(nombre) {
    this.nombre=nombre;
    this.gladiadores=[];
  }
  addGladiador(gladiador) {
    if (this.gladiadores.length< 2) {
      this.gladiadores.push(gladiador);

    }else {alert("ya hay mas de dos gladiadores")

    }

  }
  pelear(){
    if (this.gladiadores[0].arma==this.gladiadores[1].arma) {
      alert("ambos pierden")
    } else if (this.gladiadores[0].arma=="tridente" && this.gladiadores[1].arma=="lanza") {
        alert("gano "+this.gladiadores[0].nombre);
        this.gladiadores.pop()
    }else if (this.gladiadores[0].arma=="lanza" && this.gladiadores[1].arma=="garrote") {
        alert("gano "+this.gladiadores[0].nombre)
        this.gladiadores.pop()
    }else if (this.gladiadores[0].arma=="garrote" && this.gladiadores[1].arma=="tridente") {
        alert("gano "+this.gladiadores[0].nombre)
        this.gladiadores.pop()
    }else{
      alert("gano "+this.gladiadores[1].nombre)
      this.gladiadores.shift()
    }
this.gladiadores=[]
 }
}

var max = new gladiator("Maximus", "tridente");
var titus = new gladiator("Titus", "lanza");
var coliseo = new arena("coliseo");
coliseo.addGladiador(max);
coliseo.addGladiador(titus);
coliseo.pelear();
console.log(coliseo.gladiadores)
