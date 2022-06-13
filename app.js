const text = document.querySelector('.text');
const card = document.querySelector('.card')
const dicee = document.querySelector('.dice')
console.log(text)
const baseUrl = 'https://api.adviceslip.com/advice'



dicee.addEventListener("click", myFunction);

function myFunction() {
    dicee.classList.toggle('new_dice')
    console.log('hello')
}

dicee.addEventListener('click', (event) => {
   event.preventDefault()
        const madeUrl = `${baseUrl}`
   console.log(madeUrl)   
   getData(baseUrl)

})

const getData = async(url) => {
    try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data.slip.advice);
      text.innerHTML = `" ${data.slip.advice}"`;
      card.innerHTML = `ADVICE #${data.slip.id}`;
    }
    catch(e){
        console.log(e)
    }
}
