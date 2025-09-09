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
    if (!this.name.value == "" && !this.priority.value == "") {
      if (!this.name.value.includes("spam")) {
        this.top();
        this.result.textContent = "";
      } else {
        console.log("palavra 'span' detectada!");
      }
    } else {
      this.result.style.color = "red";
      this.result.style.fontFamilt = "Arial, sans-serif";
      this.result.textContent = "⚠️ INVÁLIDO";
    }
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
  const span = document.createElement("span");

  span.textContent = `${valueName} - ${valuePriority}`;

  li.appendChild(span);
  li.appendChild(btnRemove);
  this.list.appendChild(li);

  btnRemove.addEventListener("click", () => {
    li.remove();
  });

  arrayName.push(valueName);
  arrayPriority.push(valuePriority);

  // arrayName.forEach((item) => {
  //   li.textContent = item+ " " +
  // })
  // if (valueName.endsWith("!")) { // aqui adiciona task em primeiro caso comece com '!'
  //   arrayName.unshift(valueName);
  // } else {
  //     arrayName.push(valueName);
  // }
  console.log(arrayName, arrayPriority);
  this.format(valueName, valuePriority);
};

Task.prototype.format = function (el1, el2) {
  console.log("aqui é o format()");
  const format1 = el1.trim();
  const format2 =
    format1.charAt(0).toUpperCase() + format1.slice(1).toLowerCase(); // transforma em maíscula
  // const format3 = format2.replace('')
  const formatPriority = el2.toUpperCase();

  console.log("USER: ", format2, formatPriority);
};
const textInput = new Dom("#taskInput");
const priorityInput = new Dom("#priorityInput");
const btnButton = new Dom("#addTaskBtn");
const listaUl = new Dom(".lista");
const div = new Dom(".result");

const elements = new Task(textInput, priorityInput, btnButton, listaUl, div);

// console.log(textInput, priorityInput, b
