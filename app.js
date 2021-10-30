
const board = new Array(9).fill(null).map((val, idx) => {
    return `<div class = "square">${idx + 1 }</div>`
});

const app =  document.getElementById("app")
app.innerHTML = board.join("")