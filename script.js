const itemList = document.getElementById("itemList");

function createListItem(itemText) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = itemText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    listItem.classList.add("fade-out");
    setTimeout(() => {
      itemList.removeChild(listItem);
    }, 500); 
  });

  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);
}

const addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput");
  const newItemText = itemInput.value.trim();
  if (newItemText !== "") {
    createListItem(newItemText);
    itemInput.value = "";
    itemInput.focus();
  }
});
