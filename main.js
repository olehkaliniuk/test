const input = document.getElementById("input")
const btn = document.getElementById("btn")

const list = document.getElementById('list')

btn.addEventListener('click', addFunction)

function addFunction(){

    if(input.value != ''){
        console.log(input.value)
        
        const listElemt = document.createElement("li")
        listElemt.textContent = input.value
        list.appendChild(listElemt)
        input.value = ''
    }



}