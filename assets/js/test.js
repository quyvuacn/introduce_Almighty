var users = document.querySelectorAll('.user')
var hr = document.getElementsByClassName('hr')
var names= document.querySelectorAll('.name')

for (const user of users){
    user.addEventListener('mousemove',function(){
         length = (user.className.length)-1
         i = user.className[length]
         hr[i-1].style.display = 'block'      
    })
}

for (const user of users){
    user.addEventListener('mouseout',function(){
         length = (user.className.length)-1
         i = user.className[length]
         hr[i-1].style.display = 'none'  
               
    })
}  

for (const name of names){
    name.addEventListener('mousemove',function(){
         length = (name.className.length)-1
         i = name.className[length]
         hr[i-1].style.display = 'block'      
    })
}

for (const name of names){
    name.addEventListener('mouseout',function(){
         length = (name.className.length)-1
         i = name.className[length]
         hr[i-1].style.display = 'none'  
               
    })
}  