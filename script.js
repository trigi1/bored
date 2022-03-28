function createNewElement() {
  var newElement = document.createElement("li");
  newElement.innerHTML = "thing";
  document.getElementById("list").appendChild(newElement);
}
