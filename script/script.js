const participants = [
  {
    imgSrc: "./source/chelik.png",
    fullName: "Хозе-Рауль Капабланка",
    position: "Чемпион мира по шахматам",
  },
  {
    imgSrc: "./source/chelik.png",
    fullName: "Эммануил Ласкер",
    position: "Чемпион мира по шахматам",
  },
  {
    imgSrc: "./source/chelik.png",
    fullName: "Александр Алехин",
    position: "Чемпион мира по шахматам",
  },
  {
    imgSrc: "./source/chelik.png",
    fullName: "Арон Нимцович",
    position: "Чемпион мира по шахматам",
  },
  {
    imgSrc: "./source/chelik.png",
    fullName: "Рихард Рети",
    position: "Чемпион мира по шахматам",
  },
  {
    imgSrc: "./source/chelik.png",
    fullName: "Остап Бендер",
    position: "Гроссмейстер",
  },
];


let sliderContainer, prevBtn, nextBtn, participantsCounter, slider;
let currentPage = 0;
let totalParticipants = participants.length;
let participantsPerPage;
let intervalId;

// Проверка ширины экрана и создание соответствующего блока поддержки
function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    createSupportBlock();
    createStagesBlock();
    createParticipantsBlock();
  } else {
    createMobileSupportBlock();
    createMobileStagesBlock();
    createMobileParticipantsBlock();
  }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  checkScreenWidth();
  updateChessWrapperWidth();
  updateParticipantsCounter();
startSliderInterval();
});

// Обработка изменений ширины экрана
window.addEventListener("resize", () => {
  checkScreenWidth();
  updateChessWrapperWidth();
});


const runLineWrappers = document.querySelectorAll(".run-line-wrapper");
runLineWrappers.forEach((runLineWrapper) => {
  for (let i = 0; i < 2; i++) {
    const runItem = document.createElement("div");
    runItem.classList.add("run-item");
    runItem.innerHTML =
      "ДЕЛО ПОМОЩИ УТОПАЮЩИМ — ДЕЛО РУК САМИХ УТОПАЮЩИХ! • " +
      "ШАХМАТЫ ДВИГАЮТ ВПЕРЕД НЕ ТОЛЬКО КУЛЬТУРУ, НО И ЭКОНОМИКУ! • " +
      "ЛЕД ТРОНУЛСЯ, ГОСПОДА ПРИСЯЖНЫЕ ЗАСЕДАТЕЛИ! •&nbsp;";
    runLineWrapper.appendChild(runItem);
  }
});

function updateChessWrapperWidth() {
  const city = document.querySelector(".city");
  const chessWrapper = document.querySelector(".chess-wrapper");
  chessWrapper.style.width = `${city.offsetWidth / 2}px`;
  chessWrapper.style.height = `${city.offsetHeight * 1.2}px`;
}

function createSupportBlock() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const supportDiv = document.createElement("div");
  supportDiv.classList.add("support");

  const h2First = document.createElement("h2");
  h2First.innerHTML =
    "Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: <span>«Плодотворная дебютная идея»</span>";

  const img = document.createElement("img");
  img.src = "./source/chees-player.png";

  supportDiv.appendChild(h2First);
  supportDiv.appendChild(img);

  mainContent.appendChild(supportDiv);
}

function createMobileSupportBlock() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const supportDiv = document.createElement("div");
  supportDiv.classList.add("support");

  const h2First = document.createElement("h2");
  h2First.textContent = "Чтобы поддержать Международный васюкинский турнир";

  const img = document.createElement("img");
  img.src = "./source/chees-player.png";

  const h2Second = document.createElement("h2");
  h2Second.innerHTML =
    "посетите лекцию на тему: <span>«Плодотворная дебютная идея»</span>";

  supportDiv.appendChild(h2First);
  supportDiv.appendChild(img);
  supportDiv.appendChild(h2Second);

  mainContent.appendChild(supportDiv);
}

