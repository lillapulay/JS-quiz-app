const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // If localStorage is empty, initializes an array
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score) /* Sorts the array - biggest to lowest */   
    
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
    
    console.log(highScores);
}