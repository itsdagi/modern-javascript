const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');

function addItem(e){
  e.preventDefault();
  // validate input
  if(itemInput.value === ''){
    alert('Please add an item')
    return;
  }
console.log('sucess');
}
// Event Listeners
itemForm.addEventListener('submit', addItem);