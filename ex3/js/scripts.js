let comptatge = {};

function analitzaDNA() {
  // Convertim a majúscules i traiem espais
  const dna = document.getElementById("dnaInput").value
    .toUpperCase()
    .replace(/\s+/g, "");

  const missatge = document.getElementById("missatge");
  const resultat = document.getElementById("resultat");
  const dnaFormat = document.getElementById("dnaFormat");

  missatge.innerHTML = "";
  resultat.innerHTML = "";
  dnaFormat.innerHTML = "";

  // Verificar cadena vàlida
  if (!/^[ACGTU]+$/.test(dna)) {
    missatge.innerHTML = "<div class='error'> Cadena  buida o amb carácters icorrectes! Només es permeten A, C, G i T.</div>";
    return;
  }

  // Inicialitzar recompte
  let numU= 0;

  // Recorrem la cadena
  for (let i = 0; i < dna.length; i++) {
    const base = dna[i];
    if (base === "U"){
        numU++
    }
   
  }
  
 
  // Calculaem la polindroma
  const longitud = dna.length;
  let polindroma = false;
  let cadenaPol =""
  for(let i = longitud -1; i>= 0; i--){
        cadenaPol += dna[i];
        
  }
  if(cadenaPol == dna){
    polindroma = true;
  }
  // ho comprobem
  resultat.innerHTML = `
    <p><b>Longitud:</b> ${longitud}</p>
    <p><b>Hi ha ${numU}</b> U</p>
    <p><b>La cadena es políndroma = ${polindroma}</b></p>
  `;
  


    
    
  
}