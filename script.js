const rootUrl = 'https://swapi.co/api/';

// Getting all resources from root
async function getResources() {
    const response = await fetch(rootUrl);
    const resources = await response.json();
    return resources;
}


// Fetching films
async function getFilms() {
    const resources = await getResources();
    const filmsUrl = resources.films;
    const response = await fetch(filmsUrl);
    const filmsJson = await response.json();
    const films = filmsJson.results;
    const filmCards = printFilmsCards(films);
    getFilmInfo();
    return filmCards;
}
getFilms();

// Fetching people
async function getPeople() {
    const resources = await getResources();
    const peopleUrl = resources.people;
    const response = await fetch(peopleUrl);
    const peopleJson = await response.json();
    const people = peopleJson.results;
    const peopleCards = printPeopleCards(people); 
    console.log(people);
    return peopleCards;
}
getPeople();


function getFilmData(data){ 
    let card = '';
    data.forEach(e => {
        //console.log(e);
        if(e.title){
            card += `<div class="film-card">
            <h3 class="card-title">Title: ${e.title}</h3>
            <p class="film-card-text">Episode ID: ${e.episode_id}</p>
            <p class="film-card-text">Release date: ${e.release_date}</p>
            </div>`;
        }if(e.skin_color){
            card += `<div class="people-card">
            <h3 class="card-title">Name: ${e.name}</h3>
            <p class="people-card-text">Gender: ${e.gender}</p>
            <p class="people-card-text">Birth year: ${e.birth_year}</p>
            <p class="people-card-text">Hair color: ${e.hair_color}</p>
            <p class="people-card-text">Skin color: ${e.skin_color}</p>
            <p class="people-card-text">Eye color: ${e.eye_color}</p>
            <p class="people-card-text">Height: ${e.height}</p>
            <p class="people-card-text">Mass: ${e.mass}</p>
            <p class="people-card-text">Species:${e.species} </p>
            <p class="people-card-text">Homeworld: </p>
            <p class="people-card-text">Vehicles: </p>
            <p class="people-card-text">Starships: </p>
            <p class="people-card-text">Films: </p>`
        }
    })
    return card;
};

// Print cards in Films section
function printFilmsCards(data) {
    const filmContent = document.querySelector('#films');
    //console.log(filmContent);
    let template = getFilmData(data);
    filmContent.innerHTML = `
    <h2 class="section-title">The Films</h2>
    ${template}`;
};

// Print cards in People section
function printPeopleCards(data) {
    const peopleContent = document.querySelector('#people');
    let template = getFilmData(data);
    peopleContent.innerHTML = `
    <h2 class="section-title">The People</h2>
    ${template}`;
};

function getFilmInfo(){
    const filmCard = document.querySelectorAll('div.film-card')
    filmCard.forEach(e=> {
        e.addEventListener('click', ()=>{
            alert('funciona el click')
        })
    })
}


/***********
 * Preguntas:
 * Cuando la data tiene muchas hojas, la función fetch se ejecuta con el click del botón siguiente?
 * Para mostrar la info de Species, debo hacer fetch de esa url dentro de la función getFilmData
 * En JS puro, para que pareciera una SPA: display:none o con rutas?
 */


