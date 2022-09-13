let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
let converter = document.getElementById("converter").addEventListener("click", () => {
    let input = document.getElementById("valor")
    let valor = input.value
    fetch(url).then((res) => {
        return res.json()
    }).then((date) => {
        let ask = date.USDBRL.ask
        if (valor !== "" && valor > 0) {
            let resultado =  `VALOR EM US$: ' ${valor} ' VALOR EM R$ = ' ${parseFloat(ask*valor).toFixed(2)} ' `
            document.getElementById("resultado").innerHTML = resultado
        } else if (valor == "" || valor <= 0) {
            resultado.innerHTML = "NÃO É POSSIVEL CONVERTER UM VALOR VAZIO OU NEGATIVO"
        } else {
        }
    })
})