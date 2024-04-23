const express = require ("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./models/user")


const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nextjs:nextjs123@cluster0.wygvdvh.mongodb.net/")


app.post("/register", (req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req,res) => {
    const {email ,password} = req.body;
    userModel.findOne({email: email})
    .then(users => {
        if(users){
            if(users.password === password) {
                res.json("success")
            }
            else{
                res.json("the password is incoorect")
            }
        }else{
            res.json("you are not Registered")
        }
    })
})



app.listen(3003, ()=>{
    console.log(" server running")
})