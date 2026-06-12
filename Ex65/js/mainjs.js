list = document.getElementById("WebNodeList");
function addNode() {
    content = document.getElementById("inputContent").value.trim();
    Position = parseInt(document.getElementById("inputPosition").value);
    items = list.querySelectorAll("li");
    newLi = document.createElement("li");
    newLi.textContent = content;
    if (Position > items.length) {
        list.appendChild(newLi);
    } else {
        list.insertBefore(newLi, items[Position - 1]);
    }
}
function removeNode() {
    Position = parseInt(document.getElementById("removePosition").value);
    items = list.querySelectorAll("li");
    list.removeChild(items[Position - 1]);
}
function modifyNode() {
    content = document.getElementById("modifyContent").value.trim();
    Position = parseInt(document.getElementById("modifyPosition").value);
    items = list.querySelectorAll("li");
    newLi = document.createElement("li");
    newLi.textContent = content;
    list.replaceChild(newLi, items[Position - 1]);
}
