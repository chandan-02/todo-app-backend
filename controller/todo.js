const Todo = require('../model/todos');

exports.createTodo = async (req, res) => {
    const { description } = req.body;
    try {
        if (!description) {
            return res.status(400).json({ status: false, data: "please provide description" })
        }
        const createTodo = await Todo.create({ description });
        return res.status(201).json({ status: true, data: createTodo })
    } catch (error) {
        return res.status(500).json({ status: false, data: "server error" })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const allTodos = await Todo.find({});
        return res.status(200).json({ status: true, data: allTodos })
    } catch (error) {
        return res.status(500).json({ status: false, data: `server error :${error}` })

    }
}

exports.getSingleTodo = async (req, res) => {
    const { todoid } = req.params;
    const { select } = req.query
    try {
        const todosData = await Todo.findOne({ _id: todoid }).select(select?.split(','));
        return res.status(200).json({ status: true, data: todosData })
    } catch (error) {
        return res.status(500).json({ status: false, data: `server error :${error}` })

    }
}

exports.updateTodo = async (req, res) => {
    const { todoid } = req.params;
    try {
        const updatedodo = await Todo.findOneAndUpdate({ _id: todoid }, { status: "done" }, { returnOriginal: false });
        return res.status(201).json({ status: true, data: updatedodo })
    } catch (error) {
        return res.status(500).json({ status: false, data: `server error :${error}` })

    }
}

exports.deleteTodo = async (req, res) => {
    const { todoid } = req.params;
    if (todoid == ':todoid') {
        return res.status(400).json({ status: false, data: "please provide todoid" })
    }
    try {
        const Del = await Todo.deleteOne({ _id: todoid });
        return Del.acknowledged ? (
            res.status(201).json({ status: true, data: `Todo with id :${todoid} deleted successfully!` })
        ) : res.status(400).json({ status: true, data: `Something went wrong` });
    } catch (error) {
        return res.status(500).json({ status: false, data: `server error :${error}` })
    }
}
