// Seleção de elementos

const multiplicadorForm = document.getElementById("frm_Multiplicador")
const numeroInp = document.getElementById("inp_numero")
const multiplicadorInp = document.getElementById("inp_multiplicador")
const tabelaMultiplicacao = document.getElementById("multiplicador-operacoes")
const tituloResultado = document.getElementById("titleResultado")

// Funções 
const criarTabela = (numero, numeromultiplicador) => {
    tabelaMultiplicacao.innerHTML = "";
    for (i = 1; i <= numeromultiplicador; i++){
        const resultado = numero * i;

        const template = `
            <div class="linha">
                <div class="operacao">${numero} x ${i} = </div>
                <div class="resultado">${resultado}</div>
            </div>`;
        
        const parser = new DOMParser()
        
        const htmlTemplate = parser.parseFromString(template,"text/html")
        const linha = htmlTemplate.querySelector(".linha")

        tabelaMultiplicacao.appendChild(linha);
    }

    tituloResultado.innerText = numero;
}

// Eventos
multiplicadorForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const numMultiplicado = numeroInp.value;

    const numeromultiplicador = +multiplicadorInp.value;

    if(!numMultiplicado || !numeromultiplicador) return;

    criarTabela(numMultiplicado,numeromultiplicador);
});


