import express from 'experss';

import{
    getUser,
    getUserFriends,
    addRemoveFriends,
} from '../controllers/users.js'
import { verifyToken } from '../controllers/middleware/auth.js';


const router=express.Router();

//Read
router.get('/:id',verifyToken,getUser);
router.get('/:id',verifyToken,getUserFriends);

//update
router.patch('/:id/:friendId',verifyToken,addRemoveFriends);