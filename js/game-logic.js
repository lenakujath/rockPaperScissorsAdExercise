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

const getRoundWinner = () => {

    // playerOneMoveOneType = 'rock';
    // playerTwoMoveOneType = 'rock';
    // playerOneMoveOneValue = 20;
    // playerTwoMoveOneValue = 10;
    if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper'){
            return 'Player Two';
    } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors'){
        return 'Player One';
    } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'rock'){
        if (playerOneMoveOneValue > playerTwoMoveOneValue){
                return 'Player One';          
        } else if (playerOneMoveOneValue < playerTwoMoveOneValue){
            return  'Player Two';
        };
    }
};

console.log(getRoundWinner())

// setPlayerMoves('Player Two', 'rock', 10, 'paper', 2, 'scissors', 30);
// console.log(playerTwoMoveTwoType)



