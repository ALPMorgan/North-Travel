
// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();

/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

/* Спойллер */
flsFunctions.spollers();

/* Работа с формами */
import * as flsForms from "./files/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
flsForms.formSubmit(true);

//========================================================================================================================================================================================================================================================

/* Параллакс */
import './files/parallax.js'

/* Работа со слайдером (Swiper) */
import "./files/sliders.js";

/* Динамический адаптив */
import "./files/dynamic_adapt.js";

/* Подключаем файлы со своим кодом */
import "./files/script.js";
