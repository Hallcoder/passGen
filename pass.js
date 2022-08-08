let para = document.getElementById('paragraph');
let button = document.getElementById('button');
let header = document.getElementsByTagName('h1');
let audio  = document.getElementsByTagName('audio');

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let specialChars = ['&','$','?',',','_','"']
let numbers = [1,2,3,4,5,6,7,8,9]
button.addEventListener('click',()=>{
    
    const interval = setInterval(()=>{
    audio[0].play();
    let  password ='';
    password = takeOutElements(letters,4) + takeOutElements(specialChars,2) + takeOutElements(numbers,2);
    para.innerHTML = password;
        setTimeout(() => {
            header[0].style.display = 'block'
            clearInterval(interval)
            // audio[0].pause()
      }, 2000);  
    },50)
})

function takeOutElements(array,nOfElements){
   let choosen='';  
        for(j=0;j<nOfElements;j++){ 
            choosen += array[Math.floor(Math.random()*(array.length-1))]
    }
   return choosen;
}