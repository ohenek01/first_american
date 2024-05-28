/*const activePage = window.location.pathname;
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const navLinks = document.querySelectorAll('.navigations a').

forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
        console.log(link)
    }
    else if(link.href.toLowerCase().includes("pain", "neuro", "amb")){
        link.classList.add('active');
        console.log(link)
    }
})*/

const activePage = window.location.pathname;
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const navLinks = document.querySelectorAll('.navigations a');

// Add event listener to dropdown links
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from all nav links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add the 'active' class to the clicked dropdown link and its parent nav link
        link.classList.add('active');
        link.closest('.dropdown').querySelector('a').classList.add('active');
    });
});

// Add the 'active' class to the current page link and any links that match 'pain', 'neuro', or 'amb'
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});

