import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js";

//xxxxxxxxx// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'justinbarnard/todos/'


class TodoService {
  async getTodos() {
    //console.log("Getting the Todo List");
    let res = await api.get(url);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    let thisTodo = new Todo(res.data.data)
    ProxyState.todos = [...ProxyState.todos, thisTodo]

  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    if (!todo) {
      throw new Error("Todo does not exist")
    }
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == true) {
      todo.completed = false
      //console.log(x)
    } else {
      todo.completed = true
      //console.log(y)
    }
    let res = await api.put(url + todoId, todo);
    console.log(res)
    ProxyState.todos = ProxyState.todos

    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    await api.delete(`justinbarnard/todos/${todoId}`)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)
  }
}




const todoService = new TodoService();
export default todoService;