var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
  var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
  var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
  var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
  var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];
  var tweets=[]
  var tweetsNuevos=[]
    var users=[{
      name: "Toni Tralice",
      username: "@tonitralice",
      profile_pic:"https://avatars.slack-edge.com/2015-09-18/10977235269_2c26a93ae0105d154546_192.jpg"
  },{
    name: "Santi Scanlan",
    username:"@santiscanlan",
    profile_pic:"https://avatars.slack-edge.com/2015-12-28/17476816208_ae04c94897c6d65dc268_512.jpg",
  },{
    name: "Guille Aszyn",
    username: "@guilleasz",
    profile_pic:"https://avatars.slack-edge.com/2015-12-24/17359671927_16a0318a3ef5655ae10d_512.jpg",
  },{
    name: "Doge",
    username:"@dogethedog_ok",
    profile_pic:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
  } ];

 function elementoRandom(arreglo){
   var random=Math.floor(Math.random() * arreglo.length);
   elemento=arreglo[random]

  return elemento
 }
var prueba=elementoRandom(tags);

 function texto(){
   return elementoRandom(opening)+" " +elementoRandom(verbs)+" " +elementoRandom(objects)+" " +elementoRandom(nouns)+" " +elementoRandom(tags)

 }
 function generarTweet(){
   var tweet={
     user:elementoRandom(users),
     text:texto(),
     date:new Date()
   }
   return tweet
 }

function creaDiv(nueva) {
  var div = $('<div>').attr('class', 'tweet')
  var foto= $('<img>').attr("src", nueva.user.profile_pic).attr("class", "avatars")
  var nombre = $('<div>').attr('class', 'nombre').text(nueva.user.name)
  var user=$('<div>').attr('class', 'user').text(nueva.user.username)

  var texto = $('<div>').attr('id', 'texto').text(nueva.text)

  div.append(foto).append(nombre).append(user).append(texto).append('<i class="fa fa-retweet" aria-hidden="true"></i>').append('<i class="fa fa-heart" aria-hidden="true"></i>').append('<i class="fa fa-reply" aria-hidden="true"></i>')
  return div;
}

 function mostrar(nueva){

  $('#feed').append(creaDiv(nueva));
}


function llenar(){
  for (var i = 0; i < 100; i++) {
    tweets[i]=generarTweet();

  }
}
llenar()

for (var i = 0; i < 20; i++) {
  mostrar(tweets[i])
}

var tweetsMostrados=20;

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
var corte=tweetsMostrados+10;


while (tweetsMostrados<corte) {
  mostrar(tweets[tweetsMostrados]);
  tweetsMostrados++

}



    }
 });
 window.setInterval(function(){
  tweets.push(generarTweet())
}, 100);


window.setInterval(function(){
 tweetsNuevos.push(generarTweet())
 $("button").text(tweetsNuevos.length + " Tweets Nuevos")
}, 2000);


$("button").on("click", function(){

  mostrarNuevos();

})


function mostrarNuevos(){
  for (var i = 0; i < tweetsNuevos.length; i++) {
    $('#feed').prepend(creaDiv(tweetsNuevos[i]));
  }
  tweetsNuevos=[]

  $("button").text("0 Tweets Nuevos")
}
