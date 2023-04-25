import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

//Register Users

export const register=async(req,res)=>{
    try{
        //destructuring these elements from req.body
const {
    firstName,
    lastName,
    email,
    password, 
    picturePath,
    friends,
    location,
    occupation
} =req.body;
const salt=await bcrypt.genSalt();
const passwordHash=await bcrypt.hash(password,salt);

const newUser= new User({
    firstName,
    lastName,
    email, 
    password:passwordHash,
    picturePath,
    friends,
    location,
    occupation,
viewedProfile:Math.floor(Math.random()*10000), 
impression:Math.floor(Math.random()*10000)
});
const savedUser= await newUser.save();
res.status(201).json(savedUser);
    } catch(error){
res.status(500).json({error:error.message});
    }
}