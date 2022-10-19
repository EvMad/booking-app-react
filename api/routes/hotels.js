import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel } from "../controllers/hotel.js";
import { updateHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";

const router = express.Router();

//CREATE

router.post("/", createHotel );

//UPDATE

router.put("/:id", updateHotel );

//DELETE

router.delete("/:id", deleteHotel );

//GET

router.get("/:id", async (req, res) => {

    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err);
    }

});

//GET ALL

router.get("/", async (req, res, next) => {
 
    
    // if (failed) return next(createError(401, "You are not authenticated!"));
    
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }

});


export default router;