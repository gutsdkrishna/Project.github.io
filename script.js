const activepage = window.location.pathname;
const navlink = document.querySelectorAll('.nav-option .opts')


    //   make hover effect visible after page change 

let myarray = Array.from(navlink)
if(activepage=='/MHM-Project/'){
    myarray.forEach(link=>{
        if(link.firstChild.href.includes(`${activepage}`)){
            link.classList.remove('active')
        }
    })
}else{
    myarray.forEach(link=>{
        if(link.firstChild.href.includes(`${activepage}`)){
            link.classList.add('active')
        }
    })
}



      // MAke navbars working
const navbar=document.querySelector('.nav-bars')
const navitem = document.querySelector('.nav-option')

navbar.addEventListener('click',()=>{
    navitem.classList.toggle('show')
    console.log('clicked')
})
