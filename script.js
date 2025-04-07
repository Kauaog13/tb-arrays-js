//Array.Every
function mostrarEvery() {
    // Obter o valor do input e criar um array de números
    const input = document.getElementById('inputEvery').value;
    const array = input.split(',').map(item => parseInt(item.trim()));

    // Obter os elementos HTML para exibir os resultados
    const resultBox = document.getElementById('every02');
    document.getElementById('every01').innerHTML = `<strong>Lista:</strong> ${array.join(', ')}`;
    resultBox.innerHTML = '';

    // Verificar se todos os números do array são maiores que 0
    const resultado = array.every(item => item > 10);

    // Exibir o resultado
    resultBox.innerHTML += `Todos os números são maiores que 10? ${resultado}`;
    resultBox.classList.remove('hidden');
}

//Array.some
function mostrarSome() {
    // Obter o valor do input e criar um array de números
    const input = document.getElementById('inputSome').value;
    const array = input.split(',').map(item => parseInt(item.trim()));

    // Obter os elementos HTML para exibir os resultados
    const resultBox = document.getElementById('some02');
    document.getElementById('some01').innerHTML = `<strong>Lista:</strong> ${array.join(', ')}`;
    resultBox.innerHTML = '';

    // Verificar se existe algum número maior que 10 no array
    const resultado = array.some(item => item > 10);

    // Exibir o resultado
    resultBox.innerHTML += `Existe algum número maior que 10? ${resultado}`;
    resultBox.classList.remove('hidden');
}

function mostrarFrom() {
    // Obter o valor do input e criar um array de letras
    const inputArrayFrom = document.getElementById('inputArrayFrom').value;
    const arrayFrom = Array.from(inputArrayFrom);

    // Elemento para exibir o array original
    const arrayFrom01 = document.getElementById('arrayFrom01');

    // Exibir o array original
    arrayFrom01.innerText = `Array.from(): ${arrayFrom}`;
}

//KEYS do HTML
function mostrarKeys() {
    const input = document.getElementById('inputKeys').value;
    const array = input.split(',').map(item => item.trim());
    const resultBox = document.getElementById('keys02');
    document.getElementById('keys01').innerHTML = `<strong>Lista:</strong> ${array.join(', ')}`;
    resultBox.innerHTML = '';

    for (let i of array.keys()) {
        resultBox.innerHTML += `Índice ${i} = ${array[i]}<br>`;
    }

    resultBox.classList.remove('hidden');
}
// KEYS para exemplo no console
let doces = ['chocolate', 'doce de leite', 'fini'];
for (let i of doces.keys()) {
    console.log(`Fruta na posição ${i}: ${doces[i]}`);
}


//WITH para HTML
function mostrarWith() {
    const input = document.getElementById('inputWith').value;
    const index = parseInt(document.getElementById('indexWith').value);
    const novoValor = document.getElementById('newValueWith').value;
    const array = input.split(',').map(item => item.trim());

    const novaArray = array.with(index, novoValor);

    document.getElementById('with01').innerHTML = `<strong>Array Original:</strong> ${array.join(', ')}`;
    document.getElementById('with02').innerHTML = `<strong>Nova lista:</strong> ${novaArray.join(', ')}`;
    document.getElementById('with02').classList.remove('hidden');
}

//WITH para exemplo no console
const series = ['The 100', 'Solo Leveling', 'Round 6'];
const novasSeries = series.with(0, 'Greys Anatomy');
console.log(novasSeries); // ['Greys Anatomy', 'Solo Leveling', 'Round 6']
console.log(series);      // ['The 100', 'Solo Leveling', 'Round 6']


//ReduceRight para HTML
function mostrarReduceRight() {
    const input = document.getElementById('inputReduceRight').value;
    const arrayPalavras = input.split(',').map(p => p.trim());

    const frase = arrayPalavras.reduceRight((acc, curr) => acc + ' ' + curr);

    document.getElementById('reduceRight01').innerHTML = `<strong>Array Original:</strong> ${arrayPalavras.join(', ')}`;
    document.getElementById('reduceRight02').innerHTML = `<strong>Frase final:</strong> "${frase}"`;
    document.getElementById('reduceRight02').classList.remove('hidden');
}

//ReduceRight para exemplo no console
const palavras = ['JS', 'é', 'legal'];
const frase = palavras.reduceRight((acc, curr) => acc + ' ' + curr);
console.log(frase); // "legal é JS"