const Flight = require('../models/flight');

async function create(req,res){
    const flight = await Flight.findById(req.params.id);
      flight.destinations.push(req.body);
      flight.destinations.sort((a,b)=>(a.depart - b.depart));
    try{
        await flight.save();
    }catch(err){
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}

module.exports = {
    create
}