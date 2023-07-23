const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [
  {
    id: 0,
    header: 'eBoons',
    canopy: 'eBoons',
    backend: 'Back End Dev',
    year: '2023',
    popupPhoto: 'media/screenshot eBoons.png',
    content: 'a website that boosts your buying power by offering discounted prices and special deals.',
    tools: ['Docker', 'Django', 'React', 'PostgreSQL', 'HTML', 'CSS', 'Javascript'],
    live: 'https://www.eboons.com/',
    source: 'https://github.com/Tafita1339/eboons-backend',
  },

  {
    id: 1,
    header: 'To Do List',
    canopy: 'ToDo',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/ToDo.png',
    content: 'The To-Do List application is a powerful tool designed to help you stay organized and manage your tasks effectively. With its robust features, this application simplifies the process of creating, organizing, and tracking your daily tasks and goals.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://rbd3.github.io/To-Do-Deploy/',
    source: 'https://github.com/rbd3/ToDo-List-Narson',
  },

  {
    id: 2,
    header: 'BookStore',
    canopy: 'BookStore',
    backend: 'Full Stack Dev',
    year: '2023',
    popupPhoto: 'media/BookStore.png',
    content: 'Book Store, a user-friendly React-based application that enpowers user to effortlessly add and remove books form your collection.Adding a book is as simple as providing the book title and author name.Once you have entered the required information, just press the enter key or click the submit button to add the book store.',
    tools: ['HTML', 'React', 'Redux', 'CSS', 'JavaScript'],
    live: 'https://bookstore-5cb5.onrender.com',
    source: 'https://github.com/rbd3/bookstore',
  },

  {
    id: 3,
    header: 'TV-Show episodes',
    canopy: 'TV-Show',
    backend: 'Full Stack Dev',
    year: '2023',
    popupPhoto: 'media/screenshot TV.png',
    content: 'The TV-ShoW Episodes website is a platform that provides information about various TV-serie. The website utilizes an API to fetch data about popular TV-shows episodes : season number or summary about it for example.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tv-show-episodes.onrender.com',
    source: 'https://github.com/rbd3/JavascriptCapstone',
  },
];

for (let i = 0; i < projectInfo.length; i += 1) {
  const card = document.createElement('div'); // to generate a new card for each project
  card.classList.add('card-body');
  let toolsHtml = '';
  for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
    toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
  }

  card.innerHTML = `
    <div class="card-img">
      <img src="${projectInfo[i].popupPhoto}" width="100%" />
    </div>
    <div>
      <h2 class="card-header">${projectInfo[i].header}</h2>
      <ul class="card-sub">
        <li class="remove">${projectInfo[i].canopy}</li>
        <li>${projectInfo[i].backend}</li>
      
        <li>${projectInfo[i].year}</li>
      </ul>
      <div class="card-content">
        <p>${projectInfo[i].content}</p>
        <ul class="tools">
          ${toolsHtml}
        </ul>
        <button class="popBtn show">See project</button>
      </div>
    </div>
  `;

  projects.appendChild(card);
}

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let toolsHtml = '';
    for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
      toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
    }

    popUp.innerHTML = `
        <section id="modal-section">
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="card-header">${projectInfo[i].header}</h2>
            <i id="modal-close" class="uil uil-multiply"><img src="media/cross.png"></i>
            <ul class="card-sub">
              <li class="remove">${projectInfo[i].canopy}</li>
              <li>${projectInfo[i].backend}</li>
              <li>${projectInfo[i].year}</li>
            </ul>
          </div>
          <img class="image-img" src="${projectInfo[i].popupPhoto}" />       
          <div>
            <div class="modal-content">
              <p>${projectInfo[i].content}</p>
              <div class="modal-links-content">
                <ul class="tools mobile-category">
                  ${toolsHtml}
                </ul>
                <div>
                  <hr class="line-break" />
                  <div class="modal-combine">
                    <button class="modal-button live">
                      <a href=${projectInfo[i].live}>See live</a>
                      <img class="svg" src="media/Live-Icon.svg" alt="Live Icon" />
                    </button>
                    <button class="modal-button source">
                    <a href=${projectInfo[i].source}>See source</a>
                      <span>
                      <img class="svg" src="media/Group.svg" alt="Github Icon" />
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        `;
    body.appendChild(popUp);
  });
}

body.addEventListener('click', () => {
  body.style.display = 'none';
  popUp.remove();
});
