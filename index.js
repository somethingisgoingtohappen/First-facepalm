
 let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function schet() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
   saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
