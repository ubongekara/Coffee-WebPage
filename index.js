
const textarea = document.getElementById("messages");
const charCount = document.getElementById("charCount");
const menuBtn = document.querySelector(".menudiv");
const hiddenMenu = document.querySelector(".hidden-bar");
const privacyh2 = document.getElementById("privacy")
const privacyList = document.getElementById("privacyul");
const servicesh2 = document.getElementById("services")
const servicesList = document.getElementById("servicesul");
const abouth2 = document.getElementById("aboutus");
const aboutList = document.getElementById("aboutul");
const informationh2 = document.getElementById("information")
const informationList = document.getElementById("informationul");
const mediaQuery = window.matchMedia("(min-width: 700px)");
const backToTop  = document.getElementById("topBtn");
const maxLength = 250;



menuBtn.addEventListener("click", () => {
    if(hiddenMenu.style.display === "none"){
      hiddenMenu.style.display = "block"
    } else {
      hiddenMenu.style.display = "none";
    }
});


privacyh2.addEventListener("click", () => {
    if(privacyList.style.display === "none"){
      privacyList.style.display = "block";
    } else {
      privacyList.style.display = "none";
    }

});




servicesh2.addEventListener("click", () => {
    if(servicesList.style.display === "none"){
      servicesList.style.display = "block";
    } else {
      servicesList.style.display = "none";
    }

})


abouth2.addEventListener("click", () => {
    if(aboutList.style.display === "none"){
      aboutList.style.display = "block";
    } else {
      aboutList.style.display = "none";
    }

})


informationh2.addEventListener("click", () => {
    if(informationList.style.display === "none"){
      informationList.style.display = "block";
    } else {
      informationList.style.display = "none";
    }

})



textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    charCount.textContent = maxLength - length;

 

    if (length >= maxLength) {
       textarea.value = textarea.value.slice(0, maxLength);
      charCount.style.color = "red";
      charCount.textContent = "You have exceeded " + maxLength  + " characters !";
    } else {
      charCount.style.color = "black";
    }


  });



window.onscroll = function(){
  scrollFunction();
}

function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function topFunction(){
  document.documentElement.scrollTop = 0;
}