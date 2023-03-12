idade = 18

if (idade < 16) {
    console.log('Você é menor de idade e não vota')
} else if (idade >= 16 && idade < 18) {
    console.log('Você é menor de idade com voto opcional')
} else if (idade >= 18 && idade <= 65) {
    console.log('Você é maior de idade e possui voto obrigatório')
} else {
    console.log('Você é idoso e possui voto opcional')
}