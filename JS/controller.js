$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {
                window.location.hash = hash;
            });
        } // End if
    });
});

function giveMeInput(formID, nameOfInput) {

    return document.getElementById(formID).elements[nameOfInput].value;
}

function isCheckedRadio(radioID) {
    return document.getElementById(radioID).checked;
}


document.getElementById("sent_job_app").addEventListener("click", function(ev) {
    ev.preventDefault();
    var p = document.getElementById("details");
    p.style.display = "block";
    //p.innerHTML = "";
    if (giveMeInput("job_form", "name") === "" || giveMeInput("job_form", "city") === "" || giveMeInput("job_form", "phoneNumber") === "" || ((!isCheckedRadio("driver_radio")) && (!isCheckedRadio("cook_radio")) && (!isCheckedRadio("bothProf_radio")))) {

        p.style.textAlign = "center";
        p.style.border = 2 + "px";
        p.style.borderStyle = "solid";
        p.innerText = "Попълнете задължителните полета (със *)!";

    }
}, false)

var inputs = document.getElementsByClassName("job_inputs");

function validateInputs(inputName, paragraohID) {
    for (var index = 0; index < inputName.length; index++) {
        inputName[index].addEventListener("focus", function() {
            document.getElementById(paragraohID).style.display = "none";
        }, false);
    }
}
validateInputs(inputs, "details");


function codeRandom() {
    var numRand = Math.floor(Math.random() * 10000 + 1);
    return numRand;
}

var spanJobApp = document.getElementById("generatedCode");
document.getElementById("codeGenBut").addEventListener("click", function(ev) {
    ev.preventDefault();

    spanJobApp.textContent = codeRandom();
    document.getElementById("warning").textContent = "";
    ev.stopPropagation();
}, false);

document.getElementById("code").addEventListener("blur",
    function() {
        if (spanJobApp.textContent !== this.value) {
            var warning = document.getElementById("warning");
            warning.textContent = "Wrong code input!";
        }
    }, false);

document.getElementById("code").addEventListener("focus", function() {
    document.getElementById("warning").textContent = "";
}, false);


document.getElementById("sendFeedbackBut").addEventListener("click", function(ev) {
    ev.preventDefault();
    var p = document.getElementById("warnPar");
    p.style.display = "block";
    //p.innerHTML = "";
    if (giveMeInput("feedForm", "name") === "" || giveMeInput("feedForm", "email") === "" || giveMeInput("feedForm", "phoneNum") === "") {
        p.style.textAlign = "center";

        p.innerText = "Попълнете задължителните полета (със *)!";
    }
}, false);

var inputsFeedBack = document.getElementsByClassName("feed_inputs");

validateInputs(inputsFeedBack, "warnPar");


var spanFeedBack = document.getElementById("generatedCodeForFeed");

document.getElementById("generator").addEventListener("blur",
    function() {
        if (spanFeedBack.textContent !== this.value) {
            var warning = document.getElementById("warningFeedBack");
            warning.textContent = "Wrong code input!";
        }
    }, false);

document.getElementById("codeGenButFeedBack").addEventListener("click", function(ev) {
    ev.preventDefault();
    spanFeedBack.textContent = codeRandom();
    document.getElementById("warningFeedBack").textContent = "";
    ev.stopPropagation();
}, false);
document.getElementById("generator").addEventListener("focus", function() {
    document.getElementById("warningFeedBack").textContent = "";
}, false);

/*document.getElementById("jobAppLink").addEventListener("click", function() {
    document.getElementById("JobApp").style.display = "block";
    console.log("sasa");    


}, false)*/