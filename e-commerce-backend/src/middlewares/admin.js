
const isAdmin= async(req,res, next)=>{
    try{
        const user= req.user;
        if(!user){
            return res.status(400).json({message: "Please login first"});
        }
        if(user.role !== "admin"){
            return res.status(400).json({message: "Admin access required"})
        }
        next();
    }catch(err){
        res.status(400).send("ERROR : " + err.message);
    }
}
module.exports= isAdmin;