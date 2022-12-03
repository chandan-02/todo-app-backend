const express = require("express");
const router = express.Router();

const { createTodo, getTodo, getSingleTodo, updateTodo, deleteTodo } = require('../controller/todo');

router.get('/todos', getTodo)
router.get('/todo/:todoid', getSingleTodo)

router.post('/todo', createTodo)
router.post('/todo/:todoid/done', updateTodo)
router.delete('/todo/:todoid/delete', deleteTodo)

module.exports = router;