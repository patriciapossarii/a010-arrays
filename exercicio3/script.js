// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações.
// Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;
// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const arrayItensNumericosOriginal= [9,6,4,3,2,7,5]
const arrayItensStringsOriginal = ["Cafe"," Leite", " Bolacha", " Biscoito", " Suco", " Iorgute"]
const arrayItensDiversosOriginal = [true, " Torrada"," Pao", 6, 8]

const arrayItensNumericosCopia = arrayItensNumericosOriginal.slice()
const arrayItensStringsCopia = arrayItensStringsOriginal.slice()
const arrayItensDiversosCopia = arrayItensDiversosOriginal.slice()

arrayItensNumericosCopia.push(1);
arrayItensStringsCopia.pop()
arrayItensDiversosCopia.splice(2,1)


console.log(`
---> Primeiro Array - Numérico:
- Array Original: ${arrayItensNumericosOriginal}
- Array Cópia: ${arrayItensNumericosCopia}
`)

console.log(`
---> Segundo Array - String:
- Array Original: ${arrayItensStringsOriginal}
- Array Cópia: ${arrayItensStringsCopia}
`)

console.log(`
---> STerceiro Array - Itens Diversos:
- Array Original: ${arrayItensDiversosOriginal}
- Array Cópia: ${arrayItensDiversosCopia}
`)


