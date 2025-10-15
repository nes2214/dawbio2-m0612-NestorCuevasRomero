document.addEventListener("DOMContentLoaded", function() {
    // dincers inicials
    diners = 50;
    

    document.getElementById("diners").textContent = diners;
    

    resultat = "";

    // creeem la llista
    const productes = [
      {name: "Boligraf 🖊️", price: 1.2},
      {name: "Llibreta 📒", price: 2.5},
      {name: "Retoladors 🖍️", price: 5.0},
    ];


    productes_str = "";

    
    

    


      
    // Cuan es doni la botó de comprar

    document.addEventListener("submit", function() {
      

      event.preventDefault(); 

        // agafem les dades
      producte = document.getElementById("producte").value;

      unitats = document.getElementById("unitats").value;
        // Calculem el preu total

      preuTotal = productes[producte].price * unitats;
      // Condició per si te diners

      if (diners >= preuTotal) {
        // SI te diners printem el resultat
        resultat = `
          <p><strong> Has comprat ${unitats} ${productes[producte].name}  per ${preuTotal} €</strong></p>`;
        

        document.getElementById("resultats").innerHTML = resultat;

        // modifiquem els diners
        diners = (diners - preuTotal).toFixed(2);

        // modifiquem la variable
        document.getElementById("diners").textContent = diners;

      } else {
        //si no hi ha diners printem aquest resultat
        resultat = `<p><strong>No tens diners suficients</strong></p`;
        document.getElementById("resultats").innerHTML = resultat;
      }
    });
});
 