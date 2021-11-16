
let turn = 0

const board = new Array(9).fill(null).map((val, idx) => {
    return `<div class = "square" id = ${"square-" + (idx + 1 )}></div>`
});

const app =  document.getElementById("app")
app.innerHTML = board.join("")

const boardSquares = Array.from(document.querySelectorAll(".square"))

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

        

        const playerTurn = document.getElementById('playerTurn')
        playerTurn.innerText = "click a square the start the game"

        const playerOne = document.getElementById('playerXName').value
        const playerTwo = document.getElementById('playerOName').value

        if(turn % 2 === 0){
            playerTurn.textContent = playerOne + " it is your move"
        } else {
            playerTurn.textContent = playerTwo + " it is your move"
        }


        didWin();

    })
    
});

//didWin function sets and validates victory conditions 
function didWin(){

    const square1 = document.getElementById('square-1')
    const square2 = document.getElementById('square-2')
    const square3 = document.getElementById('square-3')
    const square4 = document.getElementById('square-4')
    const square5 = document.getElementById('square-5')
    const square6 = document.getElementById('square-6')
    const square7 = document.getElementById('square-7')
    const square8 = document.getElementById('square-8')
    const square9 = document.getElementById('square-9')
     if (square1.innerText && square2.innerText && square3.innerText && square4.innerText && square5.innerText && square6.innerText && square7.innerText && square8.innerText && square9.innerText){
        gameMsg.textContent = "No Winner, This Game Is A Draw!"
        playerTurn.textContent = null

     }
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

     let wonX = false
     let wonO = false

     wonX = allX(combination) 
     wonO = allO(combination)


    const playerOne = document.getElementById('playerXName').value
    const playerTwo = document.getElementById('playerOName').value
    const playerTurn = document.getElementById('playerTurn')

     const gameMsg = document.getElementById('gameMsg')
     if (wonX) {
         gameMsg.textContent = "Congratulations " + playerOne + " You Won! "
         playerTurn.textContent = null
     }  else if (wonO) {
        gameMsg.textContent = "Congratulations " + playerTwo + " You Won! "
        playerTurn.textContent = null
    } 
        });
    });
}

//start of draw function. needs to not overlap with victory conditions. 
function didDraw(){
   const square1 = document.getElementById('square-1')
   const square2 = document.getElementById('square-2')
   const square3 = document.getElementById('square-3')
   const square4 = document.getElementById('square-4')
   const square5 = document.getElementById('square-5')
   const square6 = document.getElementById('square-6')
   const square7 = document.getElementById('square-7')
   const square8 = document.getElementById('square-8')
   const square9 = document.getElementById('square-9')
    if (square1.innerText && square2.innerText && square3.innerText && square4.innerText && square5.innerText && square6.innerText && square7.innerText && square8.innerText && square9.innerText){
        alert("this is a draw")
    }

}

//Adds a reset Btn that lets players start a new game
//not what I need but can't bundel all bSquares and set innerText to "" so hacky workaround 
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener("click", () =>{
location.reload();
})



