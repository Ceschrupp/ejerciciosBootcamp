var ee={
  on:function(evento,funcion) {
    if (typeof funcion=== 'function') {


     if (!this.eventos[evento]) {
       this.eventos[evento]=[funcion]

     }else {
       this.eventos[evento].push(funcion)
     }
   }else {
     console.log("error nio es funcion")
   }



  },
  emit:function(evento) {


if (this.eventos[evento]) {
  for (var i = 0; i < this.eventos[evento].length; i++) {
    this.eventos[evento][i]()
  }
} else {

    console.log("error")


}


  },eventos:{




  }


}
module.exports=ee
