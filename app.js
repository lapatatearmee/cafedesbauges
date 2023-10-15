//Ajout de la class "scroll" sur onglet lors du scroll + changement de couleur
const onglet = document.querySelector(".onglet");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    onglet.classList.add("scroll");
  } else {
    onglet.classList.remove("scroll");
  }
  if (window.scrollY > 100) {
    $(".onglet a").css("border", "solid 2px var(--PrimaryBlue)");
  } 

  if (window.scrollY > 2500) {
    $(".onglet a").css("border", "solid 2px white");
  }
  if (window.scrollY > 4500) {
    $(".onglet a").css("border", "solid 2px var(--PrimaryBlue)");
  }
  if (window.scrollY > 5767) {
    $(".onglet a").css("border", "solid 2px white");
  }
});

//Ajout de la class "scroll" sur scroll_to_top(mobile) lors du scroll
const scroll_to_top = document.querySelector("#scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 590) {
    scroll_to_top.classList.add("scroll");
  } else {
    scroll_to_top.classList.remove("scroll");
  }
});



//Menu hamburger clique
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

//Activation de la classe active sur la navbar avec le scroll et le clique
const li = document.querySelectorAll(".navbar .nav-links ul li");
const currentPage = window.location.pathname.split("/").pop(); // Get the current page URL

function highlightMenu() {
  li.forEach((menu) => {
    menu.classList.remove("active");
    const pageLink = menu.querySelector("a").getAttribute("href");
    const page = pageLink.split("/").pop(); // Get the page name from the link href

    if (currentPage === page) {
      menu.classList.add("active");
    }
  });
}

highlightMenu();

//Activation de la classe active sur les onglets avec le scroll et le clique
const tabLi = document.querySelectorAll(".onglet a");
const tabSec = document.querySelectorAll("section");

function activeTabMenu() {
  let len = tabSec.length;
  while (--len && window.scrollY + 97 < tabSec[len].offsetTop) {}
  tabLi.forEach((menu) => menu.classList.remove("activeScroll"));
  tabLi[len].classList.add("activeScroll");
}

activeTabMenu();
window.addEventListener("scroll", activeTabMenu);


//Ajoute de la classe Reveal au scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = -150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal2 au scroll
window.addEventListener("scroll", reveal2);

function reveal2() {
  var reveals2 = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals2.length; i++) {
    var windowheight2 = window.innerHeight;
    var revealtop2 = reveals2[i].getBoundingClientRect().top;
    var revealpoint2 = 150;

    if (revealtop2 < windowheight2 - revealpoint2) {
      reveals2[i].classList.add("active");
    } else {
      reveals2[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal3 au scroll
window.addEventListener("scroll", reveal3);

function reveal3() {
  var reveals3 = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals3.length; i++) {
    var windowheight3 = window.innerHeight;
    var revealtop3 = reveals3[i].getBoundingClientRect().top;
    var revealpoint3 = 150;

    if (revealtop3 < windowheight3 - revealpoint3) {
      reveals3[i].classList.add("active");
    } else {
      reveals3[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe Reveal4 au scroll
window.addEventListener("scroll", reveal4);

function reveal4() {
  var reveals4 = document.querySelectorAll(".reveal4");

  for (var i = 0; i < reveals4.length; i++) {
    var windowheight4 = window.innerHeight;
    var revealtop4 = reveals4[i].getBoundingClientRect().top;
    var revealpoint4 = 150;

    if (revealtop4 < windowheight4 - revealpoint4) {
      reveals4[i].classList.add("active");
    } else {
      reveals4[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe reveal5 au scroll
window.addEventListener("load", reveal5);

function reveal5() {
  var reveals5 = document.querySelectorAll(".reveal5");

  for (var i = 0; i < reveals5.length; i++) {
    var windowheight5 = window.innerHeight;
    var revealtop5 = reveals5[i].getBoundingClientRect().top;
    var revealpoint5 = 0;

    if (revealtop5 < windowheight5 - revealpoint5) {
      reveals5[i].classList.add("active");
    } else {
      reveals5[i].classList.remove("active");
    }
  }
}

//Ajoute de la classe reveal6 au scroll
window.addEventListener("load", reveal6);

function reveal6() {
  var reveals6 = document.querySelectorAll(".reveal6");

  for (var i = 0; i < reveals6.length; i++) {
    var windowheight6 = window.innerHeight;
    var revealtop6 = reveals6[i].getBoundingClientRect().top;
    var revealpoint6 = 150;

    if (revealtop6 < windowheight6 - revealpoint6) {
      reveals6[i].classList.add("active");
    }
  }
}



// Function to hide the cookie banner and store user's consent or refusal
function hideCookieBanner() {
  var cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
  // Store user's consent or refusal in a cookie or your preferred method
}

// Function to check if the user has given consent
function checkCookieConsent() {
  var hasConsent = document.cookie.match(/^(.*;)?\s*cookieConsent\s*=\s*[^;]+(.*)?$/);
  if (!hasConsent) {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "block";
  }
}

// Get the necessary elements
const customizeCookiesLink = document.getElementById('cookie-customize');
const customizeMenu = document.getElementById('cookie-customize-menu');

// Function to scroll to the customize menu with a smooth transition
function scrollToCustomizeMenu() {
  customizeMenu.style.display = "block";
  var cookieBannerHeight = document.getElementById("cookie-banner").offsetHeight;
  window.scrollTo({ top: cookieBannerHeight, behavior: 'smooth' });
}

// Function to hide the customize options window
function hideCustomizeWindow() {
  customizeMenu.style.display = "none";
}

// Event listener for the "Accept" button
var cookieAcceptButton = document.getElementById("cookie-accept");
cookieAcceptButton.addEventListener("click", function() {
  hideCookieBanner();
  hideCustomizeWindow();
  // Set a cookie to remember user's consent
  document.cookie = "cookieConsent=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
});

// Event listener for the "Deny" button
var cookieDenyButton = document.getElementById("cookie-refuse");
cookieDenyButton.addEventListener("click", function() {
  hideCookieBanner();
  hideCustomizeWindow();
  // Set a cookie to remember user's refusal
  document.cookie = "cookieConsent=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
});

// Event listener for the "Customize Cookies" button
customizeCookiesLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToCustomizeMenu();
});

// Event listener for the "Save Preferences" button
var savePreferencesButton = document.getElementById("save-preferences");
savePreferencesButton.addEventListener("click", function() {
  hideCookieBanner();
  hideCustomizeWindow();
  // Implement your logic to save the user's cookie preferences
});

// Check cookie consent on page load
checkCookieConsent();


