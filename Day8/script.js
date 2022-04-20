const name =document.getElementById('name')
const passward =document.getElementById('passward')
const form=document.getElementById('form')
const error element=document.getElementById('error')
 

form.addEventListener('submit',(e) =>{
let message[]
if(name.value == '' || name.value ==null){
    message.push ('name is required')
}
if(passward.value.length <=6){ 
    message.push(passward must  longer then 6 characters)
}
if(passward.value.length >=20){ 
    message.push(passward must  longer then 20 characters)
}
if(message.value.length >0){ 
    e.preventDefault()
    errorelement.innertext = message.join(',')
}
})


