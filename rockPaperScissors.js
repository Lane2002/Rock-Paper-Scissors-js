const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput ==='rock' || userInput ==='scissors' || userInput ==='paper') {
      return userInput;
    } else {
      console.log('Error, please type: rock, paper, scissor');
    }
    }
    console.log(getUserChoice('paper'));
    console.log(getUserChoice('potato'));
    
    
    const getComputerChoice = ()=> {
    const randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
    };
    
    //console.log(getComputerChoice());
    //console.log(getComputerChoice());
    //console.log(getComputerChoice());
    
    const determineWinner = (userChoice, computerChoice) => {
      if(userChoice === computerChoice){
        return 'This game is a tie!';
      }
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'Sorry computer won!';
        } else {
          return 'Congratulations you won!';
        }
      }
      if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'Sorry computer won!';
        } else {
          return 'Congratulations you won!';
        }
      }
      if(userChoice === 'scissors'){
        if(computerChoice ==='rock'){
          return 'sorry computer won!';
        } else {
          return 'Congratulations you won!';
        }
      }
    };
    
    console.log(determineWinner('rock',
    'scissors'));
    console.log(determineWinner('paper', 'scissors'));
    console.log(determineWinner('rock','rock'));
    
    const playGame = () => {
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice();
      console.log('You threw:' + getComputerChoice );
      console.log('Computer threw:' + getComputerChoice());
      console.log(determineWinner(userChoice, computerChoice));
    };
    playGame();