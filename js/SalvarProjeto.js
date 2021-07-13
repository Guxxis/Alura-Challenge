
export function salvarNovoProjeto(){

    const projetos = JSON.parse(localStorage.getItem('projetos')) || []

    const nome = document.querySelector('[data-form-nome]').value
    const discricao = document.querySelector('[data-form-discricao]').value
    const linguagem = document.querySelector('[data-select-linguagem]').value
    const cor = document.querySelector('[data-form-color]').value
    const codigo = document.querySelector('[data-codigo]').innerText

    projetos.push({
        nome: nome,
        discricao: discricao,
        linguagem: linguagem,
        cor: cor,
        codigo: codigo
    })
    
    localStorage.setItem('projetos', JSON.stringify(projetos))
}