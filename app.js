let turn = 0

const board = new Array(9).fill(null).map((val, idx) => {
    return `<div class = "square" id = ${"square-" + (idx + 1 )}></div>`
});

const app =  document.getElementById("app")
app.innerHTML = board.join("")

const boardSquares = Array.from(document.querySelectorAll(".square"))

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