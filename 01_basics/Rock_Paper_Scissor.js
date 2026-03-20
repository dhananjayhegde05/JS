<!DOCTYPE html>
<html>
<head>
  <title>RPC</title>
  <style>
    
  </style>
</head>
<body>
  <p> Rock Paper Scissor </p>
  <button onclick="
    playRPC('rock');
  ">Rock</button>

<button onclick="
  playRPC('paper');
">Paper</button>

<button onclick="
    playRPC('sissors');
  ">Scissor</button>
  
<button onclick="
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;

  localStorage.removeItem('score');
">Reset Score</button>
  
  <script>
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins : 0,
      losses : 0,
      tie : 0
    };

    /*
    if(score === null){
      score = {
        wins : 0,
        losses : 0,
        tie : 0
      };

    }
    */

   function playRPC(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'sissors'){
      if(computerMove === 'rock') {
      result = 'you lose';
    }
    else if(computerMove === 'paper'){
      result = 'you win';
    }
    else if(computerMove === 'scissors'){
      result = 'tie'
    }
    }
    else if(playerMove === 'paper'){
      if(computerMove === 'rock') {
        result = 'you win';
      }
      else if(computerMove === 'paper'){
        result = 'tie';
      }
      else if(computerMove === 'scissors'){
        result = 'you lose'
      }
    }
    
    else if(playerMove === 'rock'){
      if(computerMove === 'rock') {
      result = 'tie';
    }
    else if(computerMove === 'paper'){
      result = 'you lose';
    }
    else if(computerMove === 'scissors'){
      result = 'you win'
    }
    }
    
    if (result === 'you win'){
      score.wins +=1;
    }
    else if(result === 'you lose'){
      score.losses += 1;
    }
    else if(result === 'tie'){
      score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    alert(`you picked ${playerMove} and computer picked ${computerMove}.${result}
    Wins :${score.wins}, Losses:${score.losses},Tie: ${score.tie}`)
   } 
  function pickComputerMove(){
    let computerMove = '';
    const randomNo = Math.random();
    if (randomNo >= 0 && randomNo < 1/3 ) {
      computerMove = 'rock'
    }
    else if (randomNo >= 1/3 && randomNo < 2/3){
      computerMove = 'paper'
    }
    else if(randomNo >= 2/3 && randomNo < 3/3){
      computerMove = ' scissors'
    } 
    return computerMove;
  }
</script>
</body>
</html>