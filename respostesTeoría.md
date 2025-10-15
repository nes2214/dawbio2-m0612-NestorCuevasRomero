## P1. Exposa 2 avantatges que aporta la programació al costat del client en les aplicacions web.

Es més visual , ja que veus directament el que programes i per tant es mes entretingut
Permet crear contingut interactiu amb l'usuari millorant l'experiencia i el rendiment

## P2. Funcionarà aquest codi en Javascript ? Per què ? 
String missatge = «Hola!»
No per que a part de que no cal posar String, «Hola!» aixó s’ahuria de veure així “Hola!”
## P3. Quina diferència hi ha entre el let i el const a Javascript ? Posa un exemple de cada un.
En el const el valor de la variable no canvía, en el let si.
const diners = 20;
let diners = 20;
## P4. Quina d’aquestes opcions mostra una funció fletxa vàlida en JavaScript (només hi ha una correcta)?
A)
function sumar(a, b) {   return a + b; }
// Exemple d'ús:
console.log(sumar(3, 4)); 

B)
const String sumar = function(a, b) {
  return a + b;
};
// Exemple d'ús:
console.log(sumar(5, 2)); 
---C) 
const sumar = (a, b) => a + b; // Exemple d'ús:
console.log(sumar(10, 15)); 

D) 
const sumar(a, b) ==> a + b; // Exemple d'ús: console.log(sumar(2, 3));

LA C

P5. Crea un exemple senzill, semblant a la resposta de l’anterior, on sigui útil usar una funció fletxa.
const concatenar = (a, b) => a.concat(b);  
let a = [1,2];
let b = [3,4];
console.log(concatenar(a,b))

