document.addEventListener("DOMContentLoaded", function() {
let base = 2;
let resultat = ""
// fem un bucle
for(let i = 0; i<= 10; i++){
    // El resultat es el 2 elevat al número que aumentará  fins a 10
      resultat += `2^ ${i} = ${2 ** i}`
   
        
   
    
}
document.getElementById("resultat").textContent = resultat;
});