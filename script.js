const jokeButton = document.getElementById('jokeButton');
const jokeContainer = document.getElementById('jokeContainer');
const question = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const answerContainer = document.getElementById('answerContainer');
const answer = document.getElementById('answer');
const jokeImage = document.getElementById('jokeImage');

const joke = {
    question: "Varför gick kuken över vägen?",
    answer: "För att komma till andra sidan!"
};

let isJokeVisible = false;

jokeButton.addEventListener('click', () => {
    if (isJokeVisible) {
        jokeContainer.classList.add('hidden');
        answerContainer.classList.add('hidden');
        jokeButton.textContent = 'Visa kuken-skämt';
        isJokeVisible = false;
    } else {
        jokeContainer.classList.remove('hidden');
        question.textContent = joke.question;
        answerButton.classList.remove('hidden');
        jokeButton.textContent = 'Dölj skämt';
        isJokeVisible = true;
    }
});

answerButton.addEventListener('click', () => {
    answerContainer.classList.remove('hidden');
    answer.textContent = joke.answer;
    jokeImage.src = 'https://ggscore.com/media/logo/t62288.png?75';
    answerButton.classList.add('hidden');
});
