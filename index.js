// cria referência aos elementos da página 
const frm = document.querySelector("form")
const imagem = document.querySelector("#capa")
const spanTotal = document.querySelector("#spanTotal")

let ingresso = 12
let quant = 1

// adiciona "ouvinte" de eventos ao programa
frm.selFilme.addEventListener("change", () => {
  ingresso = 12
  if (frm.selFilme.value == "hereditario") {
    imagem.src = "filme1.jpg"
  } else if (frm.selFilme.value == "midsommar") {
    imagem.src = "filme2.jpg"
    ingresso = 15
  } else if (frm.selFilme.value == "vinganca") {
    imagem.src = "filme3.jpg"
  } else if (frm.selFilme.value == "natureza") {
    imagem.src = "filme4.jpg"
    ingresso = 15
  } else if (frm.selFilme.value == "futuro") {
    imagem.src = "filme5.webp"
  }
  mostrarTotal()
})

function mostrarTotal() {
  const total = quant * ingresso
  // muda o conteúdo de uma parte da página
  spanTotal.innerText =
    total.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

// quando a página é carregada
window.addEventListener("load", () => {
  mostrarTotal()
})

frm.selQuant.addEventListener("change", () => {
  quant = Number(frm.selQuant.value)
  mostrarTotal()
})