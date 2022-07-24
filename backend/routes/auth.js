import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hello thos auth")
})
router.get("/register", (req,res)=>{
    res.send("hello thos register")
})

export default router