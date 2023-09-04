
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = '20';
let highscore = 0;


    const buttonCheck = document.querySelector('.button-check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
    //when player wins
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#D2DE32';
        document.querySelector('.guess').style.backgroundColor = '#D2DE32';
        document.querySelector('.number').style.width = '12rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //when guess is too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost The Game';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.guess').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        }

        //when guess is too low
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost The Game';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.guess').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        }
    }
})

    document.querySelector('.btn-again').addEventListener('click' , function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = '🎉 Start guessing ...';
    document.querySelector('.number').style.width = '6rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').style.backgroundColor = 'black';
    document.querySelector('.guess').value = '';
})


