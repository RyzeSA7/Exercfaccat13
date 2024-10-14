 
 let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"))
 let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"))

 
 let media = (nota1 + nota2) / 2

 
 let resultado
 if (media >= 6) {
     resultado = "Aprovado"
 } else {
     resultado = "Reprovado"
 }

 
 alert(`Média: ${media.toFixed(2)} - Status: ${resultado}`)



