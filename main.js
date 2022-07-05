const nav = document.querySelector('nav')

function showNav(){
    nav.classList.toggle('active');
    Search.classList.remove('search-active');
    cartsList.classList.remove('active');
}

const cartsList = document.querySelector('.cart-items-container')

function showCarts(){
    cartsList.classList.toggle('active');
    Search.classList.remove('search-active');
    nav.classList.remove('active');
}

const Search = document.querySelector('.search')

function showSearch(){
    Search.classList.toggle('search-active');
    cartsList.classList.remove('active');
    nav.classList.remove('active');
}

function hideBars(){
    Search.classList.remove('search-active');
    nav.classList.remove('active');
    cartsList.classList.remove('active');
}
onscroll= hideBars

let siteParts =document.getElementsByClassName('site-parts')

siteParts[1].onclick= ()=>{
    let sec=document.querySelector(".about")
    sec.scrollIntoView()
}
siteParts[2].onclick= ()=>{
    let sec=document.querySelector(".menu")
    sec.scrollIntoView()
}
siteParts[3].onclick= ()=>{
    let sec=document.querySelector(".products")
    sec.scrollIntoView()
}
siteParts[4].onclick= ()=>{
    let sec=document.querySelector(".reviews")
    sec.scrollIntoView()
}
siteParts[5].onclick= ()=>{
    let sec=document.querySelector(".contact")
    sec.scrollIntoView()
}
siteParts[6].onclick= ()=>{
    let sec=document.querySelector(".blogs")
    sec.scrollIntoView()
}
siteParts[8].onclick= ()=>{
    let sec=document.querySelector(".about")
    sec.scrollIntoView()
}
siteParts[9].onclick= ()=>{
    let sec=document.querySelector(".menu")
    sec.scrollIntoView()
}
siteParts[10].onclick= ()=>{
    let sec=document.querySelector(".products")
    sec.scrollIntoView()
}
siteParts[11].onclick= ()=>{
    let sec=document.querySelector(".reviews")
    sec.scrollIntoView()
}
siteParts[12].onclick= ()=>{
    let sec=document.querySelector(".contact")
    sec.scrollIntoView()
}
siteParts[13].onclick= ()=>{
    let sec=document.querySelector(".blogs")
    sec.scrollIntoView()
}