const runLineWrapper = document.querySelector('.run-line-wrapper');

// Генерируем два элемента .run-item
for (let i = 0; i < 2; i++) {
    const runItem = document.createElement('div');
    runItem.classList.add('run-item');
    runItem.innerHTML = 'ДЕЛО ПОМОЩИ УТОПАЮЩИМ — ДЕЛО РУК САМИХ УТОПАЮЩИХ! • ' +
                        'ШАХМАТЫ ДВИГАЮТ ВПЕРЕД НЕ ТОЛЬКО КУЛЬТУРУ, НО И ЭКОНОМИКУ! • ' +
                        'ЛЕД ТРОНУЛСЯ, ГОСПОДА ПРИСЯЖНЫЕ ЗАСЕДАТЕЛИ! •&nbsp;';
    runLineWrapper.appendChild(runItem);
}

function updateChessWrapperWidth() {
    var city = document.querySelector('.city');

    var chessWrapper = document.querySelector('.chess-wrapper');
    chessWrapper.style.width = (city.offsetWidth / 2) + "px";
    chessWrapper.style.height = (city.offsetHeight * 1.2) + "px";
    console.log(city.offsetHeight)
}

document.addEventListener("DOMContentLoaded", updateChessWrapperWidth);

window.addEventListener("resize", updateChessWrapperWidth);