const express=require("express")
const dotenv=require("dotenv")
const app=express();
dotenv.config()

app.listen(process.env.PORT_NUMBER,()=>{
    console.log(`BE Server is running on PORT ${process.env.PORT_NUMBER}`)
})