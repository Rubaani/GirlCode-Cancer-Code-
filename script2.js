const mainMenu = document.querySelector('.navbar-collapse');
const openMenu = document.querySelector('.navbar-toggler');
const closeMenu=document.querySelector('.navbar-collapse');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show()
{
    mainMenu.style.display = 'flex';
    mainMenu.style.top='0';
}

function close()
{
    mainMenu.style.top='-100%';
}
