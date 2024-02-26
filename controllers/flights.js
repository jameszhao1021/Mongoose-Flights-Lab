const Flight = require('../models/flight');


function getNew(req,res){
    res.render('flights/new',{errMessage:''});
}

async function show(req, res){
    const flight =  await Flight.findById(req.params.id);
    res.render('flights/show',{flight})
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
   const flight =  await Flight.find({});
   res.render('flights/index',{flight})
}


module.exports = {
    index,
    show,
    new: getNew,
    create: createFlight,
}