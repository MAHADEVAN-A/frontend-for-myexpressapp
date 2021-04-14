var links = document.querySelectorAll('nav ul li')
var ultag = document.querySelector('nav ul')
var check = document.getElementById('check')
links.forEach((item)=>{
    item.addEventListener('click',()=>{
        ultag.style.left='-100%';
        // ultag.style.left='0';
    })
})

// check.addEventListener('change',()=>{
//     console.log('mahadevan');
//     // if(ultag.style.left=='-100%'){
//     //     ultag.style.left='0';
//     // }
//     // else{
//     //     ultag.style.left='-100%';
//     // }
// })

// function handleChange(e){
//     console.log('mahadevan')
// }
console.log(links);
console.log(check);
console.log(ultag);

