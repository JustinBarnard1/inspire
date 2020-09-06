export default class Todo {
  constructor({ _id, description, completed, toggle }) {
    this.id = _id;
    this.description = description;
    this.completed = completed

    this.toggle = toggle || ""
    if (this.completed == true) {
      this.toggle = "checked"
    } else {
      this.toggle = ""
    }

  }

  get Template() {
    return `<li class="p-1 my-1"><input onclick="app.todoController.toggleTodoStatus('${this.id}')" class="mx-2" type="checkbox" '${this.toggle}'">${this.description}<div class="d-flex justify-content-end"><a href="#"
                                        onclick="app.todoController.removeTodo('${this.id}')" class="card-link">Delete</a></div>
                            </li>`
  }
}