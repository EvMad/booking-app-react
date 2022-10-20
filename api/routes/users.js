import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next) => {
    res.send("hello use, you are logged in.")
} );


//UPDATE

router.put("/:id", updateUser );

//DELETE

router.delete("/:id", deleteUser );

//GET

router.get("/:id", getUser );

//GET ALL

router.get("/", getAllUsers );

export default router;