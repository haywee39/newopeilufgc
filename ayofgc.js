
  // Typewriter Effect
  const text1 = "FOURSQUARE GOSPEL CHURCH";
  const text2 = "OPEILU ZONAL HEADQUATERS";
  const text3 = "Chapel of the Empowered"
  
  const typingSpeed = 75;
  let i = 0;
  let j = 0;
  let k = 0;
  
  function typeWriter1() {
    const textElement1 = document.getElementById("text");
    if (i < text1.length) {
      textElement1.textContent += text1.charAt(i);
      i++;
      setTimeout(typeWriter1, typingSpeed);
    } else {
      setTimeout(typeWriter2, 450); // Delay before starting the second typewriter
    }
  }
  
  function typeWriter2() {
    const textElement2 = document.getElementById("desc");
    if (j < text2.length) {
      textElement2.textContent += text2.charAt(j);
      j++;
      setTimeout(typeWriter2, typingSpeed);
    } else {
      setTimeout(typeWriter3, 450);
    }
  }

  function typeWriter3() {
    const textElement3 = document.getElementById("slogan");
    if (k < text3.length) {
      textElement3.textContent += text3.charAt(k);
      k++;
      setTimeout(typeWriter3, typingSpeed);
    }
  }
  
  //  Background Image Rotator
  const backgroundImages = [
    // "./backgrdimg/backgrd.jpg",
    "./backgrdimg/back1.jpg",
    "./backgrdimg/mic-conf.jpg",
    "./backgrdimg/conf-seat.jpg",  
    "./backgrdimg/cong1.jpg"  
  ];
  
  let currentImageIndex = 0;
  
  function rotateBackground() {
    const homeSection = document.getElementById("home");
    homeSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Loop through images
  }
  
  window.onload = () => {
    typeWriter1();
    rotateBackground();
    setInterval(rotateBackground, 3000); // Change background every 5 seconds
  };

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7
    
// THIS SECTION IS USED FOR THE DISPLAY OF DAY, MONTH, YEAR FOR CHURCH ACTIVITIES ON THE DIV:class="monthly-theme" 
var today= new Date()
days= today.getDay()
var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 nameOfDay = weeks[today.getDay()]
day= today.getDate()
const month= today.toLocaleString('default',{month: 'long'})
const year= today.getFullYear()
formatDate = `${nameOfDay.toUpperCase()}, ${day} ${month.toUpperCase()}  ${year} `
document.getElementById('thisMonth').innerHTML=formatDate

// JS FOR THE GALLERY LIGHTBOX DISPLAY
function openLightbox(imageSrc) {
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }


  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   // YEAR THEME SCROL IN FROM LEFT 
   document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".vid-left");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});

// ************************************************************
 // MONTH THEME SCROL IN FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".vid-ryt");

  function handleScroll() {
      profiles.forEach((profile, index) => {
          const rect = profile.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom >= 0) {
              setTimeout(() => {
                  profile.classList.add("visible");
              }, index * 150); // Stagger effect by 150ms for each profile
          } else if (rect.top > windowHeight || rect.bottom < 0) {
           profile.classList.remove("visible"); // Remove visible class if scrolled out
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on load in case items are already in view
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  // YEAR THEME SCROL IN FROM LEFT 
  document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".theme-year");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});

// ************************************************************
 // MONTH THEME SCROL IN FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".theme-month");

  function handleScroll() {
      profiles.forEach((profile, index) => {
          const rect = profile.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom >= 0) {
              setTimeout(() => {
                  profile.classList.add("visible");
              }, index * 150); // Stagger effect by 150ms for each profile
          } else if (rect.top > windowHeight || rect.bottom < 0) {
           profile.classList.remove("visible"); // Remove visible class if scrolled out
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on load in case items are already in view
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77

// YEAR THEME SCROL IN FROM LEFT 
document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".testy1");

  function handleScroll() {
      profiles.forEach((profile, index) => {
          const rect = profile.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom >= 0) {
              setTimeout(() => {
                  profile.classList.add("visible");
              }, index * 150); // Stagger effect by 150ms for each profile
          } else if (rect.top > windowHeight || rect.bottom < 0) {
           profile.classList.remove("visible"); // Remove visible class if scrolled out
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on load in case items are already in view
});

// ************************************************************
// MONTH THEME SCROL IN FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
const profiles = document.querySelectorAll(".testy2");

function handleScroll() {
    profiles.forEach((profile, index) => {
        const rect = profile.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
            setTimeout(() => {
                profile.classList.add("visible");
            }, index * 150); // Stagger effect by 150ms for each profile
        } else if (rect.top > windowHeight || rect.bottom < 0) {
         profile.classList.remove("visible"); // Remove visible class if scrolled out
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Run once on load in case items are already in view
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77
// YEAR THEME SCROL IN FROM LEFT 
document.addEventListener("DOMContentLoaded", function () {
  const profiles = document.querySelectorAll(".live-stream");

  function handleScroll() {
      profiles.forEach((profile, index) => {
          const rect = profile.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom >= 0) {
              setTimeout(() => {
                  profile.classList.add("visible");
              }, index * 150); // Stagger effect by 150ms for each profile
          } else if (rect.top > windowHeight || rect.bottom < 0) {
           profile.classList.remove("visible"); // Remove visible class if scrolled out
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on load in case items are already in view
});

// ************************************************************
// MONTH THEME SCROL IN FROM RIGHT 
document.addEventListener("DOMContentLoaded", function () {
const profiles = document.querySelectorAll(".weekActs");

function handleScroll() {
    profiles.forEach((profile, index) => {
        const rect = profile.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
            setTimeout(() => {
                profile.classList.add("visible");
            }, index * 150); // Stagger effect by 150ms for each profile
        } else if (rect.top > windowHeight || rect.bottom < 0) {
         profile.classList.remove("visible"); // Remove visible class if scrolled out
        }
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Run once on load in case items are already in view
});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77