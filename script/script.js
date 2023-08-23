
// const menuBtn = document.querySelector('.fa-bars');
// const closeBtn = document.querySelector('.fa-times');
// const navlist = document.querySelector('.navlist');

// //if bar is clicked navbar should open
// menuBtn.addEventListener('click',()=>{
//     navlist.style.width = '250px';
// })


// //if close is clicked navbar should close
// closeBtn.addEventListener('click',()=>{
//     navlist.style.width = '0';
// })

const menuBtn = document.querySelector('.fa-bars'); 
const closeBtn = document.querySelector('.fa-times');
const navlist = document.querySelector('.navlist'); 

//if bar is clicked navbar should open
menuBtn.addEventListener('click', () => {
    navlist.style.width = '250px';
})

//if close is clicked navbar should close
closeBtn.addEventListener('click', () => {
    navlist.style.width = 0;
})
