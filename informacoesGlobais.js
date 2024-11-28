const url = 'https://raw.githubusercontent.com/Faccinmateus/Avalia-o-4/refs/heads/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você já tinha ouvido falar que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente mais de <span>${pessoasConectadas} bilhões</span> usuarios estão conectadas em diferentes tipos de redes sociais e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso pode significar que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social, como por exemplo youtube, instagram e entre outro apps.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()