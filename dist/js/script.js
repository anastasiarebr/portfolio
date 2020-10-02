const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});




const percents = document.querySelectorAll('.skills__percent-title span'),
      lines = document.querySelectorAll('.skills__percent-line-change');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
}); 


$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    menu.classList.remove('active');
    return false;
    });
    });