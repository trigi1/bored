let itemCount = 0;

function createNewElement() {
  itemCount++;
  var newElement = document.createElement("li");
  newElement.innerHTML = document.getElementById("in").value;
  newElement.className = "left";
  newElement.id = "listItem" + itemCount;
  document.getElementById("in").value = "";
  document.getElementById("list").appendChild(newElement);
}

function removeLastElement() {
  if(itemCount == 0) {
    return;
  }
  var fullList = document.getElementById("list");
  var removable = document.getElementById("listItem" + itemCount);
  fullList.removeChild(removable);
  var currentVal = document.getElementById("in").value;
  document.getElementById("in").value = currentVal.substring(0, currentVal.length - 1);
  itemCount--;
}

function handler(event) {
  switch(event.key) {
    case "Enter":
      event.preventDefault();
      createNewElement();
      break;
    case "\\":
      event.preventDefault();
      removeLastElement();
  }
}
