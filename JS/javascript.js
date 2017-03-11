 


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


var cart = document.getElementById("cart");
var orderButton1 = document.getElementById("orderButton1");
var orderButton2 = document.getElementById("orderButton2");
orderButton1.setAttribute("onclick","popUp()");
orderButton2.setAttribute("onclick","popUp()");
cart.setAttribute("onclick","popUp()");
var popUp = function ()  {
   document.getElementById("popUp").style.display="inline-block";
 
   document.getElementById("myDropdownDiv").style.display = "none";
      document.getElementById("restaurantDiv").style.display = "none";   
         document.getElementById("registrationWrapper").style.display="none";
      
   
}

$(document).keyup(function(e) {
  if (e.keyCode == 27) {  document.getElementById("popUp").style.display="none"; }   
  if (e.keyCode == 27) {  document.getElementById("restaurantDiv").style.display="none";}   
  if (e.keyCode == 27) {  document.getElementById("registrationWrapper").style.display="none";}    
  if (e.keyCode == 27) {  document.getElementById("myDropdownDiv").style.display="none";}    
 
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

 

  addEventListener("keypress",    function(e){e.keyCode==27 &&(d.style.display="none")},false); 



document.getElementById("close").setAttribute("onclick","closePopUp()");
 var closePopUp = function  () {
     document.getElementById("popUp").style.display="none";
        
}
 

 

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
      document.getElementById("myDropdownDiv").style.display = "unset"; 
         document.getElementById("restaurantDiv").style.display = "none";   
    ;
         document.getElementById("registrationWrapper").style.display="none";
         document.getElementById("popUp").style.display="none";
       }
       if (clicks%2==0) {
              document.getElementById("myDropdownDiv").style.display = "none"; 
       }
}

 
document.getElementById("registration").onclick = function () { 
    document.getElementById("popUp").style.display = "none";
    document.getElementById("registrationWrapper").style.display = "unset";

}

// validacii registracionna forma 
 var allowSubmit = false;
//validaciq za daljina na parolata
document.getElementById("pass").onblur = function () {
    var passMessage  = document.getElementById("passMessage");
var password = document.getElementById("pass");
if (password.value.length<6) {   
 var text =  document.createTextNode("Моля, въведете парола с поне 6 символа!");
    passMessage.appendChild(text);
    }
}

//validaciq za povtorenie na parolata
document.getElementById("passConfirm").onblur = function (){
    var password = document.getElementById("pass");
    var passMessage  = document.getElementById("passMessage");
    var passConfirm = document.getElementById("passConfirm");
    if (password.value !== passConfirm.value) {
        var text =  document.createTextNode("Паролите не съвпадат!");
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

////da se obhodqt s forEach i da im se zakachat listeneri

document.getElementById("firstName").onblur  = function () { 
    var nameMessage = document.getElementById("nameMessage")
    var firstName = document.getElementById("firstName");
    var regexp = /^[A-z]+$/;
    var test = regexp.test(firstName.value);
    if (!test || firstName.value.length<1) {
        var text = document.createTextNode("Моля, въведете валидни имена!")
        nameMessage.appendChild(text);
    }
}
document.getElementById("lastName").onblur  = function () { 
    var nameMessage = document.getElementById("nameMessage")
    var firstName = document.getElementById("firstName");
    if (firstName.value==="") {
        var text = document.createTextNode("Моля, въведете вашето собствено и фамилно име!")
        nameMessage.appendChild(text);
    }
}


//email validaciq
 document.getElementById("email").onblur = function () {
     var email = document.getElementById("email");
     var emailMessage = document.getElementById("emailMessage");
     var text =  document.createTextNode("Въведете валиден email!!");
    
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = re.test(email.value);
    if (!flag) {
        emailMessage.appendChild(text);
 }
 console.log(allowSubmit);
 }

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

 var x = document.getElementById("restaurantList");
 x.onchange = function () {
     document.getElementById("landingPage").style.display="none";
   document.getElementById("restaurantDiv").style.display= "none";
 document.getElementById("menuPageHeader").style.display = "unset";
 }
 