function createStagesBlock() {
  const cardStages = document.querySelector(".card-stages");
  cardStages.innerHTML = `
        <div class="card card-1">
            <div class="card-number">1</div>
            <div class="card-text">Строительство железнодорожной магистрали Москва-Васюки</div>
        </div>
        <div class="card card-2">
            <div class="card-number">2</div>
            <div class="card-text">
                Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов
            </div>
        </div>
        <div class="card card-3">
            <div class="card-number">3</div>
            <div class="card-text">
                Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет
            </div>
        </div>
        <div class="card card-4">
            <div class="card-number">4</div>
            <div class="card-text">Строительство дворца для турнира</div>
        </div>
        <div class="card card-5">
            <div class="card-number">5</div>
            <div class="card-text">Размещение гаражей для гостевого автотранспорта</div>
        </div>
        <div class="card card-6">
            <div class="card-number">6</div>
            <div class="card-text">
                Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов
            </div>
        </div>
        <div class="card card-7">
            <div class="card-number">7</div>
            <div class="card-text">
                Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн
            </div>
            <img src="./source/airplane.png">
        </div>
    `;
}
function createMobileStagesBlock() {
  const cardStages = document.querySelector(".card-stages");
  cardStages.innerHTML = `
        <img class="airplane" src="./source/airplane.png" />
        <div class="card card-1">
            <div class="card-row">
                <div class="card-number">1</div>
                <div class="card-text">Строительство железнодорожной магистрали Москва-Васюки</div>
            </div>
            <div class="card-row">
                <div class="card-number">2</div>
                <div class="card-text">
                    Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов
                </div>
            </div>
        </div>
        <div class="card card-2">
            <div class="card-row">
                <div class="card-number">3</div>
                <div class="card-text">
                    Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет
                </div>
            </div>
        </div>
        <div class="card card-3">
            <div class="card-row">
                <div class="card-number">4</div>
                <div class="card-text">Строительство дворца для турнира</div>
            </div>
            <div class="card-row">
                <div class="card-number">5</div>
                <div class="card-text">Размещение гаражей для гостевого автотранспорта</div>
            </div>
        </div>
        <div class="card card-4">
            <div class="card-row">
                <div class="card-number">6</div>
                <div class="card-text">
                    Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов
                </div>
            </div>
        </div>
        <div class="card card-5">
            <div class="card-row">
                <div class="card-number">7</div>
                <div class="card-text">
                    Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн
                </div>
            </div>
        </div>
    `;
}

const cardContainer = document.querySelector(".card-stages");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateDots();
  scrollCards(cardContainer.offsetWidth * -1);
  updateButtons();
});

nextButton.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, dots.length - 1);
  updateDots();
  scrollCards(cardContainer.offsetWidth);
  updateButtons();
});

function scrollCards(scrollAmount) {
  cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add("end");
  } else {
    prevButton.classList.remove("end");
  }

  if (currentIndex === dots.length - 1) {
    nextButton.classList.add("end");
  } else {
    nextButton.classList.remove("end");
  }
}


function createParticipantsBlock() {
  const participantsContent = document.querySelector(".participants-content");
  participantsContent.innerHTML = `
  <div class="text-wrap">
  <h1>Участники турнира</h1>
  <div class="navigation-participants">
    <button class="prev-button-part">
      <img src="./source/prev.svg" alt="" />
    </button>
    <p>3<span>/6</span></p>
    <button class="next-button-part">
      <img src="./source/next.svg" alt="" />
    </button>
  </div>
  </div>
  <div class="slider-container">
    <div class="slider"></div>
  </div>
  `;

  slider = document.querySelector(".slider");
  sliderContainer = document.querySelector(".slider-container");
  prevBtn = document.querySelector(".prev-button-part");
  nextBtn = document.querySelector(".next-button-part");
  participantsCounter = document.querySelector(
    ".navigation-participants p"
  );

  for (let i = 0; i < Math.ceil(participants.length / 3); i++) {
    const page = document.createElement("div");
    page.classList.add("page-participants");

    for (let j = 0; j < 3; j++) {
      const currentIndex = i * 3 + j;
      if (currentIndex >= participants.length) break; // Проверка выхода за границы массива

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = participants[currentIndex].imgSrc;
      card.appendChild(img);

      const fullName = document.createElement("p");
      fullName.classList.add("fullname");
      fullName.textContent = participants[currentIndex].fullName;
      card.appendChild(fullName);

      const position = document.createElement("p");
      position.classList.add("pos");
      position.textContent = participants[currentIndex].position;
      card.appendChild(position);

      const moreInfo = document.createElement("a");
      moreInfo.href = "#";
      moreInfo.classList.add("more-info");
      moreInfo.textContent = "Подробнее";
      card.appendChild(moreInfo);

      page.appendChild(card);
    }

    slider.appendChild(page);
  }

  participantsPerPage = 6/document.querySelectorAll('.page-participants').length;

  prevBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    currentPage =
      currentPage === 0 ? slider.children.length - 1 : currentPage - 1;
    updateSlider("right");
    updateParticipantsCounter();
    startSliderInterval();
  });
  
  nextBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    currentPage =
      currentPage === slider.children.length - 1 ? 0 : currentPage + 1;
    updateSlider("left");
    updateParticipantsCounter();
    startSliderInterval();
  });
}

