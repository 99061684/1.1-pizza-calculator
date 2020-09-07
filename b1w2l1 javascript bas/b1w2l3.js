/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer
*/
function TableOf6() {

var getal1 = 6;
var getal2;

var getal2 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer

if (getal1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("getal1").innerHTML =
  "the table of, " + getal1;
}

var antwoord1 = getal1 * getal2;

if (antwoord1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("antwoord1").innerHTML =
  "the answer, " + antwoord1 + " = " + getal1 + " * " + getal2;
}

}

function TableOf3() {
  
var getal1 = 3;
var getal2;

var getal2 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer

if (getal1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("getal1").innerHTML =
  "the table of, " + getal1;
}

var antwoord1 = getal1 * getal2;

if (antwoord1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("antwoord1").innerHTML =
  "the answer, " + antwoord1 + " = " + getal1 + " * " + getal2;
}

}

function calculation1() {

var getal4 = 12;
var getal5 = 6;
var getal6 = 10;
var getal7 = 5;
var getal8 = 12;

var antwoord2 = (getal4 + getal5) * getal6 / getal7 - getal8;

if (antwoord2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("antwoord2").innerHTML =
  "the answer, " + antwoord2 + " = (" + getal4 + " + " + getal5 + ") * " + getal6 + " / " + getal7 + " - " + getal8;
}

}

function calculation2() {

  var getal4 = 12;
  var getal5;
  var getal6;
  var getal7;
  var getal8;
  
  var getal5 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer
  var getal6 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer
  var getal7 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer
  var getal8 = prompt("Please enter a value", "1"); //met een popup vragen naar een cijfer

  var antwoord3 = (getal4 + getal5) * getal6 / getal7 - getal8;
  
  if (antwoord3 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("antwoord2").innerHTML =
    "the answer, " + antwoord3 + " = (" + getal4 + " + " + getal5 + ") * " + getal6 + " / " + getal7 + " - " + getal8;
  }
  
  
}
  
