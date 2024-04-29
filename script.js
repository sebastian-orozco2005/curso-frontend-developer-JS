const menu_mail = document.querySelector(".navbar-email");
const menu_unfolded = document.querySelector(".desktop-menu")

menu_mail.addEventListener('click',showContainer);

function showContainer(){
    console.log("executed");

    menu_unfolded.classList.toggle('inactive'); //El metodo toogle si esta clase la quita y si no esta la pone

    //Manera mas larga de realizar el mismpo proceso que hace el metodo toogle
    
    // if(menu_unfolded.classList.contains('inactive')){
    //     menu_unfolded.classList.remove('inactive');
    // }else{
    //     menu_unfolded.classList.add('inactive')
    // }
}