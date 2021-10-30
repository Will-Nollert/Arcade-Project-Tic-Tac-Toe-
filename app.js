let turn = 0

const board = new Array(9).fill(null).map((val, idx) => {
    return `<div class = "square" id = ${"square-" + (idx + 1 )}></div>`
});

const app =  document.getElementById("app")
app.innerHTML = board.join("")

const boardSquares = Array.from(document.querySelectorAll(".square"))

boardSquares.forEach((node, idx) => {

    if (idx % 3 === 0){
        node.classList.add("column1")
    } else if ((idx, + 1) % 3 === 0) {
        node.classList.add("column 3")
    } else {
        node.classList.add("column 2")
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
    })
});

function didWin(){

    const rows = [
        [...boardSquares.slice(0, 3)],
        [...boardSquares.slice(3, 6)],
        [...boardSquares.slice(6)],
    ]

    const column1 =Array.fromt(document.querySelectorAll("column1")) 
    const column2 =Array.fromt(document.querySelectorAll("column2"))
    const column3 =Array.fromt(document.querySelectorAll("column3"))

    const columns = [column1, column2, column3];

    const diagonal1 = Array.from(
        document.querySelectorAll("square1, square5, square9")
    );

    const diagonal2 = Array.from(
            document.querySelectorAll("square3, square5, square7")
    );

    const diagonals = [diagonal1, diagonal2];

}