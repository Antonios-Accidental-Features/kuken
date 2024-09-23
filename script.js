const jokeContainer = document.getElementById('jokeContainer');
const toggleButton = document.getElementById('toggleButton');
const jokeButton = document.getElementById('jokeButton');
const question = document.getElementById('question');
const answerButton = document.getElementById('answerButton');
const answerContainer = document.getElementById('answerContainer');
const answer = document.getElementById('answer');
const explanation = document.getElementById('explanation');
const jokeImage = document.getElementById('jokeImage');
const hideJokeButton = document.getElementById('hideJokeButton');

const kukenJokes = [
    { question: "Varför gick kuken över vägen?", answer: "För att komma till andra sidan!", explanation: "Ordlek med 'gå över vägen' som en hönsgrej och 'kuken' här relaterar till en tupp." },
    { question: "Vad sa kuken när den flög över staketet?", answer: "Kuckeliku!", explanation: "'Kuckeliku' är ett ljud en tupp gör, skämtsamt." },
    { question: "Hur kallar man en kuk som är bra på matte?", answer: "En räknehane!", explanation: "Ordlek med 'räkna' och 'hane' (tupp), vilket låter som 'räknare'." },
    { question: "Varför hade kuken på sig solglasögon?", answer: "För att han inte ville bli igenkänd!", explanation: "Skämt om att solglasögon används för att vara anonym." },
    { question: "Vad gör en kuk på ett bibliotek?", answer: "Läser hönsböcker!", explanation: "Ordlek där 'hönsböcker' refererar till något bara hönsfåglar skulle läsa." },
    { question: "Hur tränar en kuk?", answer: "Med tupplöpning!", explanation: "Ordlek med 'tupplöpning' som en form av träning för en tupp." },
    { question: "Vad kallas en kuk som jobbar som polis?", answer: "En tuppkonstapel!", explanation: "Ordlek där 'konstapel' är en polis och 'tupp' refererar till en tupp-polis." },
    { question: "Varför blev kuken arg på bonden?", answer: "För att han alltid gick och plockade på honom!", explanation: "Ordlek där 'plocka' betyder att irritera och även att plocka fjädrar." },
    { question: "Hur säger man 'god morgon' på kukspråket?", answer: "Kuckeliku!", explanation: "'Kuckeliku' är hur en tupp 'säger' god morgon." },
    { question: "Vad gör en kuk på semestern?", answer: "Soltuppar sig!", explanation: "Ordlek där 'soltuppa' refererar till att en tupp solar." },
    { question: "Hur ser en kuks favoritprogram ut?", answer: "Tuppens dagbok!", explanation: "Skämt om att en tupp skulle ha en TV-show, som en personlig dagbok." },
    { question: "Vad kallas en kuk som spelar fotboll?", answer: "En måltupp!", explanation: "Ordlek där 'måltupp' syftar på en tupp som gör mål." },
    { question: "Hur reagerar en kuk när den blir rädd?", answer: "Den får tuppjuck!", explanation: "Uttrycket 'tuppjuck' betyder att bli galen, här om en tupp blir rädd." },
    { question: "Vad heter kukarnas favoritband?", answer: "The Beakles!", explanation: "Ordlek med 'beak' (näbb) och 'Beatles'." },
    { question: "Hur dansar en kuk?", answer: "Han gör tuppjiggen!", explanation: "Ordlek där 'tuppjigg' är en dans som en tupp gör." },
    { question: "Vad gör en kuk på vintern?", answer: "Bygger en snötupp!", explanation: "Ordlek där 'snötupp' är som en snögubbe, fast en tupp." }
];

const dinMammaJokes = [
    { question: "Din mamma är så fet att...", answer: "När hon hoppar i poolen blir vattnet i andra änden blött!", explanation: "Skämt om att hon är så stor att hon påverkar hela poolen." },
    { question: "Din mamma är så gammal att...", answer: "Hon var servitris på Sista måltiden!", explanation: "Skämt om extrem ålder, med referens till Jesu sista måltid." },
    { question: "Din mamma är så dum att...", answer: "Hon trodde att Bluetooth var en pirat!", explanation: "Skämt om att blanda ihop modern teknik med ett piratnamn." },
    { question: "Din mamma är så lat att...", answer: "Hon tog rulltrappan till gymmet!", explanation: "Skämt om extrem lathet, att använda rulltrappa för att undvika ansträngning." },
    { question: "Din mamma är så kort att...", answer: "Hon använder en stege för att nå dörrhandtaget!", explanation: "Skämt om att hon är så kort att hon inte ens når dörren." },
    { question: "Din mamma är så smutsig att...", answer: "Till och med bakterierna flyr från henne!", explanation: "Skämt om att hon är så smutsig att bakterier inte ens vill vara där." },
    { question: "Din mamma är så fattig att...", answer: "Hon vänder på McDonalds-skylten för att se om det finns lediga jobb!", explanation: "Skämt om att hon är så fattig att hon desperat söker jobb." },
    { question: "Din mamma är så ful att...", answer: "När hon går in på en bank tror de att det är ett rån!", explanation: "Skämt om att hon är så ful att folk blir rädda." },
    { question: "Din mamma är så stark att...", answer: "Hon kan lyfta ett svart hål!", explanation: "Skämt om extrem styrka, att kunna lyfta något omöjligt." },
    { question: "Din mamma är så glömsk att...", answer: "Hon glömde att hon hade alzheimers!", explanation: "Skämt om extrem glömska, där man glömmer sin egen sjukdom." }
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
        jokeButton.textContent = 'Visa nytt skämt';
    } else if (isFirstJoke) {
        jokeButton.textContent = isKukenJoke ? 'Visa kuken-skämt' : 'Visa din mamma-skämt';
    } else {
        jokeButton.textContent = isKukenJoke ? 'Visa nytt kuken-skämt' : 'Visa nytt din mamma-skämt';
    }
}

