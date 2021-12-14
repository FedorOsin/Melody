$(document).ready(function () {
    let currentFloor = 2; // переменная, где хранится текущий этаж
    const floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    const counterUp = $(".counter-arrow-up"); // кнопка увеличения этажа
    const counterDown = $(".counter-arrow-down"); // кнопка уменьшения этажа
    const modal = $(".modal");
    const modalCloseButton = $(".modal-close-button")
    const viewFlatsButton = $(".view-flats");

    // функция при наведении мышкой на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal); /* при клике на этаж, вызвать окно */
    modalCloseButton.on("click", toggleModal); /* при клике на крестик закрыть окно */
    viewFlatsButton.on("click", toggleModal);

    counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
        if ( currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    function toggleModal () { // функция отрыкть-закрыть окно
        modal.toggleClass("is-open");
    };
});