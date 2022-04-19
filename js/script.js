
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true
});


  //  Работа стрелки
  
  // Собираем все стрелки с таким классом
  let menuArrows = document.querySelectorAll('.menu__arrow');
  // Проверяем, есть ли такие ребята в массиве
  if(menuArrows.length > 0) {
    // Запускаем цикл, если находим
    for (let index = 0; index < menuArrows.length; index++) {
      // создаем константу для наших стрелок
      const menuArrow = menuArrows[index];
      // далее будем навешивать событие "клик"
      menuArrow.addEventListener("click", function(e) {
        //активируем у её родителя
        menuArrow.parentElement.classList.toggle('_active');
      });
    } 
  }


// Меню бургер

// Получаем нашу иконку бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
// проверка на наличие такого класса
if (iconMenu) {
  // клик по иконке
  iconMenu.addEventListener("click", function(e) {
    // чтобы нельзя было скроллить страницу при открытом меню 1
    // обращаемся к иконке и меню 2,3
    document.body.classList.toggle('._lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
  
}


// function initMap() {
//   var coordinates = {lat:48.85837, lng:2.294481},
  
//       map = new google.maps.Map(document.getElementById('map'), {
//           center: coordinates
//       });
// }


