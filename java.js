/*let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#a");
let turn0 = true;

// Define the winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add click event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        // Check if the box is already filled
        if (box.innerText === '') {
            if (turn0) {
                box.innerText = "O";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }

            // Check for a win after each turn
         checkWin();
        }
    });
});
const checkWin=()=>
{
    for(pattern of winPatterns )
    {
  let p1=   boxes[winPatterns[0]].innerText;
        letp2=    boxes[winPatterns[1]].innerText;
           letp3= boxes[winPatterns[2]].innerText;
        
           if(p1!==''&& p2 !== '' && p3 !== '' )
           {
           if(p1==p2&&p2===p3  )
           {
            console.log("winner",p1);
           }
           }

    }
}*/
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#a");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === '') {
            box.innerText = turn0 ? "O" : "X";
            turn0 = !turn0;
            checkWin();
        }
    });
});

const checkWin = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 !== '' && p2 !== '' && p3 !== '') {
            if (p1 === p2 && p2 === p3) {
                console.log("Winner:", p1);
                alert(`Player ${p1} wins!`);
                resetBoard();
                return;
            }
        }
    }
};

const resetBoard = () => {
    boxes.forEach(box => box.innerText = '');
    turn0 = true;
};

reset.addEventListener("click", resetBoard);
