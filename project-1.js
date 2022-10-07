//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: ` " Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty."` ,
    person: `Mahatma Gandhi`
},
{
    quote:`“To deny people their human rights is to challenge their very humanity.” `,
    person: `Nelson Mandela`
},
{
    quote:`“Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.” `,
    person:`Dalai Lama`
},
{
    quote: `What is tolerance? It is the consequence of humanity. We are all formed of frailty and error; let us pardon reciprocally each other’s folly – that is the first law of nature.”`,
    person: `Voltaire`
},
{
    quote: `“One way or another, we all have to find what best fosters the flowering of our humanity in this contemporary life, and dedicate ourselves to that.” `,
    person: `Joseph Cambell`
}
];
btn.addEventListener('click',  function(){
    let random  = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})