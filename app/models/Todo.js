export default class Todo {
  constructor({ _id, description, complete }) {
    this.id = _id;
    this.description = description;
    this.complete = complete

  }

  get Template() {
    return `<li class="p-1 my-1">${this.description}<div class="d-flex justify-content-end"><a href="#"
                                        onclick="app.todoController.removeTodo('${this.id}')" class="card-link">Delete</a></div>
                            </li>`
  }
}