document.addEventListener("DOMContentLoaded", function() {
    // creem les variables necessares
let pulsacions = [78, 82, 88, 91, 93, 87, 85, 83, 79, 77, 80, 84 ];
let pulsacionsTotals = 0
let pulsacionsSup = 0;
// Creem bulce
for(let num in pulsacions){
    // Pulsacions totals per calcular la mitjana
    pulsacionsTotals += pulsacions[num];
    // Condició per si spuera els 90
    if(pulsacions[num] > 90){
        // Mostrem les quan les pulsasuos superen 90
        let maxims = `
        Temperatura supera 90 en la posició ${num} amb ${pulsacions[num]} pulsacions -
        `;
        // mostrem els resultats dels maxims
        document.getElementById("maxims").textContent += maxims;
    }
}
// mostrem els resultats dek mitjana
mitjana = (pulsacionsTotals / pulsacions.length).toFixed(2)
document.getElementById("mitjana").textContent = `Mitjana: ${mitjana}`;

});