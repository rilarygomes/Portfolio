const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function mOver(obj)
{
    obj.querySelector('img').src = 'img/img04.png';
}

function mOut(obj)
{
    obj.querySelector('img').src = 'img/img02.png';
}