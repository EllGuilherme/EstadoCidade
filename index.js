let estado = null
let cidade = {
    valor: null,
    texto: null
}

let boxestado = null
let boxcidade = null
let boxexibe = null

document.addEventListener("DOMContentLoaded", setup)

function setup() {
  
    boxestado = document.getElementById("selectEstado")
    boxcidade = document.getElementById("selectCidade")
    campoExibe = document.getElementById("exibeCidadeEstado")

    boxestado.addEventListener("change", () => {
        estado = boxestado.value
        boxcidade.removeAttribute("disabled")
        boxcidade.add
        habilitaCidades(estado, boxcidade)
    })

    boxcidade.addEventListener("change", () => {
        cidade.valor = boxcidade.value
        cidade.texto = boxcidade.options[boxcidade.selectedIndex].text

        if (cidade.valor != 0) {
            campoExibe.innerText = `${cidade.texto}/${estado}`
        }
    })
}

function habilitaCidades(estadoEscolhido, boxcidade) {
let opcao1 = document.createElement("option")
let opcao2 = document.createElement("option")
let opt3 = document.createElement("option")

let removeOptions = (campoCidade) => {
    while (campoCidade.options.length > 1) {
        campoCidade.remove(1)
    }
}

let adicionaOpcoes = (vl1, txt1, vl2, txt2, vl3, txt3) => {
    opcao1.value = vl1
    opcao1.text = txt1
    boxcidade.add(opcao1)
    
    opcao2.value = vl2
    opcao2.text = txt2
    boxcidade.add(opcao2)
    
    opt3.value = vl3
    opt3.text = txt3
    boxcidade.add(opt3)
}

    switch (estadoEscolhido) {
        case (estadoEscolhido = "0"):
            boxcidade.setAttribute("disabled", "")
            break

        case (estadoEscolhido = "PR"):
            removeOptions(boxcidade)       
            adicionaOpcoes("1", "Curitiba", "2", "Cascavel", "3", "Maringá");
            break

        case (estadoEscolhido = "SC"):
            removeOptions(boxcidade)
            adicionaOpcoes("4", "Florianópolis", "5", "Blumenau", "6", "Lages")
            break
            
        case (estadoEscolhido = "RS"):
            removeOptions(boxcidade)
            adicionaOpcoes("7", "Porto Alegre", "8", "Gramado", "9", "Caxias do Sul")
            break
    }
}