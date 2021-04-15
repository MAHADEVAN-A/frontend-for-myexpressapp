var links = document.querySelectorAll('nav ul li')
var ultag = document.querySelector('nav ul')
var check = document.getElementById('check')



links.forEach((item)=>{
    item.addEventListener('click',()=>{
        ultag.classList.toggle("navtoggle")
        // ultag.style.left='0';
    })
})

check.addEventListener('change',()=>{
    ultag.classList.toggle("navtoggle")
})

// function handleChange(e){
//     console.log('mahadevan')
// }
console.log(links);
console.log(check);
console.log(ultag);

