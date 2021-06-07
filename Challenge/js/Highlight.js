const linguagem = document.querySelector('[data-select-linguagem]')
const areaCodigo = document.querySelector('[data-caixa-codigo]')
const botaoHighlight = document.querySelector('[data-botao-highlight]')

function mudaLinguagem() {
    const codigo = document.querySelector('[data-codigo]')
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" data-codigo></code>`
    areaCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botaoHighlight.addEventListener('click', () => {
    const codigo = document.querySelector('[data-codigo]')
    hljs.highlightBlock(codigo)
})