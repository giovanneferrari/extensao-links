const inputEl = document.getElementById("input-el")
const salvarBtn = document.getElementById("salvar-btn")
const limparBtn = document.getElementById("limpar-btn")
const ulEl = document.getElementById("ul-el")
const resultadoSitesLocalStorage = JSON.parse(localStorage.getItem("resultadoSites"))
let resultadoSites = []

if (resultadoSitesLocalStorage) {
    resultadoSites = resultadoSitesLocalStorage
    render()
} else {
    console.log("não tem nada")
}

salvarBtn.addEventListener("click", function() {
    resultadoSites.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("resultadoSites", JSON.stringify(resultadoSites))
    render()
})

limparBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    resultadoSites = []
    render()
})

function render() {
    let listItems = ""
    for (let i = 0; i < resultadoSites.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${resultadoSites[i]}">${resultadoSites[i]}</a>
        </li>
        `}
     ulEl.innerHTML = listItems
}

