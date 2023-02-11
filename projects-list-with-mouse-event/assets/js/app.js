
const innerProject = document.querySelector('.inner-project')
const details = document.querySelector('.mouse-details') 
innerProject.addEventListener('mousemove', (event)=>{
    let x = event.clientX;
    let y = event.clientY;

    details.style.left = x  + 'px';
    details.style.top = y + 'px';
    details.style.display = 'block'
})

innerProject.addEventListener('mouseleave', ()=>{
    details.style.display = 'none'
})