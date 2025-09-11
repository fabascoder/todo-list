function Dom(tag) {
  return document.querySelector(tag);
}

const arrayName = [];
const arrayPriority = [];

function Task(name, priority, btn, list, result) {
  this.name = name;
  this.priority = priority;
  this.btn = btn;
  this.list = list;
  this.result = result;

  this.btn.addEventListener("click", () => {
    // verificação se possui texto, e barra se tiver palavras proibidas
    if (this.name.value !== "" && this.priority.value !== "") {
      this.name.classList.add("input-valido");
      this.priority.classList.add("input-valido");
      this.list.classList.add("lista-ativa");
      if (!this.name.value.includes("spam")) {
        this.top();
        this.result.textContent = "";
      } else {
        console.log("palavra 'span' detectada!");
      }
    } else {
      this.result.style.color = "red";
      this.result.style.fontFamily = "Arial, sans-serif";
      this.result.textContent = "⚠️ INVÁLIDO";
      this.result.classList.add("msg-invalido");
      this.name.classList.add("input-invalido");
      this.priority.classList.add("input-invalido");
    }
    this.name.value = "";
    this.priority.value = "";
  });
}

//PROTOTIPOS
Task.prototype.top = function () {
  const valueName = this.name.value;
  const valuePriority = this.priority.value;
  const data = new Date();

  //display ao user
  const li = document.createElement("li");
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "remover";
  btnRemove.classList.add("btn-remove");
  const span = document.createElement("span");

  span.textContent = `${valueName} - ${valuePriority}`;

  li.appendChild(span);
  li.appendChild(btnRemove);

  const prioridadeNum = parseInt(valuePriority);
  const itens = Array.from(this.list.querySelectorAll("li"));

  btnRemove.addEventListener("click", () => {
    li.remove();
    if (this.list.children.length === 0)
      this.list.classList.remove("lista-ativa");
  });

  let inserido = false;

  for (let i = 0; i < itens.length; i++) {
    const spamItem = itens[i].querySelector("span");
    const textoItem = spamItem.textContent;
    const prioridadeItem = parseInt(textoItem.split(" - ")[1]);

    if (prioridadeNum < prioridadeItem) {
      this.list.insertBefore(li, itens[i]);
      li.classList.add("li-prioridade");
      inserido = true;
      break;
    }
  }

  if (!inserido) {
    this.list.appendChild(li);
  }

  const tarefaAleatoria = Math.round(Math.random() * this.list.children.length);

  console.log("A tarefa aleatoria:" + tarefaAleatoria);

  arrayName.push(valueName);
  arrayPriority.push(valuePriority);
  this.format(valueName, valuePriority);
};

Task.prototype.format = function (el1, el2) {
  const format1 = el1.trim();
  const format2 = format1.charAt(0).toUpperCase() + format1.slice(1).toLowerCase(); // transforma em maíscula
  const formatPriority = el2.padStart("  ");
};
const textInput = new Dom("#taskInput");
const priorityInput = new Dom("#priorityInput");
const btnButton = new Dom("#addTaskBtn");
const listaUl = new Dom(".lista");
const div = new Dom(".result");

const elements = new Task(
  textInput, 
  priorityInput, 
  btnButton, 
  listaUl, 
  div
);
