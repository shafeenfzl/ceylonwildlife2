/// Script for sticky header. And mobile menu ///

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a').forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === activePage && !link.parentElement.classList.contains('dropdown-link')) {
            link.classList.add('active');
        } else if (linkPath !== activePage) {
            link.classList.remove('active');
        }
    });
});



/// Login Scripts ///

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let users = data.users;
            let authenticatedUser = users.find(user => user.username === username && user.password === password);
            if (authenticatedUser) {
                localStorage.setItem('loggedIn', 'true');
                if (authenticatedUser.role === 'admin') {
                    window.location.href = 'dashboard.html'; 
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                alert('CeylonWildlife: The username or password you entered is incorrect. Please try again with the correct credentials.');
            }
        })
        .catch(error => {
            console.error('CeylonWildlife: JSON Data File Not Found', error);
            alert('CeylonWildlife: Please run the file in a live server.');
        });
});










