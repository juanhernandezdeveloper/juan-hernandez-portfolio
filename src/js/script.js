const blight = document.querySelector('#blight');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer')
const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".navi-ul");
const sendEmail = document.getElementById('send-email');

blight.addEventListener('click', e =>{
  body.classList.toggle('lightmode');
  header.classList.toggle('lightmode1');
  footer.classList.toggle('lightmode2');
});

hamburguer.addEventListener("click", responsive);

function responsive(){
    navMenu.classList.toggle("active");
}

const myImages = document.getElementById("my-pics");

let countImg = 0;

const Images = [];

Images[0] = "Juan-in-Barcelona.jpg";
Images[1] = "Juan-in-family.jpg";
Images[2] = "Juan-in-modena.jpg";
Images[3] = "Juan-in-Paris.jpg";
Images[4] = "Juan-in-Venecia.jpg";
Images[5] = "Juan-MTB.jpg";
Images[6] = "Juan.jpg";
Images[7] = "The-whole-family.jpg";

setInterval(function() {
  myImages.src = `images/${Images[countImg]}`;
  if (countImg < Images.length -1) {
    countImg++;
  } else {
    countImg = 0;
  }
}, 3000);


sendEmail.addEventListener('click', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  window.location.href=`mailto:jualherac@gmail.com?
  Subject=sendFromMyForm&body=Name%3A${name}%0AEmail%3A${email}%0ASubject%3A${subject}%0AMessage%3A${message}`;
});