const express =require("express")
const cors=require("cors")
const app=express()
const port=2000
app.use(cors())

// const stripe=require("stripe")("sk_test_51OPhgtSDANAXCtDOeAfgzYbjvPixEBrDka2Ka2ycREbrIwtCiYfNFPqqIZTGAiKgQJHVTVN7c5lX02F4hGuC4YWo00uSNcYMZL");
app.use(express.json())

// shoes api 
//    get data in shoes api and shoes with frontend third section 

const shoes=require("./db/shoesapi")

app.get("/api",async (req,res)=>{

    let result=await shoes.find()
res.json(result)
})


// client reviews api 
const client=require("./db/clientReview")

app.get("/client",async (req,res)=>{
    let result=await client.find()
        res.send(result)
})





    // signup 
  const user=require("./db/user")


app.post("/register",async (req,res)=>{
    let result=await new user(req.body)
    result=await result.save()
    result=result.toObject();
    delete result.userPassword
    res.send(result)
    console.log(result)
})




// login 

app.post("/login",async (req,res)=>{

    if(req.body.userPassword && req.body.userEmail){

        let response =await user.findOne(req.body).select("-userPassword")

        if(response){
            res.json(response)
        }
        else{
            res.json("No user Found")
        }
    }     
})



const Contact=require("./db/Contactus")


app.post("/contactus",async (req,res)=>{
    let result=await new Contact(req.body)
    result=await result.save()
    res.send(result)
    console.log(result)
})




app.listen(port,()=>{
    console.log(`server has start${port}`)
})