//Game variable
let youWinSound=new Audio('src/youWin.wav');
let opponentWinSound=new Audio('src/opponentWin.wav');
let you;
let yourScore=0;
let opponent;
let opponentScore=0;
let choices=['rock','paper','scissor'];

//Game functions
window.onload=()=>{
    for (let i = 0; i < 3; i++) {
        //<img id='rock' src='rock.png'>
        let choice=document.createElement('img');
        choice.id=choices[i];
        choice.src='src/'+choices[i]+'.png';
        choice.addEventListener('click',selectChoice);
        document.getElementById('choices').append(choice);
    }
}
function selectChoice(){
    you=this.id;
    document.getElementById('your-choice').src ='src/'+ you +'.png';

    //Random for opponent
    opponent=choices[Math.floor(Math.random()*3)]; //0-0.9999*3=0-2.9999
    document.getElementById('opponent-choice').src='src/'+ opponent +'.png';

    //Check for winner
    if(you==opponent){
        yourScore+=1;
        opponentScore+=1;
        youWinSound.play();
    }
    else{
        if(you=='rock' && opponent=='paper'){
            opponentScore+=1;
            opponentWinSound.play();
        }
        else if(you=='paper' && opponent=='scissor'){
            opponentScore+=1;
            opponentWinSound.play();
        }
        else if(you=='scissor' && opponent=='rock'){
            opponentScore+=1;
            opponentWinSound.play();
        }
        else if(you=='paper' && opponent=='rock'){
            yourScore+=1;
            youWinSound.play();
        }
        else if(you=='scissor' && opponent=='paper'){
            yourScore+=1;
            youWinSound.play();
        }
        else if (you=='rock' && opponent=='scissor'){
            yourScore+=1;
            youWinSound.play();
        }
    }
    document.getElementById('your-score').innerText='YOU : '+yourScore;
    document.getElementById('opponent-score').innerText='PC : '+ opponentScore;
}