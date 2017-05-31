var obj = {
	Today:function today(){
		return new Date();
	}, 
		daysTill: function(evento){
		var hoy= new Date()
		
		var dias = evento.getTime() - hoy.getTime()

		dias=Math.ceil( dias / (1000*60*60*24));

		if(dias<0){
			dias = dias+365;  

		}
		 
		return dias
		},

		 fechas: {

			Navidad: function(){
			var hoy= new Date()
			var dia =25;
			var mes= 12;
			var ano= hoy.getFullYear()
			evento= new Date(ano,mes-1,dia)

			return evento

		} , anoNuevo: function(){


			var hoy= new Date()
			var dia =31;
			var mes= 12;
			var ano= hoy.getFullYear()
			evento= new Date(ano,mes-1,dia)

			return evento
		}


		}
}






module.exports=obj





