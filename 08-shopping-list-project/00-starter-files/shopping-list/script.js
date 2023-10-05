const itemForm = document.getElementById('item-from');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();
}
// Event Listners

itemForm.addEventListener('submit', addItem);
