
const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = '20';



    const buttonCheck = document.querySelector('.button-check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
    //when player wins
    }else if(guess === secretNumber){
        // document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.body.style.backgroundColor = 'red';
        // document.querySelector('body').style.backgroundColor = '#D2DE32';
        document.querySelector('.number').style.width = '12rem';
    //when guess is too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost The Game';
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
            document.querySelector('.score').textContent = 0;
        }
    }
})




