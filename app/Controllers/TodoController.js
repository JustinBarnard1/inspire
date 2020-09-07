import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js"

//TODO Create the draw function
function _drawTodos() {
  let tTodo = ProxyState.todos
  let template = ""
  console.log(tTodo)
  tTodo.forEach(t => template += t.getTemplate())
  document.getElementById("todo-here").innerHTML = template

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on('todos', _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form.description.value
    };
    console.log(todo)
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}