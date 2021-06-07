const corSelecionada = document.querySelector('[data-form-color]')
const mudarCor = document.querySelector('[data-caixa-fundo]')

corSelecionada.value = "#6BD1FF"
mudarCor.style.backgroundColor = corSelecionada.value

corSelecionada.addEventListener('input', (evento) => {
    rgbCorSelecionada = corSelecionada.value
    mudarCor.style.backgroundColor = rgbCorSelecionada
})