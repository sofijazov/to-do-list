const newItemInput = document.getElementById("new-item");
const dueDateInput = document.getElementById("due-date");
const prioritySelect = document.getElementById("priority");
const addButton = document.getElementById("add-button");
const itemList = document.getElementById("item-list");

function addItem() {
    const newItemText = newItemInput.value;
    const newDueDate = dueDateInput.value;
    const newPriority = prioritySelect.value;

    if (newItemText !== "" & newDueDate !== "" & newPriority !== "") {
        const newItem = document.createElement("li");
        newItem.innerHTML = `<span>${newItemText}</span>
                          <span>till: ${newDueDate}</span>
                          <span>${newPriority} priority</span>`;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {
            newItem.remove();
        });
        newItem.appendChild(deleteButton);

        itemList.appendChild(newItem);
        newItemInput.value = "";
        dueDateInput.value = "";
        prioritySelect.value = "high";
    }
}

addButton.addEventListener("click", addItem);
newItemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});
