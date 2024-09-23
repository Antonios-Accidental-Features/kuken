const toggleButton = document.getElementById('toggleButton');
const jokeButton = document.getElementById('jokeButton');
const jokeContainer = document.getElementById('jokeContainer');
const question = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const answerContainer = document.getElementById('answerContainer');
const answer = document.getElementById('answer');
const jokeImage = document.getElementById('jokeImage');

const kukenJokes = [
    { question: "Varför gick kuken över vägen?", answer: "För att komma till andra sidan!" },
    { question: "Vad sa kuken när den flög över staketet?", answer: "Kuckeliku!" },
    { question: "Hur kallar man en kuk som är bra på matte?", answer: "En räknehane!" },
    { question: "Varför hade kuken på sig solglasögon?", answer: "För att han inte ville bli igenkänd!" },
    { question: "Vad gör en kuk på ett bibliotek?", answer: "Läser hönsböcker!" },
    { question: "Hur tränar en kuk?", answer: "Med tupplöpning!" },
    { question: "Vad kallas en kuk som jobbar som polis?", answer: "En tuppkonstapel!" },
    { question: "Varför blev kuken arg på bonden?", answer: "För att han alltid gick och plockade på honom!" },
    { question: "Hur säger man 'god morgon' på kukspråket?", answer: "Kuckeliku!" },
    { question: "Vad gör en kuk på semestern?", answer: "Soltuppar sig!" },
    { question: "Hur ser en kuks favoritprogram ut?", answer: "Tuppens dagbok!" },
    { question: "Vad kallas en kuk som spelar fotboll?", answer: "En måltupp!" },
    { question: "Hur reagerar en kuk när den blir rädd?", answer: "Den får tuppjuck!" },
    { question: "Vad heter kukarnas favoritband?", answer: "The Beakles!" },
    { question: "Hur dansar en kuk?", answer: "Han gör tuppjiggen!" },
    { question: "Vad gör en kuk på vintern?", answer: "Bygger en snötupp!" }
];

const dinMammaJokes = [
    { question: "Din mamma är så fet att...", answer: "När hon hoppar i poolen blir vattnet i andra änden blött!" },
    { question: "Din mamma är så gammal att...", answer: "Hon var servitris på Sista måltiden!" },
    { question: "Din mamma är så dum att...", answer: "Hon trodde att Bluetooth var en pirat!" },
    { question: "Din mamma är så lat att...", answer: "Hon tog rulltrappan till gymmet!" },
    { question: "Din mamma är så kort att...", answer: "Hon använder en stege för att nå dörrhandtaget!" },
    { question: "Din mamma är så smutsig att...", answer: "Till och med bakterierna flyr från henne!" },
    { question: "Din mamma är så fattig att...", answer: "Hon vänder på McDonalds-skylten för att se om det finns lediga jobb!" },
    { question: "Din mamma är så ful att...", answer: "När hon går in på en bank tror de att det är ett rån!" },
    { question: "Din mamma är så stark att...", answer: "Hon kan lyfta ett svart hål!" },
    { question: "Din mamma är så glömsk att...", answer: "Hon glömde att hon hade alzheimers!" }
];

let currentJokes = kukenJokes;
let currentJoke;
let isJokeVisible = false;
let isFirstJoke = true;
let isKukenJoke = true;

function getRandomJoke() {
    return currentJokes[Math.floor(Math.random() * currentJokes.length)];
}

function updateButtonText() {
    if (isJokeVisible) {
        jokeButton.textContent = 'Dölj skämt';
    } else if (isFirstJoke) {
        jokeButton.textContent = isKukenJoke ? 'Visa kuken-skämt' : 'Visa din mamma-skämt';
    } else {
        jokeButton.textContent = isKukenJoke ? 'Visa nytt kuken-skämt' : 'Visa nytt din mamma-skämt';
    }
}

jokeButton.addEventListener('click', () => {
    if (isJokeVisible) {
        jokeContainer.classList.add('hidden');
        answerContainer.classList.add('hidden');
        isJokeVisible = false;
    } else {
        currentJoke = getRandomJoke();
        jokeContainer.classList.remove('hidden');
        question.textContent = currentJoke.question;
        answerButton.classList.remove('hidden');
        answerContainer.classList.add('hidden');
        isJokeVisible = true;
        
        if (isFirstJoke) {
            isFirstJoke = false;
        }
    }
    updateButtonText();
});

answerButton.addEventListener('click', () => {
    answerContainer.classList.remove('hidden');
    answer.textContent = currentJoke.answer;
    jokeImage.src = 'https://ggscore.com/media/logo/t62288.png?75';
    answerButton.classList.add('hidden');
});

toggleButton.addEventListener('click', () => {
    isKukenJoke = !isKukenJoke;
    currentJokes = isKukenJoke ? kukenJokes : dinMammaJokes;
    isFirstJoke = true;
    isJokeVisible = false;
    jokeContainer.classList.add('hidden');
    answerContainer.classList.add('hidden');
    toggleButton.textContent = isKukenJoke ? 'Byt till Din Mamma-skämt' : 'Byt till Kuken-skämt';
    updateButtonText();
});

// Set the initial button text when the page loads
window.addEventListener('load', updateButtonText);
