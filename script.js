const groceryList = [];

function addItem() {
  const itemInput = document.getElementById("itemInput");
  const newItem = itemInput.value.trim();

  if (newItem) {
    groceryList.push(newItem);
    updateList();
    itemInput.value = "";
  }
}

function updateList() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  groceryList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${item}
            <button onclick="removeItem(${index})">Remove</button>
        `;
    itemList.appendChild(listItem);
  });
}

function removeItem(index) {
  groceryList.splice(index, 1);
  updateList();
}

document.getElementById("addItemButton").addEventListener("click", addItem);
document.getElementById("itemInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});

updateList();
