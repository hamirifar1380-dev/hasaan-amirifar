const faButton = document.querySelector(".language button:nth-child(2)");
const enButton = document.querySelector(".language button:nth-child(1)");

const translations = {

    en: {

        about: "About",
        experience: "Experience",
        noya: "Noya",
        contact: "Contact"

    },


    fa: {

        about: "درباره من",
        experience: "تجربه کاری",
        noya: "برند نویا",
        contact: "ارتباط با من"

    }

};



function changeLanguage(lang){


    document.documentElement.lang = lang;


    if(lang === "fa"){


        document.body.style.direction = "rtl";


        document.body.style.textAlign = "right";


        document.querySelector("nav a:nth-child(1)").innerText =
        translations.fa.about;


        document.querySelector("nav a:nth-child(2)").innerText =
        translations.fa.experience;


        document.querySelector("nav a:nth-child(3)").innerText =
        translations.fa.noya;


        document.querySelector("nav a:nth-child(4)").innerText =
        translations.fa.contact;



    } else {


        document.body.style.direction = "ltr";


        document.body.style.textAlign = "left";


        document.querySelector("nav a:nth-child(1)").innerText =
        translations.en.about;


        document.querySelector("nav a:nth-child(2)").innerText =
        translations.en.experience;


        document.querySelector("nav a:nth-child(3)").innerText =
        translations.en.noya;


        document.querySelector("nav a:nth-child(4)").innerText =
        translations.en.contact;


    }


}



faButton.addEventListener("click", ()=>{

changeLanguage("fa");

});


enButton.addEventListener("click", ()=>{

changeLanguage("en");

});
