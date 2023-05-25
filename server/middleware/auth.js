import jwt from 'jsonwebtoken'

//to authenticate the users

export const verifyToken=async (req,res,next)=>{
    try{
        let token=req.header("Authorization");//grabbing authorization header from frontend
        if(!token){
            return res.status(403).send('access denied');
        }

if(token.startsWith('Bearer ')){
    token=token.slice(7,token.length).trimLeft();//taking everything from right side of bearer
}
const verified=jwt.verify(token,process.env.JWT_SECRET);
req.user=verified;
next();

    }catch(err){
        res.status(500).json({error:err.message})
    }
}