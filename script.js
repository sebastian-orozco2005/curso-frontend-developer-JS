const menu_mail = document.querySelector(".navbar-email");
const menu_unfolded = document.querySelector(".desktop-menu");
const menu_mobile_button = document.querySelector(".menu");
const menu_mobile = document.querySelector(".mobile-menu")

menu_mail.addEventListener('click',function(){showContainer(menu_unfolded)});
menu_mobile_button.addEventListener('click',function(){showContainer(menu_mobile)});

function showContainer(container){
    console.log("executed");
    container.classList.toggle('inactive'); //El metodo toogle si esta clase la quita y si no esta la pone

    //Manera mas larga de realizar el mismpo proceso que hace el metodo toogle
    
    // if(menu_unfolded.classList.contains('inactive')){
    //     menu_unfolded.classList.remove('inactive');
    // }else{
    //     menu_unfolded.classList.add('inactive')
    // }
}