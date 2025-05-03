// link href
function instagramLink() {
    window.location.href = 'https://www.instagram.com/fannvann_/?hl=en'
}

// Dark mode
const iconMode = document.getElementById('icon-mode')
const button = document.querySelectorAll('.readMoreBtn')

iconMode.addEventListener('click', () => {
    iconMode.classList.toggle('btn-active')
    document.body.classList.toggle('dark-mode')

    for (let i = 0; i < button.length; i++) {
        button[i].classList.toggle('activeColorBtn')
    }
})



// Navbar Mobile
const navBarBtn = document.getElementById('navbar-btn')
const navSpan = navBarBtn.querySelectorAll('span')
const navbar = document.querySelector('#navbar')

navBarBtn.addEventListener('click', function (e) {
    for (let i = 0; i < navSpan.length; i++) {
        navSpan[i].classList.toggle('on')
    }

    navbar.classList.toggle('hidden')
})