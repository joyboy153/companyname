const togglebtn = document.querySelector('.toggle-btn')
const togglebtnicon = document.querySelector('.toggle-btn i')
const deopdownmenu = document.querySelector('.drop-down-menu')

togglebtn.onclick = function(){
    deopdownmenu.classList.toggle('open')
    const isopen = deopdownmenu.classList.contains('open') 

    togglebtnicon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
}