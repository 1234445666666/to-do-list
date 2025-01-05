const themeDark = document.querySelector(".theme-dark");
const themeLight = document.querySelector(".theme-light");

themeDark.addEventListener("click", () => {
  document.body.classList.add("dark");
});

themeLight.addEventListener("click", () => {
  document.body.classList.remove("dark");
});

const Input = document.querySelector(".main__input");

const btnAdd = document.querySelector(".main__btn");

const btnRemoveONE = document.querySelector(".main__btn2");

const btnRemoveALL = document.querySelector(".main__btn3");

const list = document.querySelector(".main__list");

const wrapper = document.querySelector(".main__wrapper");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
//   const chexbox = document.createElement("input");
//   chexbox.type = "checkbox";
//   li.appendChild(chexbox);
  li.textContent = Input.value;
  list.appendChild(li);
  Input.value = "";
});

btnRemoveONE.addEventListener("click", () => {
  list.removeChild(list.lastElementChild);
});

btnRemoveALL.addEventListener("click", () => (list.innerHTML = ""));

const numberTasks = document.querySelector(".header__span");

numberTasks.textContent = list.childElementCount;

btnAdd.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
});

btnRemoveONE.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
});

btnRemoveALL.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
});

wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("removeLi");
  }
});
