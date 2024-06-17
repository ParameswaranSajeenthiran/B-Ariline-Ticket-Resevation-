import express from "express";
import { getFlightStatus } from "../../air-backend/databaseFlightStatus.js";
import { addFlightDelay } from "../../air-backend/databaseFlightStatus.js";

var router = express.Router();

router.get('/', async (req, res) => {
    console.log("request", req);
    console.log(req.query.currentDate);
    const result = await getFlightStatus(req.query.currentDate);

    res.send(result[0]);
});

router.post('/addFlightDelay', async (req, res) => {
    console.log("request", req.body);
    const result = await addFlightDelay(req.body);
    res.send(result[0]);
});

export default router;