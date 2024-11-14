const button1 = document.getElementById('btn-1');
console.log(button1)
button1.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'red';
    button1.style.backgroundColor = 'grey';
}); 

const button2 = document.getElementById('btn-2');
button2.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'rgb(0, 255, 30)';
    button2.style.backgroundColor = 'grey';
}); 

const button3 = document.getElementById('btn-3');
button3.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'blue';
    button3.style.backgroundColor = 'grey';
}); 