//refatorar para react!!!

const app = document.querySelector('#root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//FETCH
const urlToFetch = 'https://ghibliapi.herokuapp.com/films';

fetch(urlToFetch)
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.map(movie => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = movie.title;

    const p = document.createElement('p');
    movie.description = movie.description.substring(0, 100);
    p.textContent = `${movie.description}...`;

    container.appendChild(card);

    card.appendChild(h1);
    card.appendChild(p);
    })
  })
  .catch(err => {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Deu ruim!`;
    app.appendChild(errorMessage);
  })

  /*
OBJETO XMLHttpRequest

//Crie uma variável de solicitação e atribua um novo objeto XMLHttpRequest a ela.
let request = new XMLHttpRequest();

// Abra uma nova conexão, usando a solicitação GET no terminal da URL
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    // Comece a acessar os dados JSON aqui
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => { //data.map tambem funcionca
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 100);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);
        })
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Deu ruim!`;
        app.appendChild(errorMessage);
    }
}

// Enviar pedido
request.send();
*/