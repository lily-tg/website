const themeSwitcher = document.querySelector('#theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

const handleThemeSelection = (event) => {
    const target = event.target;
    const theme = target.getAttribute('data-theme');
    const isPressed = target.getAttribute('aria-pressed');
    document.documentElement.setAttribute("data-selected-theme", theme);

    const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
    previouslyPressedButton.setAttribute('aria-pressed', false);
    target.setAttribute('aria-pressed', 'true');

    localStorage.setItem('selected-theme', theme);
}

buttons.forEach((button) => {
   button.addEventListener('click', handleThemeSelection);
});




const savedTheme = localStorage.getItem('selected-theme');
const defaultTheme = "purple";

if (savedTheme && savedTheme !== defaultTheme) {
    const prevBtn = document.querySelector('[data-theme][aria-pressed="true"]');
    prevBtn.setAttribute('aria-pressed', false);

    document.querySelector(`[data-theme="${savedTheme}"]`).setAttribute('aria-pressed', true);

    document.documentElement.setAttribute("data-selected-theme", savedTheme);
}