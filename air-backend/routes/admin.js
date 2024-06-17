import express from "express";
import { getFlightData0, getFlightData1, getFlightData2, 
    getDestinationData, getDestinationTotal, 
    getPassengerDataGold, getPassengerDataFrequent, getPassengerDataGuest, getPassengerDataTotal, 
    getRouteData, getRouteInfo, 
    getRouteTotal, getModelRevenue } from "../../air-backend/database.js";
var router = express.Router();

router.get('/admin1.0', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin1.0:", req.query.flightnumber);
    const result = await getFlightData0(req.query.flightnumber);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin1.1', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin1.1:", req.query.flightnumber);
    const result = await getFlightData1(req.query.flightnumber);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin1.2', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin1.2:", req.query.flightnumber);
    const result = await getFlightData2(req.query.flightnumber);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin2', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin2:", req.query.Destination, req.query.fromDate, req.query.toDate);
    const result = await getDestinationData(req.query.Destination, req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin2.1', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin2.1:", req.query.Destination, req.query.fromDate, req.query.toDate);
    const result = await getDestinationTotal(req.query.Destination, req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin3.1', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin3.1:", req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataGold(req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin3.2', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin3.2:", req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataFrequent(req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin3.3', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin3.3:", req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataGuest(req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin3.4', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin3.4:", req.query.fromDate, req.query.toDate);
    const result = await getPassengerDataTotal(req.query.fromDate, req.query.toDate);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin4.1', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin4.1:", req.query.Origin, req.query.Destination);
    const result = await getRouteData(req.query.Origin, req.query.Destination);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin4.2', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin4.2:", req.query.Origin, req.query.Destination);
    const result = await getRouteInfo(req.query.Origin, req.query.Destination);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin4.3', async (req, res) => {   
    console.log("request",  req);
    console.log("Request received at /admin/admin4.3:", req.query.Origin, req.query.Destination);
    const result = await getRouteTotal(req.query.Origin, req.query.Destination);
    res.json(result);
    res.send(result);
})  ;

router.get('/admin5.1', async (req, res) => {   
    console.log("request",  req);
    const result = await getModelRevenue();
    res.json(result);
    res.send(result);
})  ;

router.get('/admin5.2', async (req, res) => {   
    console.log("request",  req);
    const result = await getTotalRevenue();
    res.json(result);
    res.send(result);
})  ;

export default router;