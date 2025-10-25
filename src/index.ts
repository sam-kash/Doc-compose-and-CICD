import express from "express"
import { PrismaClient } from "./generated/prisma/client.js";

const app = express()

app.use(express.json())
const prismaClient = new PrismaClient();

app.get("/",async (req,res) => {

    const data = await (req, res) => {
        const data = await prismaClient.user.findMany();
        res.json({
            data 
        })
    }
    
    res.json({

        "message" : "Get endpoint"
    }
    )
})

app.post("/",async (req,res) =>{ 
    const data = await prismaClient.user.create({
        data:{
        username : Math.random().toString(),
        password : Math.random().toString()
        }
    })
    res.json({
        "message" : "Post endpoint"
    })
})

app.listen(3000)