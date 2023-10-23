var somaNotas = 0;

for (var i = 0; i < 3; i++) {
    var nota = Number(prompt("Insira a nota " + (i + 1) + " (entre 0 e 10):"));

    if (nota >= 0 && nota <= 10) {
        somaNotas += nota;
    } else {
        alert("Por favor, insira uma nota válida entre 0 e 10.");
        i--;
    }
}

var media = somaNotas / 3;

console.log("A média das notas é: " + media.toFixed(2));
