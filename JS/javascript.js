
//construktor za produkti
productsMenuList = [];
function Product (productName,productType,price,ingredients,imgSrc) {
    this.productName = productName;
    this.productType = productType;
    this.price = price;
    this.ingredients = ingredients;
    this.imgSrc = imgSrc;
    productsMenuList.push(this);
}


// flag za tova dali ima lognat user
var loggedInUser = false;
var userList = []; // spissuk s registrirani useri
// konstruckiq na produkti
var product1 = new Product("МЕДИТЕРАНЕО","pizza",11.5,"Доматен сос, Краве сирене, Моцарела, Пресни зелени чушки, Пресни домати, Черни маслини","https://www.dominos.bg/gallery/fmobile/1290medium.png");
var product2 = new Product("АЛФРЕДО","pizza",12,"Сметана, Моцарела, Пиле, Бейби Спанак","https://www.dominos.bg/gallery/fmobile/1291medium.png");
var product3 = new Product("ВИТА","pizza",13,"Доматен сос, Моцарела, Краве сирене, Пресни домати, Бейби Спанак","https://www.dominos.bg/gallery/fmobile/1292medium.png");
var product4 = new Product("ДОМИНОС","pizza",15.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1293medium.png");
var product5 = new Product("КАРБОНАРА","pizza",12.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1295medium.png");
var product6 = new Product("КАПРИЧОЗА","pizza",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1296medium.png");
var product7 = new Product("КАЛЦОНЕ","pizza",22.5,"Доматен сос, Моцарела,  Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1297medium.png");
var product8 = new Product("ЧЕТИРИ СЕЗОНА","pizza",14.5,"Доматен сос, Extra Моцарела, Extra Пеперони","https://www.dominos.bg/gallery/fmobile/1298medium.png");
var product9 = new Product("КАПОНЕ","pizza",12.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1299medium.png");
var product10 = new Product("КАПРИ","pizza",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1300medium.png");
var product11 = new Product("МИЛАНО","pasta",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1242ipar.png");
var product12 = new Product("НАПОЛИТАНА","pasta",6.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1243ipar.png");
var product14 = new Product("ПАСТА ПИПЕРОНИ","pasta",7.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/843ipar.png");
var product17 = new Product("САЛАТА РОКА","salad",7.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https:////www.dominos.bg/gallery/fmobile/1325ipar.png");
var product18 = new Product("САЛАТА ТРИКОЛОРЕ","salad",7.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https:////www.dominos.bg/gallery/fmobile/1368ipar.png");
var product19= new Product("САЛАТА ЦЕЗАР","salad",7.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https:////www.dominos.bg/gallery/fmobile/1307ipar.png");
var product20 = new Product("САЛАТА РИБА ТОН","salad",7.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https:////www.dominos.bg/gallery/fmobile/1328ipar.png");
var product21 = new Product("COCA COLA","drinks",1.5,"","images/cocacola.png");
var product22 = new Product("SPRITE","drinks",1.5,"","images/sprite.gif");
var product24 = new Product("PEPSI","drinks",2.5,"","images/zagorka.png");
var product26 = new Product("ЧОКО","desert",7.5,"Пухкав десерт с пълнеж NUTELLA, прясно изпечен на фурна и поръсен с пудра захар","https://www.dominos.bg/gallery/fmobile/1204ipar.png");
var product27 = new Product("ШОКОЛАДОВО СУФЛЕ","desert",5.5,"Топло шоколадово кексче с пълнеж от разтопен шоколад","https://www.dominos.bg/gallery/fmobile/1228ipar.png");
var product29 = new Product("СЛАДОЛЕД","desert",4.5," 12 пухкави мини палачинки с парченца шоколад, поръсени с пудра захар","https://www.dominos.bg/gallery/fmobile/1336ipar.png");
var product27 = new Product("САНДВИЧ ПЕПЕРОНИ","sandwich",4.5," дом. сос, ементал, сирене Филаделфия, пеперони","https:////www.dominos.bg/gallery/fmobile/1472ipar.png");
var product28= new Product("САНДВИЧ ПИЛЕ","sandwich",5.5,"сос барбекю, ементал, пилешко филе, бекон","https:////www.dominos.bg/gallery/fmobile/1471ipar.png");
var product29 = new Product("САНДВИЧ МЕДИТЕРАНЕО","sandwich",6.5,"ранч сос, ементал, бяло сирене, домати, маслини, зелени чушки","https://///www.dominos.bg/gallery/fmobile/1470ipar.png");



var menuButtons = document.querySelectorAll("#menuPageHeader nav button,#menuPageHeader nav img");

// konstrukciq na galeriq produkti i butoni ot menuto na produktite
for (var index=0;index<productsMenuList.length;index++) {
        var productDiv =  document.createElement("div");
        productDiv.className = "productDiv";
        productDiv.id = "productDivId";
        productDiv.id = productsMenuList[index].productName;
        var imageDiv = document.createElement("div");
        productDiv.appendChild(imageDiv);
        imageDiv.className = "imageDiv";
        var img = document.createElement("img");
        img.src = productsMenuList[index].imgSrc;
        imageDiv.appendChild(img);
        var text = document.createTextNode(productsMenuList[index].productName);
        var heading =  document.createElement("h1");
        productDiv.appendChild(heading); 
        heading.appendChild(text);
        heading.className = "heading";
        heading.style.left = "10px";
        productDiv.appendChild(document.createElement("hr"));
        var ingredientsDiv = document.createElement("div");
        productDiv.appendChild(ingredientsDiv);
        var ingredientsText = document.createTextNode(productsMenuList[index].ingredients);
        var ingredients = document.createElement("p");
        ingredientsDiv.className = "ingredientsDiv";
        ingredientsDiv.appendChild(ingredients);     
        ingredients.appendChild(ingredientsText);
        var button = document.createElement("button");
        button.product = productsMenuList[index];
        button.onclick = function() {
            currentUser.cart.push(this.product);
            console.log("bauuu");
        }
        button.className = "BuyThis";
        button.innerHTML = "ПОРЪЧАЙ";
        productDiv.appendChild(button);
          
        if(productsMenuList[index].productType === "pizza") {
                document.getElementById("pizzaGallery").appendChild(productDiv);

        }
        if(productsMenuList[index].productType === "pasta")  {
                document.getElementById("pastaGallery").appendChild(productDiv);
        }          
        if(productsMenuList[index].productType === "sandwich")  {
                document.getElementById("sandwichGallery").appendChild(productDiv);                     
        }
        if(productsMenuList[index].productType === "salad")  {
                document.getElementById("saladGallery").appendChild(productDiv);                     
        }
        if(productsMenuList[index].productType === "desert")  {
                document.getElementById("desertGallery").appendChild(productDiv);                     
        }
        if(productsMenuList[index].productType === "drinks")  {
                document.getElementById("drinksGallery").appendChild(productDiv);                     
        }
    }
 

// konstrukciq i vrazvane na izobrajeniqta na produktite s indivudalnite golemi divove za produkt
var productDivList = document.getElementsByClassName("productDiv");
Array.prototype.forEach.call(productDivList,function (element) {
        element.addEventListener("click", function (event) {  
        var bigProductDiv = document.createElement("div");
        bigProductDiv.id = "bigProductDiv";
        document.body.appendChild(bigProductDiv);
        document.getElementById("gallery").style.display = "none";
        bigProductDiv.style.display = "block";
        bigProductDiv.appendChild(document.getElementById("close"));
        document.getElementById("close").onclick = function () {
                bigProductDiv.style.display = "none";
                document.getElementById("gallery").style.display = "unset";
                document.getElementById("menuPageHeader").style.display = "unset";
        }
        document.getElementById("menuPageHeader").style.display = "none";
        for (var index=0;index<productsMenuList.length;index++) {                       // tuk e po-dobre da se napravi s documentFragment
                if(element.id === productsMenuList[index].productName) {                // za da se izbegne reflow i repaint 
                        var img = document.createElement("img");
                        img.className = "bigProductPic";
                        img.src = productsMenuList[index].imgSrc;
                        bigProductDiv.appendChild(img);
                        var pizzaName = document.createElement("h1");
                        pizzaName.className = "pizzaName";
                        bigProductDiv.appendChild(pizzaName);
                        pizzaName.innerText = productsMenuList[index].productName;


                        //izbor na razmer
                        if (productsMenuList[index].productType==="pizza") {
                                var sizeSelect = document.createElement("select");
                                sizeSelect.className = "sizeSelect";
                                bigProductDiv.appendChild(sizeSelect);
                                var option1 = document.createElement("option");
                                var option2 = document.createElement("option");
                                var option3 = document.createElement("option");
                                var option4 = document.createElement("option");
                                option1.text = "ИЗБЕРЕТЕ РАЗМЕР";
                                option2.text = "Средна (6 парчета)";
                                option3.text = "Голяма (8 парчета)";
                                option4.text = "Джъмбо (12 парчета)";
                                sizeSelect.add(option1);
                                sizeSelect.add(option2);
                                sizeSelect.add(option3);
                                sizeSelect.add(option4);

                                
                                //izbor na testo
                                var doughSelect = document.createElement("select");
                                doughSelect.className = "doughSelect";
                                bigProductDiv.appendChild(doughSelect);
                                var optionDough1 = document.createElement("option");
                                var optionDough2 = document.createElement("option");
                                var optionDough3 = document.createElement("option");
                                var optionDough4 = document.createElement("option");
                                optionDough1.text = "ИЗБЕРЕТЕ ТЕСТО";
                                optionDough2.text = "Традиционно";
                                optionDough3.text = "Италиански стил";
                                optionDough4.text = "Тънко и хрупкаво";
                                doughSelect.add(optionDough1);
                                doughSelect.add(optionDough2);
                                doughSelect.add(optionDough3);
                                doughSelect.add(optionDough4);
                        }
                        //Sustavki
                        var ingredients = document.createElement("p");
                        ingredients.className = "ingredients";
                        bigProductDiv.appendChild(ingredients);
                        ingredients.innerText = "СЪСТАВКИ : "  + productsMenuList[index].ingredients;
                        
                        // broi 
                        var range = document.createElement("input");
                        range.className= "range";
                        range.setAttribute("type", "number");
                        range.value = 1.00;
                        range.step = 1.00;
                        range.min = 1.00;
                        var number = document.createElement("p");
                        number.innerText = "КОЛИЧЕСТВО: " + range.value;
                       var priceSupportVariable = productsMenuList[index].price.toFixed(2);
                     
                        bigProductDiv.appendChild(number);
                        bigProductDiv.appendChild(range);

                        // cena 
                        var currentPrice = 0;
                        var price = document.createElement("p");
                        bigProductDiv.appendChild(price);
                        price.className = "price";
                        price.innerText = "ЦЕНА: " + priceSupportVariable + "лв.";
                        currentPrice = priceSupportVariable ;
                        if (productsMenuList[index].productType!=="pizza") {
                                 range.onchange = function () {
                                        number.innerText = "КОЛИЧЕСТВО: " + range.value;
                                        price.innerText = currentPrice*range.value + " лв.";   
                                }                              
                         }
                        if (productsMenuList[index].productType==="pizza") {
                        sizeSelect.onchange = function () {
                                if (sizeSelect.value === option2.value) {
                                        
                                        price.innerText = currentPrice*range.value  + " лв.";  
                                 }  
                                if (sizeSelect.value === option3.value  ) {
                                        currentPrice =  parseInt(priceSupportVariable) + 2.5;
                                        price.innerText = currentPrice*range.value + " лв.";  
                                }
                                if (sizeSelect.value === option4.value) {
                                        currentPrice =  parseInt(priceSupportVariable) + 4.5;
                                        price.innerText =currentPrice*range.value + " лв.";  
                                }    
                                range.onchange = function () {
                                        number.innerText = "КОЛИЧЕСТВО: " + range.value;
                                        price.innerText = currentPrice*range.value + " лв.";   
                                }                                                                                     
                        }    
                        }
                      
                                                                   
                        //button porachai --tova buta v  KOLICHKATA .
                        var buttonOrderFinal = document.createElement("button");
                        buttonOrderFinal.innerHTML = "ПОРЪЧАЙ";
                        bigProductDiv.appendChild(buttonOrderFinal);
                        buttonOrderFinal.className = "buttonOrderFinal";
                        currentProduct = productsMenuList[index];
                        buttonOrderFinal.onclick = function () {
                                if(!loggedInUser) {
                                        document.getElementById("popUp").style.display = "block";
                                }
                                else {
                        currentUser.cart.push(currentProduct);
                        console.log(currentUser);
                        currentProduct.quantity = parseInt(number.innerText.slice(12)) ;
                        console.log(currentProduct.quantity);
                        document.getElementById("welcomeMessage").style.display = "block";
                        document.querySelector("#welcomeMessage h1").innerHTML = "Този продукт беше добавен към вашата количка!" ; 
                                }
                        }
                                  
                }
        }
       
        },false)
})

// back button
document.getElementById("back").onclick = function () {      
        document.getElementById("bigProductDiv").style.display ="none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("landingPage").style.display = "unset";
        document.getElementById("menuPageHeader").style.display = "none";   // neshto ne se poluchava       
}


// metod za skrivane na ostanalite menuta pri klik na konkretno menu
var galleriesIconList = document.querySelectorAll("#gallery>div");
var menuButtonsList = document.querySelectorAll(".buttons");
Array.prototype.forEach.call(menuButtonsList, function (element){
        element.addEventListener("click",function (event) {
        for (var index=0; index<galleriesIconList.length;index++) {
                if (element.id + "Gallery" == galleriesIconList[index].id) {
                        galleriesIconList[index].style.display = "flex";
                }
                else {
                        galleriesIconList[index].style.display = "none";
                }
        } 
 },false)});
        
//// metod za skrivane na ostanalite menuta pri klik na konkretno menu  (malki ikoni)      
var menuSmallButtonsList = document.querySelectorAll("#menuImages img");
Array.prototype.forEach.call(menuSmallButtonsList, function (element){
        element.addEventListener("click",function (event) {
        for (var index=0; index<galleriesIconList.length;index++) {
                if (element.id.slice(0,element.id.length-1) + "Gallery" == galleriesIconList[index].id) {
                        galleriesIconList[index].style.display = "flex";
                }
                else {
                        galleriesIconList[index].style.display = "none";
                }
        } 
},false)});

   
// da refreshva vinagi on top   
$(window).on('beforeunload', function() {
        $(window).scrollTop(0);
});

 //slideshow
$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
        $('#slideshow > div:first')
        .fadeOut(500)
        .next()
        .fadeIn(500)
        .end()
        .appendTo('#slideshow');
},  7000);   
 //slideshow

 


//sticky header
(function($) {          
    $(document).ready(function(){                    
         $(window).scroll(function(){                          
            if ($(this).scrollTop() >1) {
                var header = document.getElementById("menu");
                         header.style.backgroundColor = "rgba(154,205,50,0.8)";
                         header.style.transition =  "all 0.7s ease-in";
                $('#menu').fadeIn(1000);
            } else {
                  var header = document.getElementById("menu");
                header.style.backgroundColor = "transparent" ;
            }
        });
    });
})(jQuery);
//sticky header

 
 
currentUser = {}; // tekusht user (ako ima login)
var cart = document.getElementById("cart");
var orderButton1 = document.getElementById("orderButton1");
var orderButton2 = document.getElementById("orderButton2");
orderButton1.onclick  = function () {
        if(loggedInUser) {
                document.getElementById("landingPage").style.display = "none";
                document.getElementById("pizzaGallery").style.display = "flex";
                document.getElementById("menuPageHeader").style.display = "unset";
        }
        if(!loggedInUser) {
        popUp();
}
}
orderButton2.onclick  = function () {
        if(loggedInUser) {
                document.getElementById("landingPage").style.display = "none";
                document.getElementById("pizzaGallery").style.display = "flex";
                document.getElementById("menuPageHeader").style.display = "unset";
        }
        if(!loggedInUser) {
        popUp();
}
}


// tova sazdava golqm DIV - na kolichkata (posle se obhojdat produktite ot cart ) 
//. moje da se dostapi kato se loginnesh i cuknesh na ikonkata s choveche kolichka
function createCartDiv() {    
       document.getElementById("userMenu").style.display = "none";
            var cartDiv = document.createElement("div");
        document.body.appendChild(cartDiv);
        cartDiv.id = "cartDiv";
        
        document.getElementById("landingPage").style.display = "none";
        document.getElementById("gallery").style.display = "none";
        var header = document.createElement("h1");
        header.id = "cartHeader";
        header.innerHTML = "ВАШАТА КОЛИЧКА";
        cartDiv.appendChild(header);
        document.getElementById("bigProductDiv").style.display ="none";
        cartDiv.appendChild(document.getElementById("close"));
        document.getElementById("close").onclick = function () {
        cartDiv.style.display = "none";
        document.getElementById("pizzaGallery").style.display = "flex";
        document.getElementById("menuPageHeader").style.display = "unset";
        document.getElementById("gallery").style.display = "unset";
           document.getElementById("bigProductDiv").style.display = "none";
      
                        }
        var sumFinal = 0;
 // tuk obhojda produktite v cart na current user i gi nabiva v  cartDiv
        for (var index=0; index<currentUser.cart.length;index++) {
                var ownDiv = document.createElement("div");
                ownDiv.className = "ownDiv";
                cartDiv.appendChild(ownDiv);
                var img = document.createElement("img");
                img.className = "cartDivImages";
                img.src = currentUser.cart[index].imgSrc;
                ownDiv.appendChild(img);
                var productCartHeader = document.createElement("h1");
                productCartHeader.innerHTML = currentUser.cart[index].productName;
                productCartHeader.className = "productCartHeader";
                ownDiv.appendChild(productCartHeader);
                var quantity = document.createElement("p");
                quantity.innerHTML = "КОЛИЧЕСТВО: "  + currentUser.cart[index].quantity + " бр.";
                ownDiv.appendChild(quantity);
                quantity.className = "quantity";
                var price = document.createElement("p");
                price.innerHTML = "ЦЕНА: " + currentUser.cart[index].price + " лв."; 
                ownDiv.appendChild(price);
                price.className = "priceCartDiv";
                var sum = document.createElement("p");
                ownDiv.appendChild(sum);
                sum.className = "sum";
                sum.innerHTML = "ОБЩО: " + currentUser.cart[index].quantity*currentUser.cart[index].price + " лв.";   
                 sumFinal += currentUser.cart[index].quantity*currentUser.cart[index].price;
        }
       
       // potvarjdenie na porachkata  - tuk moje da izkarva div za vavejdane na adres koito da sahranqva za user-a i da go suggestva 
       // pri sledvashti porachki ( no time :) )
        var orderConfirm = document.createElement("button");
                cartDiv.appendChild(orderConfirm);
                orderConfirm.innerHTML = "Потвърдете поръчката";
                orderConfirm.id = "orderConfirm";
                orderConfirm.onclick = function () {
                        document.getElementById("addressInput").style.display  = "unset";
                }
        document.getElementById("sendAddress").onclick = function () {
                document.getElementById("addressInput").style.display = "none";
                 document.getElementById("welcomeMessage").style.display = "block";
                    document.querySelector("#welcomeMessage h1").innerHTML = "Вашата поръчка е приета! Пиците идват! :)" ;
                    document.getElementById("cartDiv").style.display = "none" ;
                    document.getElementById("landingPage").style.display = "unset";
                    document.getElementById("menuPageHeader").style.display = "none";

                if (currentUser.addresses.length!==0) {
                        document.querySelector("#addressInput #city").value = currentUser.addresses[addresses.length-1].city;
                        document.querySelector("#addressInput #tel").value = currentUser.addresses[addresses.length-1].street;
                        document.querySelector("#addressInput #tel").value = currentUser.addresses[addresses.length-1].tel;
                }
                var address = {};
              address.city = document.querySelector("#addressInput #city").value;
               address.street = document.querySelector("#addressInput #street").value;
              address.tel = document.querySelector("#addressInput #tel").value;
              currentUser.addresses.push (address);
                console.log(currentUser.addresses);
        }
                //izprazvane na kolichkata
        var orderCancel = document.createElement("button");
                cartDiv.appendChild(orderCancel);
                orderCancel.innerHTML = "ИЗЧИСТЕТЕ КОЛИЧКАТА";
                orderCancel.id = "orderCancel";
                var sumFinalText = document.createElement("p");
                cartDiv.appendChild(sumFinalText);
                sumFinalText.id = "sumFinal"  
                sumFinalText.innerHTML = "Общо: " + sumFinal + " лв.";
                orderCancel.onclick = function () {
                    var ownDivList =   document.querySelectorAll("#cartDiv>.ownDiv");
                    for (var index2=0;index2<ownDivList.length;index2++) {
                            ownDivList[index2].style.display = "none";
                               sumFinalText.innerHTML = "";
                    }
                        // document.getElementById("landingPage").style.display = "unset";
                        // document.getElementById("menuPageHeader").style.display = "none";
                        currentUser.cart = [];
                        
                }
          
              
}

 

 
 // za butona s kolichkata pri smalqvane na ekrana kogato e lognat user i kogato ne e 
cart.onclick = function (){
        if(loggedInUser===true){
       createCartDiv();
        document.getElementById("landingPage").style.display = "none";
        document.getElementById("gallery").style.display = "none";
        document.getElementById("menuPageHeader").style.display = "none";

        }
        if(loggedInUser===false){
            popUp();
        }
}
// button kolichka ot user menuto
var cartUserMenu = document.getElementById("cartUserMenu");
cartUserMenu.addEventListener("click",createCartDiv,false);

       
// login forma
var popUp = function ()  {
        document.getElementById("popUp").style.display="inline-block";
        document.getElementById("myDropdownDiv").style.display = "none";
        document.getElementById("restaurantDiv").style.display = "none";   
        document.getElementById("registrationWrapper").style.display="none";  
}

document.getElementById("sale").onclick =  function () {
        document.getElementById("popUp").style.display="inline-block";
}


// butonite na divovete na kolegata
var arr  = document.querySelectorAll("#offer_con  button");
Array.prototype.forEach.call(arr,function (element) {
        element.addEventListener('click', function () {
        document.getElementById("popUp").style.display="inline-block";
    },false);
});
     
 
// da zatvqrq prozorci pri natiskane na ESC
$(document).keyup(function(e) {
        if (e.keyCode == 27) {  document.getElementById("popUp").style.display="none"; }   
        if (e.keyCode == 27) {  document.getElementById("restaurantDiv").style.display="none";}   
        if (e.keyCode == 27) {  document.getElementById("registrationWrapper").style.display="none";}    
        if (e.keyCode == 27) {  document.getElementById("myDropdownDiv").style.display="none";}    
        if (e.keyCode == 27) {  document.getElementById("userMenu").style.display="none";}    
 
});
 
 //button menu   
document.getElementById("menuButton").onclick = function () { 
        document.getElementById("restaurantDiv").style.display = "block";   
        document.getElementById("myDropdownDiv").style.display = "none"   ;
        document.getElementById("registrationWrapper").style.display="none";
        document.getElementById("popUp").style.display="none";
        
}
// menu button 2 
document.getElementById("menuButton2").onclick = function () { 
        document.getElementById("restaurantDiv").style.display = "inline-block";
        document.getElementById("myDropdownDiv").style.display = "none"   ;
        document.getElementById("registrationWrapper").style.display="none";
        document.getElementById("popUp").style.display="none";
}

// close na login formata ot X
document.getElementById("close").setAttribute("onclick","closePopUp()");
        var closePopUp = function  () {
        document.getElementById("popUp").style.display="none";          
}
 
 
// close button na registracionna forma
document.getElementById("close2").addEventListener("click",function () {
           document.getElementById("registrationWrapper").style.display = "none";
        document.getElementById("addressInput").style.display = "none";
},false)  ;
 
     
   
        
 

 //close button na spisaka s restoranti ot buttona menu 
document.getElementById("close3").onclick = function () { 
        document.getElementById("restaurantDiv").style.display = "none";
}
  
var clicks = 0;
// drop down menu pri maluk razmer na ekrana 
document.getElementById("dropdown").onclick = function () {
        clicks++;
        if (clicks%2==1) { 
            document.getElementById("myDropdownDiv").style.display = "inline-block"; 
            document.getElementById("restaurantDiv").style.display = "none";   
            document.getElementById("registrationWrapper").style.display="none";
            document.getElementById("popUp").style.display="none";
        }
        if (clicks%2==0) {
            document.getElementById("myDropdownDiv").style.display = "none"; 
        }
}


 
 // registracq button ot login formata
document.getElementById("registration").onclick = function () { 
        document.getElementById("popUp").style.display = "none"; //skrivame login prozoreca
        document.getElementById("registrationWrapper").style.display = "unset"; // tyk pokazvame div-a za registraciq
}

// validacii registracionna forma 
var allowSubmit = false;
// validaciq za daljina na parolata
document.getElementById("pass").onblur = function () {
        var passMessage  = document.getElementById("passMessage");
        var password = document.getElementById("pass");
        if (password.value.length<6) {   
            var text =  document.createTextNode("Моля, въведете парола с поне 6 символа!");
            passMessage.appendChild(text);
        }
}

//da se obhodqt s forEach i da im se zakachat listeneri 
document.getElementById("passConfirm").onfocus = function () {
        document.getElementById("passMessage").innerHTML  ="";
        document.getElementById("emailMessage").innerHTML  ="";
        document.getElementById("nameMessage").innerHTML  ="";
        document.getElementById("passConfirm").value  ="";
}
document.getElementById("pass").onfocus = function () {
        document.getElementById("passMessage").innerHTML  ="";
        document.getElementById("emailMessage").innerHTML  ="";
        document.getElementById("nameMessage").innerHTML  ="";
        document.getElementById("pass").value  ="";
}
document.getElementById("email").onfocus = function () {
        document.getElementById("passMessage").innerHTML  ="";
        document.getElementById("emailMessage").innerHTML  ="";
        document.getElementById("nameMessage").innerHTML  ="";
        document.getElementById("email").value  ="";
}
document.getElementById("firstName").onfocus = function () {
        document.getElementById("passMessage").innerHTML  ="";
        document.getElementById("emailMessage").innerHTML  ="";
        document.getElementById("nameMessage").innerHTML  ="";
        document.getElementById("firstName").value  ="";
}

 document.getElementById("lastName").onfocus  = function (){
        document.getElementById("lastName").value  ="";
}
////da se obhodqt s forEach i da im se zakachat listeneri

// blokirane na butona submit
 document.querySelector("#registrationWrapper button[type=submit]").onclick = function (event) {
        var password = document.getElementById("pass");
        var passConfirm = document.getElementById("passConfirm");
        if (password.value.length>=6 && passConfirm.value===password.value){ 
            allowSubmit = true;
        }
        if (!allowSubmit) {
            event.preventDefault();
        }
 }
//otvarqne na menuto pri izbor na restorant ot spisaka 
 var restaurants = document.getElementById("restaurantList");
 restaurants.onchange = function () {
        document.getElementById("landingPage").style.display="none";
        document.getElementById("restaurantDiv").style.display= "none";
        document.getElementById("menuPageHeader").style.display = "unset";
        document.getElementById("pizzaGallery").style.display = "flex";
 }



//registracionna forma 
document.querySelector("#registrationWrapper button[type=submit]").onclick = function (event) {
        event.preventDefault();
        var password = document.getElementById("pass");
        var passConfirm = document.getElementById("passConfirm");
        var email = document.getElementById("email");
        var emailFlag = false;
        var firstName = document.getElementById("firstName");
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var flag = re.test(email.value);
        var regexp = /^[A-z]+$/;
        regexp.test(firstName.value);
        for (var key in userList) {
            if( userList[key].email === email.value) {
                    document.getElementById("welcomeMessage").style.display = "block";
                    document.querySelector("#welcomeMessage h1").innerHTML = "Този email е зает!" ; 
                    emailFlag = true;
            }
        }
                // proverka za sashtestvuvasht email
        if (password.value.length>=6 && passConfirm.value===password.value &&  regexp.test(firstName.value) && firstName.value.length>1 && regexp.test(lastName.value) && lastName.value.length>1 &&
        re.test(email.value) && emailFlag == false ) {     // proverka za verni poleta 
            var user = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email:document.getElementById("email").value,
            password: document.getElementById("pass").value,
            cart : [],
            addresses : []
                
            
        }
        userList.push(user);
        document.getElementById("welcomeMessage").style.display = "block";
        document.querySelector("#welcomeMessage h1").innerHTML = "Поздравления " + user.firstName + " ! Вашата регистрация беше успешна. ";
        event.preventDefault();
        document.getElementById("registrationWrapper").style.display ="none";
        document.getElementById("popUp").style.display ="block";
        }

        //messages za greshna parola mail i tn
        var nameMessage = document.getElementById("nameMessage")
        var firstName = document.getElementById("firstName");
        var regexp = /^[A-z]+$/;
        var test = regexp.test(firstName.value);
        if (!test  ) {
            var text = document.createTextNode("Моля, въведете валидни имена!")
            nameMessage.appendChild(text);
        }
        var email = document.getElementById("email");
        var emailMessage = document.getElementById("emailMessage");
        var text =  document.createTextNode("Въведете валиден email!!");
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var flag = re.test(email.value);
        if (!flag) {
            emailMessage.appendChild(text);
        }
        var passMessage  = document.getElementById("passMessage");
        var password = document.getElementById("pass");
        if (password.value.length<6) {   
            var text =  document.createTextNode("Моля, въведете парола с поне 6 символа!");
            passMessage.appendChild(text);  
        }
        var password = document.getElementById("pass");
        var passMessage  = document.getElementById("passMessage");
        var passConfirm = document.getElementById("passConfirm");
        if (password.value !== passConfirm.value) {
            var text =  document.createTextNode("Паролите не съвпадат!");
            passMessage.appendChild(text);
        }
}

document.getElementById("welcomeMessage").onclick = function () {
        document.getElementById("welcomeMessage").style.display = "none";   // za zatvarqne na welcome message-a  pri klik varhu nego 
 }


// buton VHOD za log in s proverki
document.getElementById("enter").onclick = function () { 
        var email = document.querySelector("#popUp input[type=email]");
        var pass = document.querySelector("#popUp input[type=password]");
        for (var index=0;index<userList.length;index++) {
            for (var key in userList)  {
                if (email.value==userList[key].email && pass.value==userList[key].password) {
                    document.getElementById("welcomeMessage").style.display = "block";
                    document.querySelector("#welcomeMessage h1").innerHTML = "Welcome " + userList[key].firstName + " !";
                    document.getElementById("popUp").style.display = "none";
                    document.getElementById("userIcon").style.display = "inline";
                    loggedInUser=true;
                    currentUser = userList[index];
                }
             if (email.value!==userList[key].email || pass.value!==userList[key].password ) {
                        console.log("fail");
                    document.getElementById("welcomeMessage").style.display = "block";
                    document.querySelector("#welcomeMessage h1").innerHTML = "Грешен email или парола!" 
                }
            }
        }
}


// logout button
document.getElementById("logOut").onclick = function () {
        loggedInUser = false;
        document.getElementById("userIcon").style.display = "none";
        document.getElementById("userMenu").style.display = "none";
// tova e za butona zapomni me
        if (document.getElementById("rememberMe").checked === false) {
            document.querySelector("#popUp input[type=password]").value = "";
            document.querySelector("#popUp input[type=email]").value = "";   
    }
}
// user ikona 
document.getElementById("userIcon").onclick = function () {
        document.getElementById("userMenu").style.display = "unset";
}

