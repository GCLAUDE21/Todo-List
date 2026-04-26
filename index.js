const form = document.querySelector("form");
const input = document.getElementById("inputList");
let ul = document.getElementById("ulListe");

// Storage Part

const storeList = () => {
  localStorage.setItem("todoList", ul.innerHTML);
};

const getList = () => {
  if (localStorage.getItem("todoList")) {
    ul.innerHTML = localStorage.getItem("todoList");
  } else {
    ul.innerHTML = "<li> Cliquer sur une tâche pour la supprimer </li>";
  }
};

getList();

// Fonction Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ul.innerHTML += "<li>" + input.value + "</li>";

  input.value = "";

  storeList();
});

// Fonction au Click
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("clicked")) {
    e.target.remove();
  } else {
    e.target.classList.add("clicked");
  }

  storeList();
});
