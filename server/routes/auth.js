import express from 'express';
import {login} from '../controllers/auth.js';

const router=express.Router(); //routes will be configured,allows us to have in separate files

router.post('/login',login); //from authroutes i.e auth/login (from index.js)

export default router;


