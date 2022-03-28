function createNewElement() {
  var newElement = document.createElement("li");
  newElement.innerHTML = document.getElementById("in").value;
  document.getElementById("in").value = "";
  document.getElementById("list").appendChild(newElement);
}

function handler(event) {
  if(event.keyCode == 13) {
    event.preventDefault();
    createNewElement();
  }
}
