const panels = document.querySelectorAll('.panel');

panels.forEach ((whats)=>{
 whats.addEventListener('click',()=>{
     removeclassactive();
  whats.classList.add('active');

 })

})
removeclassactive=()=>{
 panels.forEach((pan)=>{
 pan.classList.remove('active')
 })

}