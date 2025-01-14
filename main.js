//темная и светлая тема на сайте

const themeDark = document.querySelector(".theme-dark");
const themeLight = document.querySelector(".theme-light");

themeDark.addEventListener("click", () => {
  document.body.classList.add("dark");
});

themeLight.addEventListener("click", () => {
  document.body.classList.remove("dark");
});

//кнопки

const Input = document.querySelector(".main__input");

const btnAdd = document.querySelector(".main__add");

const btnRemoveONE = document.querySelector(".main__removeOne");

const btnRemoveALL = document.querySelector(".main__removeAll");

const list = document.querySelector(".main__list");

const wrapper = document.querySelector(".main__wrapper");

btnAdd.addEventListener("click", () => {
  if (Input.value !== "") {
    const li = document.createElement("li");
    li.textContent = Input.value;
    list.appendChild(li);
    Input.value = "";
  } else {
    alert("Введите задачу");
  }
  saveData();
});

//сохранение
window.addEventListener("load", () => {
  loadData();
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function loadData() {
  list.innerHTML = localStorage.getItem("data");
}

//удаление

btnRemoveONE.addEventListener("click", () => {
  list.removeChild(list.lastElementChild);
  saveData();
});

btnRemoveALL.addEventListener("click", () => {
  list.innerHTML = "";
  saveData();
});

//счетчик

const numberTasks = document.querySelector(".header__span");


numberTasks.addEventListener("click", () => {
  numberTasks.textContent = list.childElementCount;
  saveData();
});


btnAdd.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
  saveData();
});

btnRemoveONE.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  saveData();
  numberTasks.textContent = count;
});

btnRemoveALL.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
  saveData();
});

//удаление через лист

wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("removeLi");
  }
  saveData();
});
