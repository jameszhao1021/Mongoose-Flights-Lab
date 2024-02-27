const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function getNew(req,res){
    res.render('flights/new',{errMessage:''});
}

async function show(req, res){
 
    // const flight =  await Flight.findById(req.params.id);
    //  const tickets =   await Ticket.find({flight:flight._id}).populate('flight')
    //  console.log(tickets)
    // res.render('flights/show',{flight,tickets});
    
    try {
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({flight: flight._id});
        console.log(tickets);
        flight.destinations.sort((a, b) => a.arrival - b.arrival);
        // await flight.save();
        res.render('flights/show', { flight, tickets });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
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