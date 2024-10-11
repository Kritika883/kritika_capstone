//Function to update the page title 

const setTitle = (newTitle) => {
    const titleElement = document.getElementById('page-title');
    titleElement.textContent = newTitle || 'Welcome to My Page';
};

//Function to update the description
const setDescription = (newDescription) => {
    const descriptionElement = document.getElementById('page-description');
    descriptionElement.textContent = newDescription || 'I am kiritika, here you can make changes.';
};

//Function to change the backgroundcolor
const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color || '';
};

//Function to change the font color

const setFontColor = (color) => {
    document.body.style.color = color || '';
};

// Function to set the theme (light or dark)
function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// For easy testing, you can expose the functions to the console
window.setTitle = setTitle;
window.setDescription = setDescription;
window.setBackgroundColor = setBackgroundColor;
window.setFontColor = setFontColor;
window.setTheme = setTheme;