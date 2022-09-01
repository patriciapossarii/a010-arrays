// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const arrayItensNumericos= [9,6,4,3,2,7,5]
const arrayItensStrings = ["Cafe","Leite", "Bolacha", "Biscoito","Suco","Iorgute"]
const arrayItensDiversos = [true, "Torrada","Pao", 6, 8]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana 
//falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(`
-->Array Numérico
 Quantidade de itens no Arrey: ${arrayItensNumericos.length}
 Primeiro Item do Array: ${arrayItensNumericos[0]}
 Este Array contém o número 1? ${arrayItensNumericos.includes(2)}
`)

console.log(`
-->Array de String: 
Quantidade de itensno Array: ${arrayItensStrings.length}
Segundo Item do Array: ${arrayItensStrings[1]}
`)

console.log(`
-->Array Itens Diversos: 
Quantidade de itens no Array: ${arrayItensDiversos.length}
Terceiro Item do Array: ${arrayItensDiversos[2]}
Este Array contém o item "Manteiga"? ${arrayItensNumericos.includes("Manteiga")}
`)






