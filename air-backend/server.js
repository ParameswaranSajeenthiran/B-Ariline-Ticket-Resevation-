import express from 'express';
import router1 from './routes/booking.js';
import router2 from './routes/signUp.js';
import router3 from './routes/flightStatus.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

import router from './routes/admin.js';

import {
    getAibusList, getAibusById, createAibus, getFlightsFromDB,
    getFlightData0, getFlightData1, getFlightData2,
    getDestinationData, getDestinationTotal,
    getPassengerDataGold, getPassengerDataFrequent, getPassengerDataGuest, getPassengerDataTotal,
    getRouteData, getRouteInfo, getRouteTotal,
    getModelRevenue, getTotalRevenue
} from './database.js';

const app = express();
const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.json());

app.use(cors());

app.use('/booking', router1);
app.use('/signUp', router2);
app.use('/flightStatus', router3);
app.use(cookieParser())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//I commented from here
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/airbus', async (req, res) => {
//     const result = await getAibusList();
//     res.send(result);
// });
// app.get('/airbus/:id', async (req, res) => {
//     const result = await getAibusById(req.params.id);
//     res.send(result);
// })
// app.post('/airbus', async (req, res) => {
//     const result = await createAibus(req.body.ID, req.body.Name);
//     res.send(result);
// })






// app.get('/flight', async (req, res) => {
//     console.log("request",  req);
//     console.log(req.query.from, req.query.to, req.query.departureDate);
//     const result = await getFlightsFromDB(req.query.from, req.query.to, req.query.departureDate);
//     res.send(result);
// })  ;

app.use('/admin', router);

app.get('/admin1.0', async (req, res) => {
    console.log("request", req);
    console.log(req.query.flightnumber);
    const result = await getFlightData0(req.query.flightnumber);
    res.send(result);
})
app.get('/admin1.1', async (req, res) => {
    console.log("request", req);
    console.log(req.query.flightnumber);
    const result = await getFlightData1(req.query.flightnumber);
    res.send(result);
})

app.get('/admin1.2', async (req, res) => {
    console.log("request", req);
    console.log(req.query.flightnumber);
    const result = await getFlightData2(req.query.flightnumber);
    res.send(result);
})

app.get('/admin2', async (req, res) => {
    console.log("request", req);
    console.log(req.query.Destination, req.query.fromDate, req.query.toDate);
    const result = await getDestinationData(req.query.Destination, req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin2.1', async (req, res) => {
    console.log("request", req);
    console.log(req.query.Destination, req.query.fromDate, req.query.toDate);
    const result = await getDestinationTotal(req.query.Destination, req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin3.1', async (req, res) => {
    console.log("request", req);
    console.log(req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataGold(req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin3.2', async (req, res) => {
    console.log("request", req);
    console.log(req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataFrequent(req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin3.3', async (req, res) => {
    console.log("request", req);
    console.log(req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataGuest(req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin3.4', async (req, res) => {
    console.log("request", req);
    console.log(req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataTotal(req.query.fromDate, req.query.toDate);
    res.send(result);
})

app.get('/admin4.1', async (req, res) => {
    console.log("request", req);
    console.log(req.query.Origin, req.query.Destination);
    const result = await getRouteData(req.query.Origin, req.query.Destination);
    res.send(result);
})

app.get('/admin4.2', async (req, res) => {
    console.log("request", req);
    console.log(req.query.Origin, req.query.Destination);
    const result = await getRouteInfo(req.query.Origin, req.query.Destination);
    res.send(result);
})

app.get('/admin4.3', async (req, res) => {
    console.log("request", req);
    console.log(req.query.Origin, req.query.Destination);
    const result = await getRouteTotal(req.query.Origin, req.query.Destination);
    res.send(result);
})

app.get('/admin5.1', async (req, res) => {
    console.log("request", req);
    const result = await getModelRevenue();
    res.send(result);
})

app.get('/admin5.2', async (req, res) => {
    console.log("request", req);
    const result = await getTotalRevenue();
    res.send(result);
})