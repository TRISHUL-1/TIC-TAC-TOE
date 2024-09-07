let boxes =  document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let topcontainer = document.querySelector(".topcontainer");
let msg = document.querySelector("p");
let player1 = true;

const winningPattern = [
    [0, 1, 2],[0, 3, 6],[0, 4, 8],
    [1, 4, 7],[2, 5, 8],[2, 4, 6],
    [3, 4, 5],[6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(player1) {
            box.innerText = "X"
            player1 = false;
        } else {
            box.innerText = "O"
            player1 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    topcontainer.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
    for(let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () => {
    player1 = true;
    enableBoxes();
    topcontainer.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
