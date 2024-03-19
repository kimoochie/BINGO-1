console.log("Hello World!");

//generateNumber(75);

let isB = false;;
    isI = false;
    isN = false;
    isG = false;
    isO = false;

// function ; max is parameter
function generateNumber(max) {
    //Addition = + 
    //Subtracion = -
    //Multiplication = *
    //Division = /
    //Remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    // if ...else if ...else
    //GT >, GTE >= , LT <, LTE <= , EQ ==, NEQ != , AND &&, OR ||

    if (randomNumber <= 15) {
        isB = true;
        console.log('The number is in B.');

    } else if (randomNumber >= 16 && randomNumber <= 30) {
        isI = true;
        console.log('The number is in I.');

    } else if (randomNumber >= 31 && randomNumber <= 45) {
        isN = true;
        console.log('The number is in N.');

    } else if (randomNumber >= 46 && randomNumber <= 60) {
        isG = true;
        console.log('The number is in G.');

    } else if (randomNumber >= 61 && randomNumber <= 75) {
        isO = true;
        console.log('The number is in O.');

    } else  {
        console.log('The number is invalid');
    }

    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        console.log('BINGO!!!!');
    }

    return console.log(randomNumber); 
}

// function generateNumber(max) {    
//}
//Loops
let counter = 10
// for (counter; counter . 0; counetr -= 1) {
//  console.log('counetr is ${counter}');
//  generateNumber(75);
//  if (counter == 5) 
//      break;
//      }
//  }

// while (counter > 0) {
//  console.log('counter is${counetr}');
//  counetr -= 1;
//}

