
const mongoose = require('mongoose')

// create a shortcut
const Schema = mongoose.Schema;

//define a schema
// const flightSchema = new Schema({
//     airline: String,
//     airport: String,
//     flightNo: Number,
//     departs: Date,
// }, {
//     timestamps: true
// })

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum:['AUS','DFW', 'DEN', 'LAX', 'SAN']
    },
    depart: {type: Date},
})

const flightSchema = new Schema({
    airline: {type: String},
    airport: {type: String},
    flightNo: {type: Number},
    departs: {type: Date, default: function(){
        const defaultDate = new Date().getFullYear();
        return defaultDate;
    }},
    destinations:[destinationSchema]
}, {
    timestamps: true
})


//compile schema into model
//export the model

module.exports = mongoose.model('Flight', flightSchema)