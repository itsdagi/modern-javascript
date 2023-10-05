const itemForm = document.getElementById('item-from');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault(); //e.preventDefault() is commonly used in web development to create more interactive and dynamic web applications where you want to control the behavior of elements in response to user interactions.
  const newItem = itemInput.value;
    // validate Input 

    if(newItem=== ""){
        alert('please add an item');
          return;
    }

}
// Event Listners

itemForm.addEventListener('submit', addItem);
