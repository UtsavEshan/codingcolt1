let x = document.getElementsByClassName('step');
let y = document.getElementsByClassName('next');
const z = document.getElementsByClassName('submit');

let s = 0
x[s].style.display ='inline'
y[s].addEventListener('click',function(){
    let n = 0
     n++ 
     console.log(n)
     x[n].style.display = "inline"
     x[n-1].style.display= 'none'
     s++
     y[s].addEventListener('click',function(){
         n++ 
         console.log(n)
         x[n].style.display = "inline"
         x[n-1].style.display= 'none'
         s++
         y[s].addEventListener('click',function(){
             n++ 
             console.log(n)
             x[n].style.display = "inline"
             x[n-1].style.display= 'none'
             s++
            })
   })
})


z[0].addEventListener('click', function(){
   let thank = document.getElementsByClassName('thank')
let form = document.getElementsByClassName('form')
form[0].style.display="none"
thank[0].style.display="flex"
})


//