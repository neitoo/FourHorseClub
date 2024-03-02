// Генерация элементов .run-item
const runLineWrapper = document.querySelector('.run-line-wrapper');
for (let i = 0; i < 2; i++) {
    const runItem = document.createElement('div');
    runItem.classList.add('run-item');
    runItem.innerHTML = 'ДЕЛО ПОМОЩИ УТОПАЮЩИМ — ДЕЛО РУК САМИХ УТОПАЮЩИХ! • ' +
                        'ШАХМАТЫ ДВИГАЮТ ВПЕРЕД НЕ ТОЛЬКО КУЛЬТУРУ, НО И ЭКОНОМИКУ! • ' +
                        'ЛЕД ТРОНУЛСЯ, ГОСПОДА ПРИСЯЖНЫЕ ЗАСЕДАТЕЛИ! •&nbsp;';
    runLineWrapper.appendChild(runItem);
}

// Обновление ширины элемента .chess-wrapper
function updateChessWrapperWidth() {
    const city = document.querySelector('.city');
    const chessWrapper = document.querySelector('.chess-wrapper');
    chessWrapper.style.width = `${city.offsetWidth / 2}px`;
    chessWrapper.style.height = `${city.offsetHeight * 1.2}px`;
}

// Создание блока поддержки в десктоп версии
function createSupportBlock() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const supportDiv = document.createElement('div');
    supportDiv.classList.add('support');

    const h2First = document.createElement('h2');
    h2First.innerHTML = 'Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: <span>«Плодотворная дебютная идея»</span>';

    const img = document.createElement('img');
    img.src = './source/chees-player.png';

    supportDiv.appendChild(h2First);
    supportDiv.appendChild(img);

    mainContent.appendChild(supportDiv);
}

// Создание блока поддержки в мобильной версии
function createMobileSupportBlock() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const supportDiv = document.createElement('div');
    supportDiv.classList.add('support');

    const h2First = document.createElement('h2');
    h2First.textContent = 'Чтобы поддержать Международный васюкинский турнир';

    const img = document.createElement('img');
    img.src = './source/chees-player.png';

    const h2Second = document.createElement('h2');
    h2Second.innerHTML = 'посетите лекцию на тему: <span>«Плодотворная дебютная идея»</span>';

    supportDiv.appendChild(h2First);
    supportDiv.appendChild(img);
    supportDiv.appendChild(h2Second);

    mainContent.appendChild(supportDiv);
}

function createStagesBlock(){
    const cardStages = document.querySelector('.card-stages');
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
function createMobileStagesBlock(){
    const cardStages = document.querySelector('.card-stages');
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

// Проверка ширины экрана и создание соответствующего блока поддержки
function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
        createSupportBlock();
        createStagesBlock();
    } else {
        createMobileSupportBlock();
        createMobileStagesBlock();
    }
}

const cardContainer = document.querySelector('.card-stages');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateDots();
    scrollCards(cardContainer.offsetWidth * -1);
    updateButtons();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, dots.length - 1);
    updateDots();
    scrollCards(cardContainer.offsetWidth);
    updateButtons();
});

function scrollCards(scrollAmount) {
    cardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateButtons() {
    if (currentIndex === 0) {
        prevButton.classList.add('end');
    } else {
        prevButton.classList.remove('end');
    }

    if (currentIndex === dots.length - 1) {
        nextButton.classList.add('end');
    } else {
        nextButton.classList.remove('end');
    }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    checkScreenWidth();
    updateChessWrapperWidth();
});

// Обработка изменений ширины экрана
window.addEventListener("resize", () => {
    checkScreenWidth();
    updateChessWrapperWidth();
});
