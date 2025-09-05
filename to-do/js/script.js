function Dom(tag) {
  return document.querySelector(tag);
}

const arrayName = [];
const arrayPriority = [];

function Task(name, priority, btn) {
  this.name = name;
  this.priority = priority;
  this.btn = btn;

  this.btn.addEventListener("click", () => {
    if (!this.name.value == "" && !this.priority.value == "") {
      this.top();
    } else {
      console.log("deu riom");
    }
  });
}

//PROTOTIPOS
Task.prototype.top = function () {
  const valueName = this.name.value;
  const valuePriority = this.priority.value;
  const data = new Date();

  arrayName.unshift(valueName);
  arrayPriority.unshift(valuePriority);
  console.log(arrayName, arrayPriority);

  this.format(valueName, valuePriority);
};

Task.prototype.format = function (el1, el2) {
  console.log('aqui é o format()')
  const format1 = el1.trim();
  const format2 = format1.charAt(0).toUpperCase() + format1.slice(1).toLowerCase();
  const formatPriority = el2.toUpperCase();
  console.log(format2, formatPriority);
};
const textInput = new Dom("#taskInput");
const priorityInput = new Dom("#priorityInput");
const btnButton = new Dom("#addTaskBtn");

const elements = new Task(textInput, priorityInput, btnButton);

// console.log(textInput, priorityInput, btnButton);