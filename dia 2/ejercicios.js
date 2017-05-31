var nodes = document.getElementsByTagName('p');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click',
      (function (g) {
		      return function(){ console.log('You clicked element #' + g);}
        })(i)
  )
}
for (var i = 0; i < array.length; i++) {
  array[i]
}


var string = "toni"
var nueva = ''
for (var i = 0; i < 3; i++) {
  nueva = nueva + string
}


"holasdsa".__proto__.repeatify = function(n) {
  var nueva = ''
  for (var i = 0; i < n; i++) {
    nueva = nueva + this
  }
  return nueva
}

"toni".repeatify(2)

class shape{
  constructor(type){
    this.type=type;

  }

  getType(){
    return this.type
  }

}

class triangle extends shape{
  constructor(type,a,b,c){
    super(type);
    this.a=a;
    this.b=b;
    this.c=c;
  }
}
