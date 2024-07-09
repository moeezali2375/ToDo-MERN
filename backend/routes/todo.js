const express = require("express");
const {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  markTodo,
} = require("../controllers/todo");

const router = express.Router();

router.get("/", fetchTodos);

router.post("/", addTodo);

router.put("/mark/:id", markTodo);

router.put("/:id", editTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
