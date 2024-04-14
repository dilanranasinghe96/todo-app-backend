const ToDoModel = require("../model/todo.model");

class ToDoServices{
    static async createTodo(userId,title,desc){
        const createTodo = new ToDoModel({userId,title,desc});
        return await createTodo.save();
    }

    static async getUserToDoList(userId){
        const todoList = await ToDoModel.find({userId})
        return todoList;
   }
}

module.exports = ToDoServices;

