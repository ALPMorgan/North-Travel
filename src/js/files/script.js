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

// initImg('#cover__image-ibg img', [
//    document.getElementById("myImage"),
//    document.getElementById("myImage"),
//    document.getElementById("myImage"),
//    // 'src/img/home/cover/01.png',
//    // 'src/img/home/cover/02.png',
//    // 'src/img/home/cover/03.png',
//    // 'src/img/home/cover/04.png',
//    // 'src/img/home/cover/05.png'
// ])
// function initImg(selector, srcArr) {
//    const img = document.querySelector(selector);
//    Object.assign(img, {
//       buf: Object.assign(new Image(), { img }),
//       srcArr: [...srcArr],
//       changeInterval: 5e3,
//       bufIdx: 0,
//       change: function () {
//          this.style.animationName = 'img-in';
//          this.src = this.buf.src || this.nextImage();
//          this.buf.src = this.nextImage();
//       },
//       nextImage: function () {
//          this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
//          return this.srcArr[this.bufIdx];
//       }
//    });
//    img.buf.addEventListener('load', loadHandler);
//    img.addEventListener('animationend', animEndHandler);
//    img.change();
//    return img;

//    function loadHandler() {
//       setTimeout(
//          () => this.img.style.animationName = 'img-out',
//          this.img.changeInterval
//       );
//    }
//    function animEndHandler({ animationName }) {
//       if (animationName === 'img-out')
//          this.change();
//    }
// }


// var image_count = 5;
// var interval = 5000; //пауза
// var time_out = 15; //скорость смены картинки
// var i = 5;
// var timeout;
// var opacity = 100;
// function change_image() {
//    opacity--;
//    var j = i + 1;
//    var current_image = 'img_' + i;
//    if (i == image_count) j = 1;
//    var next_image = 'img_' + j;
//    document.getElementById(current_image).style.opacity = opacity / 100;
//    document.getElementById(current_image).style.filter = 'alpha(opacity=' + opacity + ')';
//    document.getElementById(next_image).style.opacity = (100 - opacity) / 100;
//    document.getElementById(next_image).style.filter = ' alpha(opacity=' + (100 - opacity) + ')';
//    timeout = setTimeout("change_image()", time_out);
//    if (opacity == 1) {
//       opacity = 100;
//       clearTimeout(timeout);
//       i++;
//       if (i > image_count) i = 1;
//       timeout = setTimeout("change_image()", interval);
//    }
// }
// change_image()


