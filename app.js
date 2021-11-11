let turn = 0

const board = new Array(9).fill(null).map((val, idx) => {
    return `<div class = "square" id = ${"square-" + (idx + 1 )}></div>`
});

const app =  document.getElementById("app")
app.innerHTML = board.join("")

const boardSquares = Array.from(document.querySelectorAll(".square"))

const player1Name = document.getElementById("playerOneName").value
const player2Name = document.getElementById("playerTwoName").value



console.log(playerOneName)
console.log(playerTwoName)





boardSquares.forEach((node, idx) => {
    if (idx % 3 === 0){
        node.classList.add("column1");
    } else if ((idx + 1) % 3 === 0) {
        node.classList.add("column3");
    } else {
        node.classList.add("column2");
    }
})


boardSquares.forEach(node => {
    node.addEventListener ("click", () => {
        if (node.innerText){
            return;
        }

        let move;

        if (turn % 2 === 0 ){
        move = "X"
        } else {
        move = "O";
        }

        node.innerText = move;
        turn ++;

        didWin();

        const playerTurn = document.getElementById('playerTurn')
        playerTurn.innerText = "click a square the start the game"

        const playerOne = document.getElementById('playerOneName').value
        const playerTwo = document.getElementById('playerTwoName').value

        if(turn % 2 === 0){
            playerTurn.textContent = playerOne + " it is your move"
        } else {
            playerTurn.textContent = playerTwo + " it is your move"
        }


    })
    
});






function didWin(){

    const rows = [
        [...boardSquares.slice(0, 3)],
        [...boardSquares.slice(3, 6)],
        [...boardSquares.slice(6)],
    ];

    const column1 = Array.from(document.querySelectorAll(".column1")) 
    const column2 = Array.from(document.querySelectorAll(".column2"))
    const column3 = Array.from(document.querySelectorAll(".column3"))


    const columns = [column1, column2, column3];

    const diagonal1 = Array.from(
        document.querySelectorAll("#square-1, #square-5, #square-9")
    );

    const diagonal2 = Array.from(
            document.querySelectorAll("#square-3, #square-5, #square-7")
    );

    const diagonals = [diagonal1, diagonal2];


    [rows, columns, diagonals].forEach((category) => {

        category.forEach((combination) => {
            
            const allX = (combo) => {
                let result = true 

                for (let i = 0; i < combo.length; i++) {
                    const currNode = combo[i];
                    if(currNode.innerText === "O" || currNode.innerText === "") {                            
                        result = false;
                        //console.log("dislpay me if you get here")
                    }
                }
            return result;
         }

        const allO = (combo) => {
            for (let i = 0; i < combo.length; i++) {
                const currNode = combo[i];
                if(currNode.innerText === "X" || currNode.innerText === "") {
                    return false;
                }
            }
        return true;
     }

     let won = false

     won = allX(combination) || allO(combination)
/* drawn function ideas here 

     maybe add in a draw funcion here 
     draw = allSquares(combination) where all currNode.innerText === o || === X 
     therefore no possible move therfore draw. 

*/

     const gameMsg = document.getElementById('gameMsg')
     if (won) {
         gameMsg.innerText = "You Won!"
     }
        });
    });

    

}


/* reset ideas here

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener("click", () =>{
    //needs to set all nodes.innertext value back to null and set the turn count back to 0
})

*/