export const carregarProjeto = () => {

    const areaProjetos = document.querySelector('[data-comunidade-cards]')
    areaProjetos.innerHTML = " "

    const projetos = JSON.parse(localStorage.getItem('projetos')) || []
    
    for(var id in projetos){
        
        const codigo = hljs.highlightAuto(projetos[id].codigo).value

        const post = `<section class="comunidade__card">
                            <div class="card__codigo" style="background:${projetos[id].cor};">
                                <div class="codigo__caixa" >
                                    <div class="caixa__circulo">
                                        <div class="caixa__circulo--cor"></div>
                                        <div class="caixa__circulo--cor"></div>
                                        <div class="caixa__circulo--cor"></div>
                                    </div>
                                    <pre><code class="caixa__texto">${codigo}</code></pre>
                                </div>
                            </div>
                            <div class="card__info">
                                <h3 class="info__titulo">${projetos[id].nome}</h3>
                                <p class="info__discricao">${projetos[id].discricao}</p>
                            </div>
                            <div class="card__rodape">
                                <div class="rodape__status">
                                    <div class="status__comentario">
                                        <a href="#">
                                            <img src="../assets/img/icon_comentario.svg" alt="" class="status__icone">
                                            <p>5</p>
                                        </a>
                                </div>
                                <div class="status__curtida">
                                    <a href="#" class="status__curtida">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                    <path
                                                        d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"
                                                        fill="white" />
                                        </svg>
                                        <p>19</p>
                                    </a>
                                </div>
                                </div>
                                <div class="rodape__perfil">
                                    <a href="#">
                                        <img src="../assets/img/foto.jpg" alt="">
                                        <p>Gustavo</p>
                                    </a>
                                </div>
                            </div>
                        </section>`

        const caixaProjeto = document.createElement('section')
        caixaProjeto.innerHTML= post

        areaProjetos.appendChild(caixaProjeto)
    }
}

window.addEventListener('load', carregarProjeto() )
