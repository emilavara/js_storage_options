const input = document.getElementById('haha');
const testbtn = document.getElementById('testbtn')

//hämta variabler från url strängen
const params = new URLSearchParams(window.location.search);

//hämta namn variabel från url strängen
let inputName = params.get('name');

testbtn.addEventListener('click', () => {
    //byt sida till test.html med name som parameter och värdet från input-fältet
    window.location.href = '/test.html?name=' + input.value; 
})
