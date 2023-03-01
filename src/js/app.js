// Импорты
import * as flsFunctions from "./modules/webp/index.js";
import { isTouch } from "./modules/isMobile/index.js";


// Проверка поддержки webp у браузера
flsFunctions.isWebp();

// Провека на мобилку
isTouch();