const faButton = document.getElementById("fa-btn");
const enButton = document.getElementById("en-btn");


function changeLanguage(language) {


    const elements = document.querySelectorAll("[data-en]");


    elements.forEach(function(element){


        if(language === "fa"){

            element.innerText = element.getAttribute("data-fa");

        }


        else {

            element.innerText = element.getAttribute("data-en");

        }


    });



    if(language === "fa"){


        document.documentElement.lang = "fa";

        document.body.style.direction = "rtl";

        document.body.style.textAlign = "right";


    }


    else {


        document.documentElement.lang = "en";

        document.body.style.direction = "ltr";

        document.body.style.textAlign = "left";


    }



}




faButton.addEventListener("click", function(){

    changeLanguage("fa");

});




enButton.addEventListener("click", function(){

    changeLanguage("en");

});
