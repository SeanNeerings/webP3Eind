window.onload = function() {
    const footer = document.getElementById('copyright');
    const date = new Date();
    let currentYear = date.getFullYear();
    
    footer.innerHTML = '&copy; ' + currentYear + ' - Sean Neerings';
};

function toggleHamburger() {
    let links = document.getElementById('links');

    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
};