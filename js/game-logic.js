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
    } 

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

    // playerOneMoveOneType = 'scissors';
    // playerTwoMoveOneType = 'paper';
    // playerOneMoveOneValue = 40;
    // playerTwoMoveOneValue = 30;

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


    }



};

console.log(getRoundWinner())

// setPlayerMoves('Player Two', 'rock', 10, 'paper', 2, 'scissors', 30);
// console.log(playerTwoMoveTwoType)



