// let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
// let converter = document.getElementsByClassName("converter").addEventListener("click", () => {
//     let input = document.getElementById("valor")
//     let valor = input.value
//     fetch(url)
//         .then((res) => {
//             return res.json()
//         })
//         .then((date) => {
//             let ask = date.USDBRL.ask
//             if (valor !== "" && valor > 0) {
//                 let resultado = `VALOR EM US$: ' ${valor} ' VALOR EM R$ = ' ${parseFloat(ask*valor).toFixed(2)}'`
//                 document.getElementById("resultado").innerHTML = resultado
//             } else if (valor === "" || valor <= 0) {
//                 resultado.innerHTML = "NÃO É POSSIVEL CONVERTER UM VALOR VAZIO OU NEGATIVO"
//             }
//         })
// })

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




//     .addEventListener("click",
//         async function converteu() {
//             let input = document.getElementById("valor")
//             let valor = input.value
//             let response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
//             let jsonData = await response.json()
//             let ask = jsonData.USDBRL.ask
//             if (valor !== "" && valor > 0) {
//                 let resultado = `VALOR EM US$: ' ${valor} ' VALOR EM R$ = ' ${parseFloat(ask*valor).toFixed(2)}'`
//                 document.getElementById("resultado").innerHTML = resultado
//             } else {
//                 resultado.innerHTML = "NÃO É POSSIVEL CONVERTER UM VALOR VAZIO OU NEGATIVO"
//             }
//         })
// }
ClicouConverter()


// function ClicouConverter() {
//     let  converter = document.getElementsByClassName("converter")[0]
//      .addEventListener("click",
//          async function converteu() {
//              let input = document.getElementById("valor")
//              let valor = input.value
//              let response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
//              let jsonData = await response.json()
//              let ask = jsonData.USDBRL.ask
//              if (valor !== "" && valor > 0) {
//                  let resultado = `VALOR EM US$: ' ${valor} ' VALOR EM R$ = ' ${parseFloat(ask*valor).toFixed(2)}'`
//                  document.getElementById("resultado").innerHTML = resultado
//              } else {
//                  resultado.innerHTML = "NÃO É POSSIVEL CONVERTER UM VALOR VAZIO OU NEGATIVO"
//              }
//          })
//  }
//  ClicouConverter()


// async function fetchApi() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const jsonData = await response.json()

//         console.log(jsonData[0].id)

// }
// fetchApi()




















// function converterMoeda() {
//     document.querySelector("#converter").addEventListener("click", clicouConverter)
//     async function clicouConverter(url) {
//         let input = document.getElementById("valor")
//         let valor = input.value
//         let r = await fetch(url)
//         let json = await r.json()
//         return json
//     }
// }
// conversao("https://economia.awesomeapi.com.br/json/last/USD-BRL").then(dados => {
//     console.log(dados)
// })
// converterMoeda()


// async function consumirCep(url) {
//     const r = await fetch(url)
//     const json = await r.json()
//     return json
// }
// consumirCep("https://viacep.com.br/ws/01001000/json/").then(data => {
//     console.log(data.cep)
// })