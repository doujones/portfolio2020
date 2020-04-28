const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
let c = document.querySelector(".clock");
let d = document.querySelector(".dates");


// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 83) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Smooth Scrolling
const scrollLinks = document.querySelector(".scroll-link");
scrollLinks.forEach((link) => {
link.addEventListener("click", (e) => {
    e.preventDefault();
    Links.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1)
    const element = document.getElementById(id);

if(navbar.classList.contains("fixed")){
  position = element.offsetTop - 62
}
else {
  position = element.offsetTop - 124
}
if (window.innerWidth < 992){
  if (navbar.classList.contains("fixed")){
      position = element.offsetTop - 62
      } else {
    position = element.offsetTop - 332 - 62
  }
}
    window.scrollTo({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth"
    })
  })
})

// Times and Dates
setInterval(() => {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let dates = today.toDateString();

  hh = (hh == 0) ? 12 : hh;
  hh = (hh > 12) ? hh - 12 : hh;

  c.innerText = `${helloWill(hh)} : ${helloWill(mm)} : ${helloWill(ss)}`;
  d.innerText = dates;
}, 1000);

function helloWill(n){
  return n.toString().padStart(2, "0");
}

// set year
date.innerHTML = new Date().getFullYear();
