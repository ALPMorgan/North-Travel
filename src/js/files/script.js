// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//===============================================================================

// Анимация при прокрутке

/*
У каждого объекта, у которого есть класс ._anim-items при достижении скроллом 1/4 его высоты,
либо 1/4 высоты окна браузера, если высота объекта больше чем окно браузера, ему добавляется класс _active,
если до него не окрутили или уже перекрутили - класс _active у него отбирается.
*/

const animItems = document.querySelectorAll('._anim-items');

// Проверяем длинну массива, если больше нуля, то объекты есть
if (animItems.length > 0) {
   if (window.innerWidth >= 960) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]; // получаем переменную animItem каждой из элементов массива
            const animItemHeight = animItem.offsetHeight; // получаем высоту объекта
            const animItemOffset = offset(animItem).top; // получаем позицию объекта относительно верха, насколько объект находится ниже верха страницы
            const animStart = 4; // коэффициент, который регулирует момент старта анимации

            // Настройка момента старта анимации
            let animItemPoint = window.innerHeight - animItemHeight / animStart; // высота окна браузера - высота объекта анимирующевося / коэффициент

            // Если объект выше по высоте окна браузера
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart; // высота окна браузера - высота окна браузера / коэффициент
            }

            // Добавляем класс при определенных условиях
            // Если мы прокрутили больше, чем позиция объекта минус точка старта, но при этом прокрутили меньше, чем позиция объекта плюс его высота
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active'); // добавляем к объекту класс
            } else {
               if (!animItem.classList.contains('_anim-no-hide')) { //отменяет повторный скролл
                  animItem.classList.remove('_active'); //если условие не выполняется - убираем класс
               }
            }
         }
      }

      // Объявляем функцию сразу, для того, чтобы сработала анимация на обложке при первой загрузке
      setTimeout(() => {
         animOnScroll();
      }, 1000);
   }

   // Функция позволяет получать значение высоты объекта, который находится ниже верха страницы
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
}

//==============================================================================================

// //Недоработанный код фиксации элементов

// /**
//  *
//  * @param {Number} ratio Коэффициент, который регулирует момент старта анимации
//  * @param {String} selector Селектор, класс
//  */
// function customPallarax(ratio = 1, selector) {
//    const fixedItems = document.querySelectorAll(selector);

//    if (fixedItems.length > 0) { // Проверяем длину массива, если больше нуля, то объекты есть
//       if (window.innerWidth >= 960) {
//          window.addEventListener('scroll', fixedOnScroll);
//          function fixedOnScroll() {
//             for (let index = 0; index < fixedItems.length; index++) {
//                const fixedItem = fixedItems[index]; // получаем переменную animItem каждой из элементов массива
//                const fixedItemHeight = fixedItem.offsetHeight; // получаем высоту объекта
//                const fixedItemOffset = offset(fixedItem).top; // получаем позицию объекта относительно верха, насколько объект находится ниже верха страницы

//                // Настройка момента старта анимации
//                let fixedItemPoint = window.innerHeight - fixedItemHeight / ratio; // высота окна браузера - высота объекта анимирующевося / коэффициент

//                // Если объект выше по высоте окна браузера
//                if (fixedItemHeight > window.innerHeight) {
//                   fixedItemPoint = window.innerHeight - window.innerHeight / ratio; // высота окна браузера - высота окна браузера / коэффициент
//                }

//                // Добавляем класс при определенных условиях
//                // Если мы прокрутили больше, чем позиция объекта минус точка старта, но при этом прокрутили меньше, чем позиция объекта плюс его высота
//                if ((pageYOffset > fixedItemOffset - fixedItemPoint) && pageYOffset < (fixedItemOffset + fixedItemHeight)) {
//                   fixedItem.classList.add('_active-fixed'); // добавляем к объекту класс
//                } else {
//                   if (!fixedItem.classList.contains('_fixed-no-hide')) { //отменяет повторный скролл
//                      fixedItem.classList.remove('_active'); //если условие не выполняется - убираем класс
//                   }
//                }
//             }
//          }

//          // Объявляем функцию сразу, для того, чтобы сработала анимация на обложке при первой загрузке
//          setTimeout(() => {
//             fixedOnScroll();
//          }, 1000);
//       }

//       // Функция позволяет получать значение высоты объекта, который находится ниже верха страницы
//       function offset(el) {
//          const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//       }
//    }
// }


// customPallarax(1, '._fixed-about')
// customPallarax(1, '._fixed-traveling')