function createMobileParticipantsBlock() {
  const participantsContent = document.querySelector(".participants-content");
  participantsContent.innerHTML = `
  <div class="text-wrap">
      <h1>Участники турнира</h1>
    </div>
    <div class="slider-container">
      <div class="slider"></div>
    </div>
    <div class="navigation-participants">
      <button class="prev-button-part">
        <img src="./source/prev.svg" alt="" />
      </button>
      <p>3<span>/6</span></p>
      <button class="next-button-part">
        <img src="./source/next.svg" alt="" />
      </button>
    </div>
  `;

  slider = document.querySelector(".slider");
  sliderContainer = document.querySelector(".slider-container");
  prevBtn = document.querySelector(".prev-button-part");
  nextBtn = document.querySelector(".next-button-part");
  participantsCounter = document.querySelector(
    ".navigation-participants p"
  );

  for (let i = 0; i < participants.length; i++) {
    const page = document.createElement("div");
    page.classList.add("page-participants");

    // Создаем карточку в каждом page-participants
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = participants[i % participants.length].imgSrc; // Используем остаток от деления для обращения к элементам массива
    card.appendChild(img);

    const fullName = document.createElement("p");
    fullName.classList.add("fullname");
    fullName.textContent = participants[i % participants.length].fullName;
    card.appendChild(fullName);

    const position = document.createElement("p");
    position.classList.add("pos");
    position.textContent = participants[i % participants.length].position;
    card.appendChild(position);

    const moreInfo = document.createElement("a");
    moreInfo.href = "#";
    moreInfo.classList.add("more-info");
    moreInfo.textContent = "Подробнее";
    card.appendChild(moreInfo);

    page.appendChild(card);
    slider.appendChild(page);
  }

  participantsPerPage = 6/document.querySelectorAll('.page-participants').length;

  prevBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    currentPage =
      currentPage === 0 ? slider.children.length - 1 : currentPage - 1;
    updateSlider("right");
    updateParticipantsCounter();
    startSliderInterval();
  });
  
  nextBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    currentPage =
      currentPage === slider.children.length - 1 ? 0 : currentPage + 1;
    updateSlider("left");
    updateParticipantsCounter();
    startSliderInterval();
  });
}


// updateParticipantsCounter();
// startSliderInterval();


function updateSlider(direction) {
  const newPosition =
    direction === "left"
      ? -currentPage * sliderContainer.offsetWidth
      : -(
          currentPage * sliderContainer.offsetWidth
        );
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(${newPosition}px)`;

  setTimeout(() => {
    slider.style.transition = "none";
  }, 500);
}

function updateParticipantsCounter() {
  const currentPageParticipants =
    currentPage === slider.children.length - 1
      ? totalParticipants
      : (currentPage + 1) * participantsPerPage;
  participantsCounter.textContent = `${currentPageParticipants}/${totalParticipants}`;
}

function startSliderInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentPage =
      currentPage === slider.children.length - 1 ? 0 : currentPage + 1;
    updateSlider("left");
    updateParticipantsCounter();
  }, 4000);
}

