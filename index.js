function ClicouConverter() {
    const converter = document.getElementsByClassName("converter")[0]
    converter.addEventListener("click", () => {
        const input = document.getElementById("valor")
        const valor = input.value
        async function converteu() {
            const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
            const jsonData = await response.json()
            const ask = jsonData.USDBRL.ask
            if (valor !== "" && valor > 0) {
                let resultado = `VALOR EM US$: ' ${valor} ' VALOR EM R$ = ' ${parseFloat(ask*valor).toFixed(2)}'`
                document.getElementById("resultado").innerHTML = resultado
            } else {
                resultado.innerHTML = "NÃO É POSSIVEL CONVERTER UM VALOR VAZIO OU NEGATIVO"
            }
        }
        converteu()
    })
}
ClicouConverter()