function hideJoke() {
    jokeContainer.classList.add('hidden');
    answerContainer.classList.add('hidden');
    isJokeVisible = false;
    updateButtonText();
}

jokeButton.addEventListener('click', () => {
    if (isJokeVisible) {
        hideJoke();
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
    explanation.textContent = currentJoke.explanation;
    jokeImage.src = 'https://ggscore.com/media/logo/t62288.png?75';
    answerButton.classList.add('hidden');
});

hideJokeButton.addEventListener('click', hideJoke);

toggleButton.addEventListener('click', () => {
    isKukenJoke = !isKukenJoke;
    currentJokes = isKukenJoke ? kukenJokes : dinMammaJokes;
    isFirstJoke = true;
    hideJoke();
    toggleButton.textContent = isKukenJoke ? 'Byt till Din Mamma-skämt' : 'Byt till Kuken-skämt';
    updateButtonText();
});

layoutSelector.addEventListener('change', (event) => {
    const selectedLayout = event.target.value;
    
    // Remove all layout classes
    jokeContainer.className = 'container';
    
    // Add the selected layout class
    jokeContainer.classList.add(selectedLayout);
    
    // Reorganize elements for specific layouts
    reorganizeElements(selectedLayout);
});

function reorganizeElements(layout) {
    switch(layout) {
        case 'default':
        case 'vertical':
            // Reset to original structure
            jokeContainer.innerHTML = `
                <button id="toggleButton" class="btn btn-toggle">Byt till Din Mamma-skämt</button>
                <button id="jokeButton" class="btn">Visa kuken-skämt</button>
                <div id="jokeContainer" class="hidden">
                    <p id="question" class="question"></p>
                    <button id="answerButton" class="btn btn-secondary">Visa svaret</button>
                    <div id="answerContainer" class="hidden">
                        <p id="answer" class="answer"></p>
                        <p id="explanation" class="explanation"></p>
                        <img id="jokeImage" alt="Joke illustration" class="joke-image">
                        <button id="hideJokeButton" class="btn btn-hide">Dölj skämt</button>
                    </div>
                </div>
            `;
            break;
        case 'twoColumn':
            jokeContainer.innerHTML = `
                <div class="left-column">
                    <button id="toggleButton" class="btn btn-toggle">Byt till Din Mamma-skämt</button>
                    <button id="jokeButton" class="btn">Visa kuken-skämt</button>
                </div>
                <div class="right-column">
                    <div id="jokeContainer" class="hidden">
                        <p id="question" class="question"></p>
                        <button id="answerButton" class="btn btn-secondary">Visa svaret</button>
                        <div id="answerContainer" class="hidden">
                            <p id="answer" class="answer"></p>
                            <p id="explanation" class="explanation"></p>
                            <img id="jokeImage" alt="Joke illustration" class="joke-image">
                            <button id="hideJokeButton" class="btn btn-hide">Dölj skämt</button>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'card':
            // Similar to default, but with some restructuring
            jokeContainer.innerHTML = `
                <button id="toggleButton" class="btn btn-toggle">Byt till Din Mamma-skämt</button>
                <button id="jokeButton" class="btn">Visa kuken-skämt</button>
                <div id="jokeContainer" class="hidden">
                    <p id="question" class="question"></p>
                    <button id="answerButton" class="btn btn-secondary">Visa svaret</button>
                    <div id="answerContainer" class="hidden">
                        <p id="answer" class="answer"></p>
                        <p id="explanation" class="explanation"></p>
                        <img id="jokeImage" alt="Joke illustration" class="joke-image">
                    </div>
                </div>
                <button id="hideJokeButton" class="btn btn-hide">Dölj skämt</button>
            `;
            break;
    }
    
    // Reattach event listeners to new elements
    attachEventListeners();
}

function attachEventListeners() {
    // Reattach event listeners to potentially new elements
    document.getElementById('toggleButton').addEventListener('click', toggleJokeType);
    document.getElementById('jokeButton').addEventListener('click', showJoke);
    document.getElementById('answerButton').addEventListener('click', showAnswer);
    document.getElementById('hideJokeButton').addEventListener('click', hideJoke);
}

function toggleJokeType() {
    isKukenJoke = !isKukenJoke;
    currentJokes = isKukenJoke ? kukenJokes : dinMammaJokes;
    isFirstJoke = true;
    hideJoke();
    document.getElementById('toggleButton').textContent = isKukenJoke ? 'Byt till Din Mamma-skämt' : 'Byt till Kuken-skämt';
    updateButtonText();
}

function showJoke() {
    if (isJokeVisible) {
        hideJoke();
    } else {
        currentJoke = getRandomJoke();
        document.getElementById('jokeContainer').classList.remove('hidden');
        document.getElementById('question').textContent = currentJoke.question;
        document.getElementById('answerButton').classList.remove('hidden');
        document.getElementById('answerContainer').classList.add('hidden');
        isJokeVisible = true;
        
        if (isFirstJoke) {
            isFirstJoke = false;
        }
    }
    updateButtonText();
}

function showAnswer() {
    document.getElementById('answerContainer').classList.remove('hidden');
    document.getElementById('answer').textContent = currentJoke.answer;
    document.getElementById('explanation').textContent = currentJoke.explanation;
    document.getElementById('jokeImage').src = 'https://ggscore.com/media/logo/t62288.png?75';
    document.getElementById('answerButton').classList.add('hidden');
}

// Set the initial button text when the page loads
window.addEventListener('load', updateButtonText);
