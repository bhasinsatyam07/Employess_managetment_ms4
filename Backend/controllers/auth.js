import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { createError }  from '../utils/error.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'



export const register = async (req,res,next)=>{
    try{
        //to hash password use bcryptjs --encording password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hash,
        })
        await newUser.save()
        res.status(200).json("user has been created")
        }catch(error){
        next(error);
        }
}

export const login = async (req,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user) 
        return next(createError(404, "User not fount!"))


        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            if(!isPasswordCorrect) 
            return next(createError(400, "wrong password not found!"))

            const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);

            const {password, isAdmin, ...otherDetails}=user._doc;
            res.cookie("access_token", token,{httpOnly:true}).status(200).json({...otherDetails});
            }catch(error){
            next(error);
            }
    }