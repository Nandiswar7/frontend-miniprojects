let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let msg = document.querySelector('.message');
let newbtn = document.querySelector('#new-btn');
let windisplay = document.querySelector('.win-display');

const Winningpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn0) {
            //player X
            box.innerText = 'X';
            turn0 = false;
        } else {
            //player O
            box.innerText = 'O';
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of Winningpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if( pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};

const showwinner = (winner) => {
    windisplay.innerText = `congratulations the winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msg.classList.add('hide');
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);