const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url){
    return fetch(url)
    .then(res => res.json())
}


fetchData('https://dog.ceo/api/breeds/list/all')

.then(data => generateOptions(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')

.then(data => generateImage(data.message))
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateOptions(data){
    const options = Object.keys(data).map((item) =>
    `<option value='${item}'>${item}</option>`
        
        ).join('');
        select.innerHTML = options;
}


function generateImage(data){
    const html= `
    <img src ='${data}' alt>
    <p>click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html
}

function fetchBreedImage(){
    const breed = select.value;
    const img = card.querySelector('img')
    const p = card.querySelector('p')
}
// ------------------------------------------
//  EVENT LISTENERS
// -----------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

