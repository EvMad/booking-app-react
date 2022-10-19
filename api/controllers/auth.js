import User from "../models/User.js";

export const register = async (req,res,next) => {

    try {
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.passoword,

        })

        await newUser.save();
        
    } catch(err){
        next(err);
    }

};