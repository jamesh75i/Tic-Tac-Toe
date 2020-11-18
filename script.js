let containerDiv = document.querySelector('.container');

let userMessage = document.getElementById('user-message');

let popupMessage = document.querySelector('.popup');
let playAgainBtn = document.getElementById('play-again');


let score1El = document.getElementById('score-1');
let score2El = document.getElementById('score-2');
let score1 = 0;
let score2 = 0; 
let turn = 0;
playAgainBtn.addEventListener('click', ()=>{
    popupMessage.style.display = 'none';
});





let symbol; 

const createUI = function(){
    popupMessage.style.display = 'none';
    for(let i = 0; i < 3; i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for(let j = 0; j < 3; j++){
            let button = document.createElement('button');
            button.style.color = '#fff';
            button.style.background = '#37A447';
            button.className = "btn-play";
            rowDiv.appendChild(button);
        }
        containerDiv.appendChild(rowDiv);
    }
}



createUI();


//let trueOrFalse = trueOrFalse ? false : true;
let trueOrFalse = true;

let buttons = document.querySelectorAll('.btn-play');

buttons.forEach((element)=> {
    element.addEventListener('click', ()=>{
        
        if(element.innerText !== 'X' && element.innerText !== 'O'){
            turn++; 
            if(turn === 9) gameDraw();
            if(trueOrFalse){
                symbol = 'X'
                element.innerText = symbol;
                trueOrFalse = false;
                checkWin(symbol);
            }
            else{
                symbol = 'O';
                element.innerText = symbol;
                trueOrFalse = true;
                checkWin(symbol);
            }
        }
    });
});



let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', clearBoard);


function clearBoard(){
    buttons.forEach(element => {
        element.innerText = '';
    });
}

    




function checkWin(crossOrNought){
    //Across
    for(let i = 0; i < buttons.length; i+=3){
        if(buttons[i].innerHTML === crossOrNought && buttons[i + 1].innerHTML === crossOrNought){
            if(buttons[i + 1].innerHTML === buttons[i + 2].innerHTML){
                playAgain(crossOrNought);
            }
        }
    }
    //Down
    for(let i = 0; i < 3; i++){
        if(buttons[i].innerHTML === crossOrNought && buttons[i + 3].innerHTML === crossOrNought){
            if(buttons[i + 3].innerHTML === crossOrNought && buttons[i + 6].innerHTML === crossOrNought){
                
                playAgain(crossOrNought);
            }
        }
    }
    //diagonal right
    if(buttons[0].innerHTML === crossOrNought && buttons[4].innerHTML === crossOrNought){
        if(buttons[4].innerHTML === crossOrNought && buttons[8].innerHTML === crossOrNought){
        console.log(`${crossOrNought} You Win diagonal Right`);
            playAgain(crossOrNought);
        }
    }
    //diagonal Left
    if(buttons[2].innerHTML === crossOrNought &&  buttons[4].innerHTML === crossOrNought)
    {
        if(buttons[4].innerHTML === crossOrNought && buttons[6].innerHTML === crossOrNought){
            console.log(`${crossOrNought} You Win diagonal left`);
            playAgain(crossOrNought);
        }
    }
}


function playAgain(crossOrNought){
    setTimeout(()=>{
        popupMessage.style.display = 'flex';
        clearBoard();
    },1000)

    if(crossOrNought === 'X'){
        score1++;
        score1El.innerHTML = score1;
        userMessage.innerHTML = `${crossOrNought} You WIN!`;
    }
    if(crossOrNought === 'O'){
        score2++;
        score2El.innerHTML = score2;
        userMessage.innerHTML = `${crossOrNought} YOU WIN!`; 
    } 
    turn = 0;
    
}

function gameDraw(){
    turn = 0;
    clearBoard();
    userMessage.innerHTML = `ITS A DRAW!!!`; 
    popupMessage.style.display = 'flex';
}






