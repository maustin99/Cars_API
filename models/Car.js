const 
     mongoose = require('mongoose')
     carSchema = new mongoose.Schema({
        year: {type: Number, default: 0}, 
        make: {type: String, required: true, minlength: 3},
        model: {type: String, required: true, minlength: 3},
        hp: {type: Number, default: 0},
        sixty: {type: Number, default: 0}
        
     }, {timestamps: true})

     const Car = mongoose.model('Car', carSchema )

     module.exports = Car

     console.log("This Model code is running!")