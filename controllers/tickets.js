const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

// async function getNew(req,res){
//     const flight = await Flight.findById(req.params.id);
//     res.render('tickets/new', {flight, errMessage:''})
// }

//  async function createTicket(req,res){
//     const tickets = await Ticket.create(req.body);
//     res.redirect(`/flights/${flight._id}`,{tickets})
// }

async function getNew(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('tickets/new', { flight, errMessage: '' });
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function createTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.create(req.body);
    ticket.flight = req.params.id;
    await ticket.save();
    res.redirect(`/flights/${flight._id}`);
}


module.exports = {
    new: getNew,
    create: createTicket
}