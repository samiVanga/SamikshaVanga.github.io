window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    //document.getElementById("navbar").classList.remove('dark');
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Typing effect function
function typeEffect(element, text, speed) {
  let i = 0;
  function type() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
      } else {
          element.classList.add('typing-cursor'); // Add blinking cursor
      }
  }
  type();
}

// Text content
const headerText = "Hello! I'm Samiksha Vanga";
const paraText = "I am currently a final year Computer Science student at the University of Nottingham";

// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.getElementById('typing-text');
  const paraElement = document.getElementById('typing-para');

  // Start typing effect
  if (headerElement && paraElement) {
      typeEffect(headerElement, headerText, 50);
      setTimeout(() => typeEffect(paraElement, paraText, 30), headerText.length * 50 + 500);
  }
});
