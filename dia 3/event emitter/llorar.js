var ee= require("./eventEmitter.js")

ee.on("llorar",function() {console.log("odio todo")})
ee.emit("llorar")
