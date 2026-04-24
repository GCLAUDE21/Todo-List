const form = document.querySelector("form");
const ul = document.getElementById("ulListe");
let inputForm = document.getElementById("inputList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.textContent = inputForm.value;

  ul.appendChild(li);

  inputForm.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("clicked")) {
    e.target.remove();
  } else if (e.target.tagName === "LI") {
    {
      e.target.classList.add("clicked");
    }
  }
});
