const Flight = require('../models/flight');


function getNew(req,res){
    res.render('flights/new',{errMessage:''})
}

async function createFlight(req, res){
    try{ 
        await Flight.create(req.body);
     

        res.redirect('/flights')

    }catch(err){
        res.render('flights/new', {errMessage: err})
    }
}

async function index(req, res){
   const flights =  await Flight.find({});
   res.render('flights/index',{flights})
}






module.exports = {
    index,
    new: getNew,
    create: createFlight
}