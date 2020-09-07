export default class Todo {
  constructor({ _id, description, completed }) {
    this.id = _id;
    this.description = description;
    this.completed = completed;



  }





  getTemplate() {
    if (this.completed == true) {
      return `<li class="p-1 my-1"><input class="mx-2" type="checkbox" checked onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description}<div class="d-flex justify-content-end"><a href="#"
                                        onclick="app.todoController.removeTodo('${this.id}')" class="card-link">Delete</a></div>
                            </li>`
    } else {
      return `<li class="p-1 my-1"><input class="mx-2" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description}<div class="d-flex justify-content-end"><a href="#"
                                        onclick="app.todoController.removeTodo('${this.id}')" class="card-link">Delete</a></div>
                            </li>`
    }
  }
}