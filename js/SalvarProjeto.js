const botaoSalvarProjeto = document.querySelector('[data-form-salvar]')


botaoSalvarProjeto.addEventListener('click', (evento) => {
    evento.preventDefault()
    const nome = document.querySelector('[data-form-nome]').value
    const discricao = document.querySelector('[data-form-discricao]').value
    const linguaguem = document.querySelector('[data-select-linguagem]').value
    const cor = document.querySelector('[data-form-color]').value
    const codigo = document.querySelector('[data-codigo]').innerText


    const dadosProjeto = {
        nome,
        discricao,
        linguaguem,
        cor,
        codigo
    }

    dadosProjeto.nome = nome
    dadosProjeto.discricao = discricao
    dadosProjeto.linguaguem = linguaguem
    dadosProjeto.cor = cor
    dadosProjeto.codigo = codigo

    localStorage.setItem('card', JSON.stringify(dadosProjeto))
})