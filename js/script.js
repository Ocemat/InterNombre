                    
var round = 1;
                    
//document.getElementById("PropositionField") = $("#)
document.getElementById("PropositionField").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("SubmitButton").click();
    }
});

// Ajouter un élément au click
document.getElementById('SubmitButton').onclick = function hello(){
   // Récupérer la valeur donnée par l'utilisateur
var reponse = document.getElementById('PropositionField').value;

// Ajouter dans le ul la réponse de l'utilisateur
//Créer un <li>
var monLi = document.createElement("li");
// Créer un texte dans le <li>
    if(reponse < random) {
        var toprint = " c'est plus !"
    } else if (reponse > random) {
        var toprint = " c'est moins !"
        } else if (reponse == random) {
        var toprint = " bravo !"
        }
    
var textnode = document.createTextNode("Vous avez dit : " + reponse + toprint);
// J'ajoute un child au <li>
monLi.appendChild(textnode);
// Ajouter le <li> au <ul>
document.getElementById("ListeRep").appendChild(monLi); 
// Vider le input
document.getElementById('PropositionField').value = "";        

document.getElementById("NbClic").innerHTML = ("Nombre de coups : " + round++);
    
    if(round ==6) {
        document.getElementById("help").innerHTML = "ASTUCE : Il est compris entre 1 et 100";
    }
    
    if(toprint == " bravo !"){
        if (confirm("Voulez-vous rejouer ?")) {
            location.reload();
            hello();
    } else {
        alert("Au Revoir Looser ! :) ");
    }
}

}

// Générer un chiffre en aléatoire
var min=1; 
var max=100;  
var random =Math.floor(Math.random() * (+max - +min)) + +min; 
document.getElementById("random").innerHTML = "Nombre Généré : " + random ;  


