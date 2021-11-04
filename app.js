/**when running console log I should get "false" "true" then "my Msg" but the first cell that 
 * gets returend to me is "my Msg" so I think I messed up the cell idiing or somting like that
 * at around 41 min in the youtube video but for some reason the conolse logs are nott the same
 */



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

     console.log(won)


     const gameMsg = document.getElementById('gameMsg')
     if (won) {
         gameMsg.innerText = "You Won!"
     }
        });
    });

    

}

