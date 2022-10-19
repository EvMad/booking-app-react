import express from "express";
// import Hotel from "../models/Hotel.js";
import { createHotel } from "../controllers/hotel.js";
import { updateHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";
import { getAllHotels } from "../controllers/hotel.js";

const router = express.Router();

//CREATE

router.post("/", createHotel );

//UPDATE

router.put("/:id", updateHotel );

//DELETE

router.delete("/:id", deleteHotel );

//GET

router.get("/:id", getHotel );

//GET ALL

router.get("/", getAllHotels );


export default router;