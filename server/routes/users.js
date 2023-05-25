import express from 'express';

import{
    getUser,
    getUserFriends,
    addRemoveFriends,   
} from '../controllers/users.js'



import { verifyToken } from '../middleware/auth.js';
import User from '../models/User.js';


const router=express.Router();

//Read
router.get('/:id',verifyToken,getUser);
router.get('/:id',verifyToken,getUserFriends);

//update
router.patch('/:id/:friendId',verifyToken,addRemoveFriends);
export default User;