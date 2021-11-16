
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

        const playerOne = document.getElementById('playerOneName').value
        const playerTwo = document.getElementById('playerTwoName').value

        if(turn % 2 === 0){
            playerTurn.textContent = playerOne + " it is your move"
        } else {
            playerTurn.textContent = playerTwo + " it is your move"
        }


        didWin();

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
// draw ideas 
     /*const allDraw = (combo) => {
         let result = true
        for (let i = 0; i < combo.length; i++) {
            const currNode = combo[i];
            if(currNode.innerText === "X" || currNode.innerText === "O") {
                result =  false;
            }
        }
    return result;
 } 
*/

     let wonX = false
     let wonO = false
     //let wonDraw = false 

     wonX = allX(combination) 
     wonO = allO(combination)
     //wonDraw = allDraw(combination)

//console.log(wonDraw)

    const playerOne = document.getElementById('playerOneName').value
    const playerTwo = document.getElementById('playerTwoName').value
    const playerTurn = document.getElementById('playerTurn')

     const gameMsg = document.getElementById('gameMsg')
     if (wonX) {
         gameMsg.textContent = "Congratulations " + playerOne + " You Won! "
         playerTurn.textContent = null
     }  else if (wonO) {
        gameMsg.textContent = "Congratulations " + playerTwo + " You Won! "
        playerTurn.textContent = null
    } /*else if (wonDraw) {
        gameMsg.textContent = "No Winner, its a Draw! "
        playerTurn.textContent = null
    }*/
        });
    });

    

}


//not what I need but can't bundel all bSquares and set innerText to "" so hacky workaround 
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener("click", () =>{
location.reload();
})



