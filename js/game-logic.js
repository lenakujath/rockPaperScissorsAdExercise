// All code should be written in this file.

let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType;
let playerTwoMoveOneType, playerTwoMoveTwoType, playTwoMoveThreeType;

let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;
let playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!player || !moveOneType || !moveOneValue || !moveTwoType  ||  !moveTwoValue || !moveThreeType || !moveThreeValue){
        return undefined;
    } else if (moveOneType.includes('rock') === false && moveOneType.includes('paper') === false && moveOneType.includes('scissors') === false){
        return undefined;
    } else if (moveTwoType.includes('rock') === false && moveTwoType.includes('paper') === false && moveTwoType.includes('scissors') === false){
        return undefined;
    } else if (moveThreeType.includes('rock') === false && moveThreeType.includes('paper') === false && moveThreeType.includes('scissors') === false){
        return undefined;
    }else if (player.includes('Player One') === false && player.includes('Player Two') === false) {
        return undefined;
    } else  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1 ){
        return undefined;
    } else if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return undefined;
    };
    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
     }
    if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    };
};



const getRoundWinner = (round) => {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType 
        || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerOneMoveOneValue || 
        !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
        return null;
    };
    if (round === 1){
        if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper'){
                return 'Player Two';
        }  else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock'){
            return 'Player One';
        }  else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors'){
            return 'Player One';
        } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'rock'){
            return 'Player Two';
        } else if (playerOneMoveOneType === playerTwoMoveOneType){
            if (playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One';          
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                return  'Player Two';
            } else if (playerOneMoveOneValue === playerTwoMoveOneValue){
                return 'Tie';
            }; 
        } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'scissors'){
            return 'Player Two';
        } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper'){
            return 'Player One';
        };
    } else if (round === 2) {
        if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'paper'){
            return 'Player Two';
        }  else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock'){
            return 'Player One';
        }  else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors'){
            return 'Player One';
        } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'rock'){
            return 'Player Two';
        } else if (playerOneMoveTwoType === playerTwoMoveTwoType){
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                return 'Player One';          
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                return  'Player Two';
            } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
                return 'Tie';
            }; 
        } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'scissors'){
            return 'Player Two';
        } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper'){
            return 'Player One';
        };
    }   else if (round === 3) {
        if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'paper'){
            return 'Player Two';
        }  else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock'){
            return 'Player One';
        }  else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors'){
            return 'Player One';
        } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'rock'){
            return 'Player Two';
        } else if (playerOneMoveThreeType === playerTwoMoveThreeType){
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                return 'Player One';          
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                return  'Player Two';
            } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
                return 'Tie';
            }; 
        } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'scissors'){
            return 'Player Two';
        } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper'){
            return 'Player One';
        };
    } else if  (round != 1 && round != 2 && round !=3){
        return null;
    };
};



const getGameWinner = () => {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType 
        || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerOneMoveOneValue || 
        !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
        return null;
    };
    
    let counterOne = 0;
    let counterTwo = 0;

    if (getRoundWinner(1) === 'Player One'){
        counterOne ++;
    };   
    if (getRoundWinner(1)=== 'Player Two'){
        counterTwo ++;      
    };   
    if (getRoundWinner(2) === 'Player One'){
        counterOne ++;
    }  if (getRoundWinner(2) === 'Player Two'){
        counterTwo ++;
    };
    if (getRoundWinner(3) === 'Player One'){
        counterOne ++;
    }  if (getRoundWinner(3) === 'Player Two'){
        counterTwo ++;
    };
    if (counterOne === counterTwo) return 'Tie';
    if (counterOne > counterTwo) return 'Player One';
    if (counterOne < counterTwo) return 'Player Two';
};



