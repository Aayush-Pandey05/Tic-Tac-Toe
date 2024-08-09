let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = ()=>{
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
};

const disableBtns= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner = (winner) =>{
    msg.innerText=`Congratulations, winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBtns();
};

boxes.forEach((box) => {
  // syntax for performing actions on elements which are accessed by the use of queryselectorAll
  box.addEventListener("click", () => {
  // event listener
    if(turnO){ // chance is of player O
        box.innerText = "O";
        turnO= false;
    }
    else{ // chance is of player X
        box.innerText = "X";
        turnO= true;
    }
    box.disabled= true;

    checkWinner();
  });
});

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
    }
}
};

const enableBtns= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);