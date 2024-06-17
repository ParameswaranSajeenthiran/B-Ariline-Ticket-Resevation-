import express from "express";

import scheduler from "node-schedule";
import { book, createBooking, createGuestUser, createPassenger, createPayment, getAirportLocation, getAriports, getBookingById, getBussinessSeatsFromDB, getEconomySeatsFromDB, getFlightsFromDB, getFlightsWithPricesFromDB, getPlatinumSeatsFromDB, getSeatpricefromDB, getdiscountfromDB, updateBooking, validateBooking } from "../../air-backend/database.js";
import requireAuth from "../utils/authentication.js";
import main from "../mailer.js";
var router = express.Router();



// router.get("*",requireAuth)
router.get("/test/cookie", (req, res) => {
    console.log("reqest", req)
    res.cookie("new-user", false);
    res.send("cookie set");
});

router.get('/flight', async (req, res) => {

    console.log("request", req);
    // console.log(req.query.from, req.query.to, req.query.departureDate); 
    const result = await getFlightsWithPricesFromDB(req.query.from, req.query.to, req.query.departureDate);
    // res.cookie('new-user',false)

    res.send(result);
    console.log("reqest", req.cookies)
});

router.get('/seatList', async (req, res) => {

    const Platinum = await getPlatinumSeatsFromDB(req.query.flightId);
    const Business = await getBussinessSeatsFromDB(req.query.flightId);
    const Economy = await getEconomySeatsFromDB(req.query.flightId);
    const result = { "Platinum": Platinum, "Business": Business, "Economy": Economy };
    res.send(result);
}
);

router.get('/aiportLocation', async (req, res) => {
    console.log("request", req);
    const result = await getAirportLocation(req.query.origin, req.query.destination);
    res.send(result);
}
);

router.get('/airports', async (req, res) => {
    console.log("request", req);
    const result = await getAriports();
    res.send(result);
}
);
router.post('/bookTicket', async (req, res) => {


    let passengerDetails=req.body.passengerDetails
    let flight=req.body.flight
    const dateofBirth = new Date(passengerDetails.DateOfBirth);

    const booking =  await book(  req.body.isGuest, req.body.userID,passengerDetails.FirstName,passengerDetails.LastName,passengerDetails.Nationality,passengerDetails.PassportNumber,dateofBirth,passengerDetails.ContactNumber1, passengerDetails.ContactNumber2,passengerDetails.EmailAddress,flight.FlightID,req.body.seat,0)
    // console.log("request isGuest", req.body.isGuest, req.body.userID,passengerDetails.FirstName,passengerDetails.LastName,passengerDetails.Nationality,passengerDetails.PassportNumber,dateofBirth,passengerDetails.ContactNumber1, passengerDetails.ContactNumber2,passengerDetails.EmailAddress,flight.FlightID,req.body.seat,0);
    // let passenger_id = null
    // let geust_id = null
    // if (req.body.isGuest) {
    //     const geust_id = await createGuestUser(req.body.flight, req.body.passengerDetails);
    //     console.log("guest", geust_id);
    //     passenger_id = await createPassenger('Guest', null, geust_id);

    // } else {
    //     passenger_id = await createPassenger('Registered', req.body.userID, null);

    // }



    // console.log("passenger", passenger_id);

    // const booking_id = await createBooking(req.body.flight, passenger_id, req.body.seat, 0);
    // console.log("booking", booking_id);
    // const booking = await getBookingById(booking_id);
const date = new Date().setMinutes(new Date().getMinutes() + 1);

const job = scheduler.scheduleJob(date, function(){
  validateBooking(booking[0].BookingID);
});
    // const shedule= await scheduleTimer(booking_id);
console.log("booking", booking)
    res.send({ "booking_id": booking, "guest_id": booking.GuestID });

    // const Passenger = await createPassenger(req.query.passengerDetails);
}
)
router.post('/createPayment', async (req, res) => {
    console.log("request", req.body);


    const result = await updateBooking(req.body.bookingId);
    const payment = await createPayment(req.body.bookingId, req.body.passengerID);
    console.log("payment", payment);
    console.log("body", req.body)
  await  main(req.body.passengerDetails[0], req.body.flight[0], req.body.seat[0])

    res.send(payment);

    // const Passenger = await createPassenger(req.query.passengerDetails);
}

);

//a function to get price details from database
router.get('/getPriceDetails', async(req, res) => {
    let seat_price = 0;
    console.log("price request", req.query);
    const discount_percentage = await getdiscountfromDB(req.query.passenUserType);
    const price = await getSeatpricefromDB(req.query.flightId);

    if (req.query.class === "Economy") {
        seat_price = price[0].EconomyPrice;
    }
    else if(req.query.class === "Business"){
        seat_price = price[0].BusinessPrice;
    }
    else if(req.query.class === "Platinum"){
        seat_price = price[0].PlatinumPrice;

    }
    console.log("price", seat_price, "discount", discount_percentage);
    const discount_value = seat_price *(discount_percentage.length>0? discount_percentage[0].Discount:0);
    const final_price = seat_price - discount_value;
    console.log("price", final_price, "discounted value", discount_value);
    res.send({ "price": final_price, "discount": discount_value });
});


export default router;