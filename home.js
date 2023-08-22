const clothbtn = document.querySelector('.clothbtn')
const clothbtni = document.querySelector('.clothbtn i')
const cloths = document.querySelector('.cloth1')
const salebtn = document.querySelector('.salebtn')
const salebtni = document.querySelector('.salebtn i')
const sales = document.querySelector('.sale1')
const sportbtn = document.querySelector('.sportbtn')
const sportbtni = document.querySelector('.sportbtn i')
const sports = document.querySelector('.sport1')
const technobtn = document.querySelector('.technobtn')
const technobtni = document.querySelector('.technobtn i')
const technos = document.querySelector('.techno1')

clothbtn.onclick = function(){
    cloths.classList.toggle('open')
    sales.classList.remove('open')
    sports.classList.remove('open')
    technos.classList.remove('open')
}

salebtn.onclick = function(){
    sales.classList.toggle('open')
    cloths.classList.remove('open')
    sports.classList.remove('open')
    technos.classList.remove('open')
}

sportbtn.onclick = function(){
    sports.classList.toggle('open')
    sales.classList.remove('open')
    cloths.classList.remove('open')
    technos.classList.remove('open')
}

technobtn.onclick = function(){
    technos.classList.toggle('open')
    sales.classList.remove('open')
    sports.classList.remove('open')
    cloths.classList.remove('open')
}