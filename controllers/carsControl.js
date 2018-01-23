

module.exports = {

    index: function(req, res) {
        
            Car.find({}, function(err, allCars){   //find all cars, then send all cars
                if(err) return console.log(err)
                    res.json(allCars)
            })  //END INDEX - find() 
       
    },

    create: function (req, res) {     //like the .save and Params in RAILS
        
        Car.create(req.body, function(err, brandNewCar){   //request :: body is the form data ('body' of data):: like Params in RAILS
            if(err) return console.log(err)
            res.json({message: "Car created.", robot: brandNewCar})  
        })   //end Car.create              
    
    }, //END CREATE 

    
    show: function (req, res) {                 //request params ID
        Car.findById(req.params.id, function(err, oneCar){   //find one robot, then send one robot
            if(err) return console.log(err)
                res.json(oneCar)
        })   
    }, //END SHOW/VIEW 


    update: function (req, res) {                 //request params ID
        Car.findByIdAndUpdate(req.params.id, req.body, function(err, oneCar){   //find one car, then PATCH one car
            if(err) return console.log(err)                                         // <-- req.body, where to new data is placed to be updated
            res.json({message: "Car UPDATED.", car: oneCar}) 
        })   
    } ,  //END UPDATE/patch


    destroy: function (req, res) {                 //request params ID
        Car.findByIdAndRemove(req.params.id, function(err, deleteCar){   //find one car, then DESTROY one car
            if(err) return console.log(err)                                             
            res.json({message: "Car DESTROYED.", robot: deleteCar}) 
        })   
    } // END DESTROY



} //END exports 
//END Cars Controller




console.log("Controller is running!")