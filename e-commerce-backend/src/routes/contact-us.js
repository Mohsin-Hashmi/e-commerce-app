
const express= require('express');
const contactRoute= express.Router();
const { validateUser } = require("../utils/validation");

contactRoute.post('/contact-us', async(req,res)=>{
    try{

        const {name, email, message}= req.body;
        validateUser(req);
        

    }catch(err){

    }
})

module.exports= contactRoute;