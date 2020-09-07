/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer
*/
const vraag = "you have to answer 3 questions in a moment"

alert(vraag);

if (vraag != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("vraag").innerHTML =
  vraag;
}

var voornaam = prompt("Please enter your firstname", "...."); //met een popup vragen naar de voornaam

if (voornaam != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("voornaam").innerHTML =
  "your first name: " + voornaam;
}

var achternaam = prompt("Please enter your lastname", "...."); //met een popup vragen naar de achternaam

if (achternaam != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("achternaam").innerHTML =
  "your last name: " + achternaam;
}

var age = prompt("Please enter your age", "...."); //met een popup vragen naar de leeftijd

if (age != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("age").innerHTML =
  "your age: " + age; 
}