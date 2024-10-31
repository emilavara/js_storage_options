const input = document.getElementById('haha')
const btn = document.getElementById('testbtn')

const obj = {
    blabla: 'BLABLA'
}

btn.addEventListener('click', function() {
    //sätter key till value
    localStorage.setItem('category', JSON.stringify(obj))
})

//hämtar key in i en varabel
const nameValue = localStorage.getItem('category');

console.log(JSON.parse(nameValue))