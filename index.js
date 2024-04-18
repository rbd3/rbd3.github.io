const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [  

  {
    id: 6,
    header: 'eBoons',
    canopy: 'eBoons',
    backend: 'Full Stack Dev',
    year: '2023',
    popupPhoto: 'media/eBoons.png',
    content: 'a website that boosts your buying power by offering discounted prices and special deals.',
    tools: ['Docker', 'Django', 'React', 'PostgreSQL', 'HTML', 'CSS', 'Javascript'],
    live: 'https://www.eboons.ch/',
  },
  
  {
    id: 0,
    header: 'Budget App',
    canopy: 'Budget App',
    backend: 'Full Stack Dev',
    year: '2023',
    popupPhoto: 'media/Budget-App.PNG',
    content: 'This Ruby on Rails project is about a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tools: ['Ruby on Rails', 'PostgreSQL','HTML', 'CSS'],
    live: 'https://budgetuser.onrender.com',
    source: 'https://github.com/rbd3/Budget-App',
  },
  {
    id: 1,
    header: 'Space Travelers Hub',
    canopy: 'Hub',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/space-travelers.png',
    content: 'We will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    tools: ['HTML', 'CSS', 'React', 'Bootstrap'],
    live: 'https://space-travelers-hub-three.vercel.app/',
    source: 'https://github.com/Abdulwhbhussain/Space-Travelers-Hub',
  },
  {
    id: 2,
    header: 'Math Magicians',
    canopy: 'Calculator',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/math-magicians.png',
    content: 'Calculator Web App: A user-friendly web-based calculator that performs basic arithmetic operations. Built with HTML, CSS, and React.',
    tools: ['HTML', 'CSS', 'React'],
    live: 'https://math-magicians-zopr.onrender.com',
    source: 'https://github.com/rbd3/math-magicians',
  },
  {
    id: 3,
    header: 'TV-Show episodes',
    canopy: 'TV-Show',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/TV.png',
    content: 'The TV-ShoW Episodes website is a platform that provides information about various TV-serie. The website utilizes an API to fetch data about popular TV-shows episodes : season number or summary about it for example. You can add a comment',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tv-show-episodes.onrender.com',
    source: 'https://github.com/rbd3/JavascriptCapstone',
  },
  {
    id: 4,  
    header: 'BookStore',
    canopy: 'BookStore',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/BookStore.png',
    content: 'Book Store, a user-friendly React-based application that enpowers user to effortlessly add and remove books form your collection.Adding a book is as simple as providing the book title and author name.Once you have entered the required information, just press the enter key or click the submit button to add the book store.',
    tools: ['HTML', 'React', 'Redux', 'CSS', 'JavaScript'],
    live: 'https://bookstore-5cb5.onrender.com',
    source: 'https://github.com/rbd3/bookstore',
  },


  {
    id: 5,
    header: 'To Do List',
    canopy: 'ToDo',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/ToDo.png',
    content: 'The To-Do List application is a powerful tool designed to help you stay organized and manage your tasks effectively. With its robust features, this application simplifies the process of creating, organizing, and tracking your daily tasks and goals.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://rbd3.github.io/To-Do-Deploy/',
    source: 'https://github.com/rbd3/ToDo-List-Narson',
  }
];

for (let i = 0; i < projectInfo.length; i+= 1) {
  const card = document.createElement('div'); // to generate a new card for each project
  card.classList.add('card-body');
  let toolsHtml = '';
  for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
    toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
  }

  card.innerHTML = `
    <div class="card-img">
      <img class="hvr-bounce-in" src="${projectInfo[i].popupPhoto}" width="100%" />
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

for (let i = 0; i < showButton.length; i+= 1) {
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
