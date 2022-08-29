console.log('lets play');
let selectSound=new Audio('src/click.wav');
let you;
let yourScore=0;
let opponent;
let opponentScore=0;
let choices=['rock','paper','scissor'];

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
    selectSound.play();
    you=this.id;
    document.getElementById('your-choice').src ='src/'+ you +'.png';
};