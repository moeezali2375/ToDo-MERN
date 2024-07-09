const Todo = require("../models/todo");

const fetchTodos = async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(200).json({ msg: result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addTodo = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Please send a name of the ToDo");
    if (name.trim() === "") throw new Error("ToDo cannot be an empty string.");
    const result = await Todo.create({ name: name });
    res.status(200).json({ msg: result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { newName } = req.body;
    if (!id) throw new Error("Please send id of the ToDo");
    if (!newName) throw new Error("Please send new name of the ToDo");
    if (newName.trim() === "")
      throw new Error("ToDo cannot be an empty string.");
    const result = await Todo.findByIdAndUpdate(
      id,
      { name: newName },
      { new: true }
    );
    res.status(200).json({ msg: result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Please send id of the ToDo");
    const result = await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "Todo Deleted Successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
};
