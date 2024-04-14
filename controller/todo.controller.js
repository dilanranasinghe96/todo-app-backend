const ToDoServices = require("../services/todo.services");

exports.createTodo = async (req,res,next)=>{
    try {
        const {userId,title,desc}  = req.body;
        let todo = await ToDoServices.createTodo(userId,title,desc);
        res.json({status:true,success:todo});

    } catch (error) {
        next(error);
    }
}

exports.getToDoList =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let todoData = await ToDoServices.getUserToDoList(userId);
        res.json({status: true,success:todoData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

