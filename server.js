const 
    express = require('express'),
    app = express()
    mongoose = require('mongoose')
    logger = require('morgan') //logs requests to teminal
    Car = require('./models/Car.js')
    bodyParser = require('body-parser')  //requires to use App
    carsCtrl = require('./controllers/carsControl.js')


    //This is where we'll connect to MongoDB
mongoose.connect('mongodb://localhost/cars', function(err){
    console.log(err || "Connected to Mongo DB")
})



// Middleware goes here.....
app.use(logger('dev'))   //shows requests to server. Morgan.
app.use(bodyParser.json())  //body parser <refer to req.body>:: interpret incoming data as JSON


app.get('/', function(req, res) {
    res.json({message: "CARS root"})   
})

app.get('/cars', carsCtrl.index) //End GET Request

 //POST request
 app.post('/cars', carsCtrl.create)  //End POST Request

 
  //VIEW page request
  app.get('/cars/:id', carsCtrl.show ) //End GET Request


  //UPDATE-PATCH page request
  app.patch('/cars/:id', carsCtrl.update ) //End PATCH Request


  //DESTROY page request
  app.delete('/cars/:id', carsCtrl.destroy ) //End DESTROY Request





// listen to requests on PORT 3000 

app.listen(3000, function(err){
    console.log(err || "Server Running on Port 3000.")

})