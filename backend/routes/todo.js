const express=require("express");
const { fetchTodos } = require("../controllers/todo");

const router=express.Router();

router.get("/",fetchTodos);

module.exports=router;