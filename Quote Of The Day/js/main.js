var btn=document.getElementById('randomQuote')
var quotes=[
    {quote:'Make hunger thy sauce, as a medicine for health',
    author:'Thomas Tusser'},

    {quote:'Glory is fleeting, but obscurity is forever.',
    author:'Napoleon Bonaparte'},

    {quote:'Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity.',
    author:'Louis Pasteur '},

    {quote:'Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some donot turn up at all.',
    author:'Sam Ewing'},

    {quote:'Fiction is obliged to stick to possibilities. Truth isnot.',
    author:'Mark Twain'},

    {quote:'Fiction is obliged to stick to possibilities. Truth isnot.',
    author:'Mark Twain'},

    {quote:'To be willing to die for an idea is to set a rather high price on conjecture.',
    author:'Anatole France'}
    
        
      
]

btn.addEventListener('click',displayRandomQuote)


function displayRandomQuote()
{
var randomNumber = Math.floor(Math.random()*quotes.length);
document.getElementById('quote').innerHTML= 'Quote :'+quotes[randomNumber].quote
document.getElementById('author').innerHTML= 'Auther :'+quotes[randomNumber].author
}
