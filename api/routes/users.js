import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next) => {
    res.send("hello user, you are logged in.")
} );

router.get("/checkuser", verifyUser , (req,res,next) => {
    res.send("hello user, you are logged in and .")
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