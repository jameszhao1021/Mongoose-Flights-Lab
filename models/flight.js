
const mongoose = require('mongoose')

// create a shortcut
const Schema = mongoose.Schema;

//define a schema
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
}, {
    timestamps: true
})


//compile schema into model
//export the model

module.exports = mongoose.model('Flight', flightSchema)