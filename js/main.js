
import { salvarNovoProjeto } from "./salvarProjeto.js"

const salvarProjeto = document.querySelector('[data-form-salvar]')

salvarProjeto.addEventListener('click', () => {salvarNovoProjeto()})