function ageInDays(){
    var year=prompt("Enter the year you were born");
    var days=(2020-year)*365;
    var h1=document.createElement('h1');
    var answer=document.createTextNode("Your age is "+days+" in days.");
    h1.setAttribute("id","text-result");
    h1.appendChild(answer);
    document.getElementById("flex-result").appendChild(h1);
}

function reset(){
    document.getElementById('text-result').remove();
}

function generate(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-box-gen');
    image.src="static/images/scene.jpg";
    div.appendChild(image);
}


//stone paper scissor

function rpsGame(yourChoice){
    var humanChoice=yourChoice.id;
    var botChoice=numberToChoice(randToRpsInt());
    
    console.log(humanChoice);
    console.log(botChoice);
    var results=decideWinner(humanChoice,botChoice);
    console.log(results);
    var message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message)
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(no){
    return ['rock','paper','scissors'][no];
}

function decideWinner(humanChoice,computerChoice){
    var rpsDatabse={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
    var yourScore=rpsDatabse[humanChoice][computerChoice];
    var computerScore=rpsDatabse[computerChoice][humanChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 1){
        return {'message':'You won','color':'green'};
    }
    else if(yourScore === 0.5){
        return {'message':'You tied','color':'yellow'};
    }
    else{
        return {'message':'You lost','color':'red'};
    }
}

function rpsFrontEnd(humanChoice,computerChoice,message){
    var imagesdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    humanDiv=document.createElement('div');
    msgDiv=document.createElement('div');
    computerDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesdatabase[humanChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    msgDiv.innerHTML="<h1 style='color:"+message['color']+";font-size:60px;padding:30px;'>"+message['message']+"</h1>"
    computerDiv.innerHTML="<img src='" + imagesdatabase[computerChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(msgDiv);
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);
}