/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer
opdracht: pizza calculator

*/

//de prijzen per product.
const pizza_small_price = 2.00;
const pizza_medium_price = 2.75;
const pizza_large_price = 4.00;
const frisdrank_price = 1.55;

//het te betalen bedrag.
var pizza_small_cost = 0;
var pizza_medium_cost = 0;
var pizza_large_cost = 0;
var frisdrank_cost = 0;

//het standaard aantal producten dat je koopt.
var aantal1 = 0;
var aantal2 = 0;
var aantal3 = 0;
var aantal4 = 0;

//de standaard prijs van het product weergeven op de site
if (pizza_small_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP1").innerHTML =
  "Pizza Small €" + pizza_small_price.toFixed(2).replace('.', ',');
}

//de standaard prijs van het product weergeven op de site
if (pizza_medium_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP2").innerHTML =
  "Pizza Medium €" + pizza_medium_price.toFixed(2).replace('.', ',');
}

//de standaard prijs van het product weergeven op de site
if (pizza_large_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP3").innerHTML =
  "Pizza Large €" + pizza_large_price.toFixed(2).replace('.', ',');
}

//de standaard prijs van het product weergeven op de site
if (frisdrank_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP4").innerHTML =
  "Frisdrank €" + frisdrank_price.toFixed(2).replace('.', ',');
}

function cost() {
  // het berekenen van de totaal prijs. 
  var totaal_cost = pizza_small_cost + pizza_medium_cost + pizza_large_cost + frisdrank_cost;

  //de te betalen totaal prijs van de producten weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    "Totaal €" + totaal_cost.toFixed(2).replace('.', ',');
  }
}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Small() {
  var aantal1;
  aantal1 = prompt("Please enter the amount of pizza small you want.", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

  if (aantal1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal1").innerHTML =
  "the amount of Pizza Small, " + aantal1;
  }

  pizza_small_cost = pizza_small_price * aantal1;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (pizza_small_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag1").innerHTML =
    "Pizza Small €" + pizza_small_cost.toFixed(2).replace('.', ',');
  }

  cost();
}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Medium() {
  var aantal2;
  aantal2 = prompt("Please enter the amount of pizza small you want.", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

  if (aantal2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal2").innerHTML =
  "the amount of Pizza Medium, " + aantal2;
  }

  pizza_medium_cost = pizza_medium_price * aantal2;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (pizza_medium_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag2").innerHTML =
    "Pizza Medium €" + pizza_medium_cost.toFixed(2).replace('.', ',');
  }

  cost();
}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Large() {
  var aantal3;
  aantal3 = prompt("Please enter the amount of pizza small you want.", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

  if (aantal3 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal3").innerHTML =
  "the amount of Pizza Large, " + aantal3;
  }

  pizza_large_cost = pizza_large_price * aantal3;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (pizza_large_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag3").innerHTML =
    "Pizza Large €" + pizza_large_cost.toFixed(2).replace('.', ',');
  }

  cost();
}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Frisdrank() {
  var aantal4;
  aantal4 = prompt("Please enter the amount of pizza small you want.", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

  if (aantal4 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal4").innerHTML =
  "the amount of Frisdrank, " + aantal4;
  }

  frisdrank_cost = pizza_small_price * aantal4;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (frisdrank_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag4").innerHTML =
    "Frisdrank €" + frisdrank_cost.toFixed(2).replace('.', ',');
  }

  cost();
}

