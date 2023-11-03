const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/dog-api/breeds-list')
.then(response =>response.json())
.then(data => console.log(data))

fetch('https://dog.ceo/api/breeds/image/random')
.then(response =>response.json())
.then(data => generateImage(data.message))
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



function generateImage(data){
    const html= `
    <img src ='${data}' alt>
    <p>click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

