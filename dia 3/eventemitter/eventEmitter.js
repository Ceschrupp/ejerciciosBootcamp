var ee={
  on:function(evento,funcion) {
 if (!this.eventos[evento]) {
   this.eventos[evento]=[funcion]

 }else {
   this.eventos[evento].push(funcion)
 }



  },emit:function(evento) {

if (this.eventos[evento]) {
  for (var i = 0; i < this.evento[evento].length; i++) {
    this.evento[evento][i]()
  }
} else {

    console.log("error")


}


  },eventos:{




  }


}
module.exports(ee)
