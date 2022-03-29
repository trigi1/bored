let itemCount = 0;
let listData = JSON.parse(localStorage.getItem("listVal")) || [];

listData.forEach(element => {
  addVal(element);
})

function createNewElement() {
  var currentText = document.getElementById("in").value;
  if(currentText == "-end") {
    clearList();
    return;
  }
  addVal(currentText);
  document.getElementById("in").value = "";
  listData.push(currentText);
  localStorage.setItem("listVal", JSON.stringify(listData));
}

function addVal(element) {
  itemCount++;
  var newElement = document.createElement("li");
  newElement.innerHTML = element;
  newElement.className = "left";
  newElement.id = "listItem" + itemCount;
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
  listData.pop();
  itemCount--;
}

function clearList() {
  localStorage.clear();
  listData = [];
  var fullList = document.getElementById("list");
  for(; itemCount > 0; itemCount--) {
      var removable = document.getElementById("listItem" + itemCount);
      fullList.removeChild(removable);
  }
  document.getElementById("in").value = "";
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
