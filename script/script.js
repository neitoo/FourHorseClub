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

// Проверка ширины экрана и создание соответствующего блока поддержки
function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
        createSupportBlock();
    } else {
        createMobileSupportBlock();
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
