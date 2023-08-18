// Scroll
var links = document.getElementsByTagName("a");

Array.prototype.forEach.call(links, function(elem, index) {
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});
// end 

//Get the button
var mybutton = document.getElementById("scroll");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Scroll to Top

// === dark mode button
const toggle = document.getElementById('dn');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-mode');
        document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle("invert");
      });
    
    } else {
        body.classList.remove('dark-mode');
        document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle("invert");
      });
    }
});

// end dark

// chat click
function onChatClick(){
var openChatElement = document.querySelector('[aria-label="Open chat"]');
var CloseChatElement = document.querySelector('[aria-label="Close chat"]');
  if(openChatElement){
    console.log(openChatElement)
    openChatElement.click()
  }
  if (CloseChatElement){
      CloseChatElement.click()
  }
}
//


// Google Analytics
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5KML4S10YE');