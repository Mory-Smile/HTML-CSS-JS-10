// JS

//                  Show & Hide Menu Items

let navBar = document.querySelector(".navbar");
let cartItem = document.querySelector(".cart-items-container");
let searchForm = document.querySelector(".search-form");

let menuBtn = document.querySelector("#menu-btn");

document.querySelector("#menu-btn").onclick = () => {
  navBar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartBtn = document.querySelector("#cart-btn");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navBar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  navBar.classList.remove("active");
  cartItem.classList.remove("active");
});

window.onscroll = () => {
  navBar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

//                 Show & Hide Product Item

let icon1 = document.querySelector(".eyeMe1");
let imgContent1 = document.querySelector(".image-content-container1");

icon1.addEventListener("click", () => {
  imgContent1.classList.toggle("active");
  icon1.classList.toggle("active");
});

let icon2 = document.querySelector(".eyeMe2");
let imgContent2 = document.querySelector(".image-content-container2");

icon2.addEventListener("click", () => {
  imgContent2.classList.toggle("active");
  icon2.classList.toggle("active");
});

let icon3 = document.querySelector(".eyeMe3");
let imgContent3 = document.querySelector(".image-content-container3");

icon3.addEventListener("click", () => {
  imgContent3.classList.toggle("active");
  icon3.classList.toggle("active");
});

//                 Add Red Heart To The Items

let heart1 = document.querySelector(".heartMe1");
heart1.addEventListener("click", () => {
  heart1.classList.toggle("active");
});

let heart2 = document.querySelector(".heartMe2");
heart2.addEventListener("click", () => {
  heart2.classList.toggle("active");
});

let heart3 = document.querySelector(".heartMe3");
heart3.addEventListener("click", () => {
  heart3.classList.toggle("active");
});
