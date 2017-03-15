
productsMenuList = [];
function Product (productName,productType,price,ingredients,imgSrc) {
    this.productName = productName;
    this.productType = productType;
    this.price = price;
    this.ingredients = ingredients;
    this.imgSrc = imgSrc;
    productsMenuList.push(this);
}
var loggedInUser = false;
var product1 = new Product("МЕДИТЕРАНЕО","pizza",11.5,"Доматен сос, Краве сирене, Моцарела, Пресни зелени чушки, Пресни домати, Черни маслини","https://www.dominos.bg/gallery/fmobile/1290medium.png");
var product2 = new Product("АЛФРЕДО","pizza",12,"Сметана, Моцарела, Пиле, Бейби Спанак","https://www.dominos.bg/gallery/fmobile/1291medium.png");
var product3 = new Product("ВИТА","pizza",13,"Доматен сос, Моцарела, Краве сирене, Пресни домати, Бейби Спанак","https://www.dominos.bg/gallery/fmobile/1292medium.png");
var product4 = new Product("ДОМИНОС","pizza",15.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1293medium.png");
var product5 = new Product("КАРБОНАРА","pizza",12.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1295medium.png");
var product6 = new Product("КАПРИЧОЗА","pizza",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1296medium.png");
var product7 = new Product("КАЛЦОНЕ","pizza",22.5,"Доматен сос, Моцарела,  Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1297medium.png");
var product8 = new Product("ЧЕТИРИ СЕЗОНА","pizza",14.5,"Доматен сос, Extra Моцарела, Extra Пеперони","https://www.dominos.bg/gallery/fmobile/1298medium.png");
var product9 = new Product("КАРБОНАРА","pizza",12.5,"Доматен сос, Моцарела, Ементал, Пеперони, Пиле, Пресни домати","https://www.dominos.bg/gallery/fmobile/1299medium.png");
var product10 = new Product("КАПРИЧОЗА","pizza",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1300medium.png");


var product11 = new Product("КАРБОНАРА","pasta",5.5,"Сметана, Моцарела, Пушен бекон, Пресни гъби","https://www.dominos.bg/gallery/fmobile/1242ipar.png");
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
 
 
    for (var index=0;index<productsMenuList.length;index++) {
            var productDiv =  document.createElement("div");
            productDiv.className = "productDiv";
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
                console.log(currentUser.cart);
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
 document.getElementById("salad").onclick = function (){
        document.getElementById("saladGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("salad1").onclick = function (){
        document.getElementById("saladGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("sandwich").onclick = function (){
        document.getElementById("sandwichGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
 }
 document.getElementById("sandwich1").onclick = function (){
        document.getElementById("sandwichGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
 }
 document.getElementById("desert").onclick = function (){
        document.getElementById("desertGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("desert1").onclick = function (){
        document.getElementById("desertGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("drinks").onclick = function (){
        document.getElementById("drinksGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("drinks1").onclick = function (){
        document.getElementById("drinksGallery").style.display = "flex";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("pasta").onclick = function (){
        document.getElementById("pastaGallery").style.display = "flex";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("pasta1").onclick = function (){
        document.getElementById("pastaGallery").style.display = "flex";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pizzaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("pizza").onclick = function () {
        document.getElementById("pizzaGallery").style.display = "flex";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }
 document.getElementById("pizza1").onclick = function () {
        document.getElementById("pizzaGallery").style.display = "flex";
        document.getElementById("saladGallery").style.display = "none";
        document.getElementById("drinksGallery").style.display = "none";
        document.getElementById("desertGallery").style.display = "none";
        document.getElementById("pastaGallery").style.display = "none";
        document.getElementById("sandwichGallery").style.display = "none";
 }

   
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

 
currentUser = {};
var cart = document.getElementById("cart");
var orderButton1 = document.getElementById("orderButton1");
var orderButton2 = document.getElementById("orderButton2");
orderButton1.setAttribute("onclick","popUp()");
orderButton2.setAttribute("onclick","popUp()");
cart.onclick = function (){
        if(loggedInUser===true){
        alert("gei");
        console.log(loggedInUser);
        }
        if(loggedInUser===false){
            popUp();
        }
}
var popUp = function ()  {
        document.getElementById("popUp").style.display="inline-block";
        document.getElementById("myDropdownDiv").style.display = "none";
        document.getElementById("restaurantDiv").style.display = "none";   
        document.getElementById("registrationWrapper").style.display="none";  
}

document.getElementById("sale").onclick =  function () {
document.getElementById("popUp").style.display="inline-block";
}

var arr  = document.querySelectorAll("#offer_con  button");
Array.prototype.forEach.call(arr,function (element) {
    element.addEventListener('click', function () {
    document.getElementById("popUp").style.display="inline-block";
    },false);
});
     
 

$(document).keyup(function(e) {
    if (e.keyCode == 27) {  document.getElementById("popUp").style.display="none"; }   
    if (e.keyCode == 27) {  document.getElementById("restaurantDiv").style.display="none";}   
    if (e.keyCode == 27) {  document.getElementById("registrationWrapper").style.display="none";}    
    if (e.keyCode == 27) {  document.getElementById("myDropdownDiv").style.display="none";}    
    if (e.keyCode == 27) {  document.getElementById("userMenu").style.display="none";}    
 
});
 
    
document.getElementById("menuButton").onclick = function () { 
    document.getElementById("restaurantDiv").style.display = "block";   
    document.getElementById("myDropdownDiv").style.display = "none"   ;
    document.getElementById("registrationWrapper").style.display="none";
    document.getElementById("popUp").style.display="none";
        
}
document.getElementById("menuButton2").onclick = function () { 
    document.getElementById("restaurantDiv").style.display = "inline-block";
    document.getElementById("myDropdownDiv").style.display = "none"   ;
    document.getElementById("registrationWrapper").style.display="none";
    document.getElementById("popUp").style.display="none";
}

document.getElementById("close").setAttribute("onclick","closePopUp()");
    var closePopUp = function  () {
    document.getElementById("popUp").style.display="none";
        
}
 
 // za click na backgrounda da iuzchgezvat prozrocite  ? ?  ? sas stopimeddiatepropagation 


//  document.body.addEventListener("click",function (event) {
//      document.getElementById("myDropdownDiv").style.display = "none";
//      document.getElementById("popUp").style.display = "none";
//      document.getElementById("registrationWrapper").style.display = "none";
//      document.getElementById("restaurantDiv").style.display = "none";
//      document.getElementById("welcomeMessage").style.display = "none";
//      document.getElementById("emailMessage").style.display = "none";
//      document.getElementById("passMessage").style.display = "none";
//      document.getElementById("nameMessage").style.display = "none";
   
//  },false);

 

document.getElementById("close2").setAttribute("onclick","closeRegForm()")  
var closeRegForm = function  ( )  {
    document.getElementById("registrationWrapper").style.display = "none";
 
}
  
document.getElementById("close3").onclick = function () { 
    document.getElementById("restaurantDiv").style.display = "none";
}
  
var clicks = 0;
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

document.getElementById("slideshow").onclick = function() {
     document.getElementById("myDropdownDiv").style.display = "none"; 
}
 
document.getElementById("registration").onclick = function () { 
    document.getElementById("popUp").style.display = "none";
    document.getElementById("registrationWrapper").style.display = "unset";

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

 var restaurants = document.getElementById("restaurantList");
 restaurants.onchange = function () {
     document.getElementById("landingPage").style.display="none";
     document.getElementById("restaurantDiv").style.display= "none";
     document.getElementById("menuPageHeader").style.display = "unset";
 }

var userList = [];
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
        cart : []
     }
    userList.push(user);
    document.getElementById("welcomeMessage").style.display = "block";
    document.querySelector("#welcomeMessage h1").innerHTML = "Поздравления " + user.firstName + " ! Вашата регистрация беше успешна. ";
    event.preventDefault();
    document.getElementById("registrationWrapper").style.display ="none";
    document.getElementById("popUp").style.display ="block";
    }

    //messages
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
     document.getElementById("welcomeMessage").style.display = "none";   // za zatvarqne na welcome message-a 
 }

document.getElementById("enter").onclick = function () { 
    console.log(userList);
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
                console.log(currentUser);
                
        }
        else {
            document.getElementById("welcomeMessage").style.display = "block";
            document.querySelector("#welcomeMessage h1").innerHTML = "Грешен email или парола!" 
            }
        }
    }
}

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

