const Todo=require("../models/todo");

const fetchTodos=async(req,res)=>{
    try {
        const result=await Todo.find();
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).send(error);
    }
}

const addTodo=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name)
            throw new Error("Please send a name of the ToDo");
        const result=await Todo.create({name:name});
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).send(error);
    }
}

const editTodo=async(req,res)=>{
    try {
        const id=req.params.id;
        const {newName}=req.body;
        if(!id)
            throw new Error("Please send id of the ToDo");
        if(!name)
            throw new Error("Please send new name of the ToDo");
        const result=await Todo.findByIdAndUpdate(id,{name:newName});
        console.log(result)
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteTodo=async(req,res)=>{
    try {
        const id=req.params.id;
        if(!id)
            throw new Error("Please send id of the ToDo");
        const result=await Todo.findByIdAndDelete(id);
        res.status(200).json({msg: "Todo Deleted Successfully"});
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports={
    fetchTodos,
    addTodo
};