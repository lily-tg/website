/* Default settings */
const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'purple';

/* Changing the theme */
const applyTheme = (theme) => {
  const target = document.querySelector(`[data-theme="${theme}"]`);
  document.documentElement.setAttribute("data-selected-theme", theme);
  document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
  target.setAttribute('aria-pressed', 'true');
};


/* Logs the clicked button */
const handleThemeSelection = (event) => {
    const target = event.target;
    const isPressed = target.getAttribute('aria-pressed');
    const theme = target.getAttribute('data-theme');        
  
    if(isPressed !== "true") {
        applyTheme(theme);
        localStorage.setItem('selected-theme', theme);
  }
}

/* Set initial theme */
const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('selected-theme');
    if(savedTheme && savedTheme !== defaultTheme) {
        applyTheme(savedTheme);
    }
};

setInitialTheme();

/* Selects all buttons */
const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

/* Adds the handleThemeSelection as a click handler to each of the buttons */
buttons.forEach((button) => {
   button.addEventListener('click', handleThemeSelection);
});