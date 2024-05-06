const menu_mail_button = document.querySelector(".navbar-email");
const menu_unfolded = document.querySelector(".desktop-menu");
const menu_mobile_button = document.querySelector(".menu");
const menu_mobile = document.querySelector(".mobile-menu");
const menu_carrito_button = document.querySelector(".navbar-shopping-cart");
const menu_carrito = document.querySelector(".product-detail")

menu_mail_button.addEventListener('click',function(){showContainer(menu_unfolded)});
menu_mobile_button.addEventListener('click',function(){showContainer(menu_mobile)});
menu_carrito_button.addEventListener('click',function(){showContainer(menu_carrito)});

elements_showed = [];

function showContainer(container){
    console.log("executed");
    elements_showed.forEach(element_showed => {
        if(element_showed.classList[0] == container.classList[0]){
            //No hacer nada si valida esto
        }else{
            element_showed.classList.add('inactive')
        }
    });
    container.classList.toggle('inactive'); //El metodo toogle si esta clase la quita y si no esta la pone

    if(!container.classList.contains('inactive')){
        elements_showed.push(container);
    }
    console.log(elements_showed);
    //Manera mas larga de realizar el mismpo proceso que hace el metodo toogle
    
    // if(menu_unfolded.classList.contains('inactive')){
    //     menu_unfolded.classList.remove('inactive');
    // }else{
    //     menu_unfolded.classList.add('inactive')
    // }
}