// Версия 2. С использованием класса

class ThemeSwitcher {
  /**
 * Ожидает следующие параметры:
 * switchSelector - Селектор переключателя (чекбокс)
 * localStorageKey = 'Theme' - ключ, по которому значение будет записано в localStorage
 * objectOfThems = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
    } - обьект с названием классов темы, ОБЬЯЗАТЕЛЬНО должен быть ключ LIGHT, DARK
 */
  constructor(
    switchSelector,
    localStorageKey = 'Theme',
    objectOfThems = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
    },
  ) {
    this._selector = switchSelector;
    this._lsKey = localStorageKey;
    this._Theme = objectOfThems;

    this._init();
  }
  _init() {
    this.getThemeFromLocalStorage();
    this._selector.addEventListener('change', this.setTheme.bind(this));
  }

  setTheme() {
    const bodyClassList = document.body.classList;

    // Определение активного класса по чекбоксу
    const activeTheme = this._selector.checked
      ? this._Theme.DARK
      : this._Theme.LIGHT;

    // Удаление неподходящих классов
    for (const el of Object.values(this._Theme)) {
      if (bodyClassList.contains(el)) {
        bodyClassList.remove(el);
      }
    }

    // Установить нужный класс как активный
    bodyClassList.add(activeTheme);
    localStorage.setItem(this._lsKey, activeTheme);
  }

  getThemeFromLocalStorage() {
    const localStorageTheme = localStorage.getItem(this._lsKey);

    if (localStorageTheme === this._Theme.DARK) {
      this._selector.checked = true;
      this.setTheme();
    }
  }
}

export default ThemeSwitcher;

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================

// Версия 1. Без использования класса
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const setTheme = () => {
//   const bodyClassList = document.body.classList;

//   // Определение активного класса по чекбоксу
//   const activeTheme = themeSwitchedRef.checked ? Theme.DARK : Theme.LIGHT;

//   // Удаление неподходящих классов
//   for (const el of Object.values(Theme)) {
//     if (bodyClassList.contains(el)) {
//       bodyClassList.remove(el);
//     }
//   }

//   // Установить нужный класс как активный
//   bodyClassList.add(activeTheme);
//   localStorage.setItem('Theme', activeTheme);
// };

// const getThemeFromLocalStorage = () => {
//   const localStorageTheme = localStorage.getItem('Theme');

//   if (localStorageTheme === Theme.DARK) {
//     themeSwitchedRef.checked = true;
//     setTheme();
//   }
// };
// getThemeFromLocalStorage();

// themeSwitchedRef.addEventListener('change', setTheme);
