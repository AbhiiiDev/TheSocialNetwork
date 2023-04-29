import User from "../models/User";

//read
export const getUser=async(req,res)=>{
    try{
const {id}=req.params; //grab id from string
const user=await User.findById(id);

    }catch(err){
        res.status(400).json({message:err.message});
    }
}
//grab user friends
export const getUserFriends=asycn(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        
        //multiple api calls to database
        const friends=await Promise.all(
            user.friends.map((id)=>User.findById(id))
        
        );
        const formattedFriends=friends.map(
            ({_id,firstName,lastName,occupation,location,picturePath})=>{
                return{_id,firstName,lastName,occupation,location,picturePath};
            }
        )
        res.status(400).json(formattedFriends)
    }catch(err)
{
    res.status(404).json({message:err.message});
}
}