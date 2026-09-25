const faButton = document.getElementById("fa-btn");
const enButton = document.getElementById("en-btn");


function translatePage(lang) {


    const elements = document.querySelectorAll("[data-en]");


    elements.forEach((element) => {


        if (lang === "fa") {

            element.innerHTML = element.getAttribute("data-fa");

        } else {

            element.innerHTML = element.getAttribute("data-en");

        }


    });



    if (lang === "fa") {


        document.documentElement.lang = "fa";

        document.body.style.direction = "rtl";

        document.body.classList.add("rtl");


    } else {


        document.documentElement.lang = "en";

        document.body.style.direction = "ltr";

        document.body.classList.remove("rtl");


    }


}



faButton.addEventListener("click", function(){

    translatePage("fa");

});



enButton.addEventListener("click", function(){

    translatePage("en");

});
