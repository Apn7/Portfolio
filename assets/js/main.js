
function showSidebar(){
    const sidebar =  document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}


function scrollHeader(){
    const header = document.getElementById( 'header' );
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener( 'scroll', scrollHeader);




// const navlink = document.querySelectorAll('.nav__link');

// function activeLink(){
//     navlink.forEach((a) => a.classList.remove('active-link'));
//     this.classList.add('active-link');
// }

// navlink.forEach((a)=> a.addEventListener( 'click', activeLink));

