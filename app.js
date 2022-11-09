let cell = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let popup = document.querySelector(".popup");
let newgameBtn = document.querySelector(".new-game");
let message = document.querySelector(".message")

//winning condition array
let winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// let options = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = "X";
// let running = false;

// player "X" plays first
let xTurn = true;
let count = 0;

//Disable all Cells
let disableCell = () => {
    cell.forEach((element) => element.disabled = true);
    //enable popup
    popup.classList.remove("hide");
};

//Enable all Cell (for New Game and Restart)
let enableCell = () => {
    cell.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // disable popup
    popup.classList.add("hide");
};


// this function is executed when a player wins
const winFunction = (letter) => {
    disableCell ();
    if(letter == "X"){
        message.innerHTML = "&#x1f389; <br> 'X' wins";
    } else{
        message.innerHTML = "&#x1f389; <br> 'O' wins";
    }
 };

 //function for draw
let drawFunction = () => {
    disableCell();
    message.innerHTML = "&#x1F60E; <br> It's a Draw"
};

//New Game
newgameBtn.addEventListener("click", () => {
    let count = 0;
    enableCell();
});

reset.addEventListener("click", () => {
    let count = 0;
    enableCell();
});



// Win Logic 
let winChecker = () => {
    // loop through all win patterns
    for(let i of winningPattern){
        let[element1, element2, element3] = [
        cell[i[0]].innerText,
        cell[i[1]].innerText,
        cell[i[2]].innerText,
     ];
     //check if elements are filled 
     //if 3 empty elements are same and would  give win as would
     if(element1 != '' && (element2 != '') && (element3 != '')){
        if(element1 == element2 && element2 == element3){
            // if all 3 cells have same values, then pass the value to winFunction
            winFunction(element1)
        }
     }
    }
};

// display "X/O" on click
cell.forEach((element) => {
    element.addEventListener("click", () => {
        if(xTurn){
            xTurn = false;
        // Display X
            element.innerText = "X";
            element.disabled = true;
        } else{
            xTurn = true;
            // Display "O"
            element.innerText = "O";
            element.disabled = ture;
        }
        //Incremet count on each clicks
        count += 1;
        if(count === 9){
            drawFunction();
        }
        // Check for win on every click
        winChecker();
    });
});

//enable cell and disable popup on page load
window.onload = enableCell;