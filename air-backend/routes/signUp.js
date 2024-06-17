import express from "express";
import {createRegistrant} from "../../air-backend/databaseSignUp.js"
import {checkPasswordfromDB} from "../../air-backend/databaseSignUp.js"
import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'
var router = express.Router();
const salt = 10;

function createToke(username){

    const maxAge=3*24*60*60;
    return jwt.sign({username},'bairline',{expiresIn:maxAge})

}

router.post('/logout',(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.send("sucessfully logout");
})

router.post('/insertSignUp', async(req,res) => {
    console.log("request",  req.body);
    console.log("signup in process")
    bcrypt.hash(req.body.registrationDetails.password.toString(), salt,async function (err, hash) {
        if(err){
            console.log(err);
        }
        else{
            req.body.registrationDetails.password = hash;
            const registration_id = await createRegistrant(req.body.registrationDetails);
            
            var token = createToke(req.body.registrationDetails.userName);
            res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
            res.send(registration_id);


        }
    }); 
});

router.post('/checkPassword', async(req, res) => {
    console.log("login in process")
    const result = await checkPasswordfromDB(req.body.loginDetails);
    try{
        bcrypt.compare(req.body.loginDetails.password.toString(), result[0][0].Password,(err,response)=>{
            if(err){
                console.log("not found");
                console.log(err);
            }
            else{
                if(response){

                    
                    var token = createToke(req.body.loginDetails.username);
                    res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000});
                    res.send({Login:true,passengerDetails:result[0][0]});
                }
                else{
                    res.send({Login:false});
                }
            }
        })
    }catch{
        console.log("notfound");
    }
    
});
export default router;

