const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url, callback) {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data)
      }
      else{
        reject(error(xhr.statusText));
      }
    };
    xhr.onerror = () => reject(Error('an error has occured'))
    xhr.send();
  })
  
}

function getProfiles(json) {
  const Profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);      
  }); 
  return Promise.all(Profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map(person =>{
    const section = document.createElement('section');
  peopleList.appendChild(section);
  // Check if request returns a 'standard' page from Wiki
  if (data.type === 'standard') {
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
}})
}
  
btn.addEventListener('click', (event) => {

  event.target.textContent = "Loading ....."
  getJSON(astrosUrl)
  .then(getProfiles)
  .then(generateHTML)
  .catch(err => console.log(err))
  .finally(()=> event.target.remove())
  
})