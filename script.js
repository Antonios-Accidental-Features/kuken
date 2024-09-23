const jokeButton = document.getElementById('jokeButton');
const jokeContainer = document.getElementById('jokeContainer');
const question = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const answerContainer = document.getElementById('answerContainer');
const answer = document.getElementById('answer');
const jokeImage = document.getElementById('jokeImage');

const jokes = [
    {
        question: "Varför gick kuken över vägen?",
        answer: "För att komma till andra sidan!"
    },
    {
        question: "Vad sa kuken när den flög över staketet?",
        answer: "Kuckeliku!"
    },
    {
        question: "Hur kallar man en kuk som är bra på matte?",
        answer: "En räknehane!"
    },
    {
        question: "Varför hade kuken på sig solglasögon?",
        answer: "För att han inte ville bli igenkänd!"
    },
    {
        question: "Vad gör en kuk på ett bibliotek?",
        answer: "Läser hönsböcker!"
    },
    {
        question: "Hur tränar en kuk?",
        answer: "Med tupplöpning!"
    }
];

let currentJoke;
let isJokeVisible = false;

function getRandomJoke() {
    return jokes[Math.floor(Math.random() * jokes.length)];
}

jokeButton.addEventListener('click', () => {
    if (isJokeVisible) {
        jokeContainer.classList.add('hidden');
        answerContainer.classList.add('hidden');
        jokeButton.textContent = 'Visa nytt kuken-skämt';
        isJokeVisible = false;
    } else {
        currentJoke = getRandomJoke();
        jokeContainer.classList.remove('hidden');
        question.textContent = currentJoke.question;
        answerButton.classList.remove('hidden');
        jokeButton.textContent = 'Dölj skämt';
        isJokeVisible = true;
    }
});

answerButton.addEventListener('click', () => {
    answerContainer.classList.remove('hidden');
    answer.textContent = currentJoke.answer;
    jokeImage.src = 'https://ggscore.com/media/logo/t62288.png?75';
    answerButton.classList.add('hidden');
});
