const profile = document.getElementsById("profile-pic")

function move() {
    const incrementer = window.scrollY

    profile.style.bottom = 50 + incrementer * 0.1 + '%'
}

window.addEventListener('scroll', move)