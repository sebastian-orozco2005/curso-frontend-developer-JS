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

const product_list = []

product_list.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
product_list.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
product_list.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
product_list.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
product_list.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
product_list.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
product_list.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
product_list.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
product_list.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

product_list.forEach(product => {
    
    const htmlCards = `
    <div class="product-card">
    <img src="${product.image}" alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    </div>
    `;

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML += htmlCards;
});

