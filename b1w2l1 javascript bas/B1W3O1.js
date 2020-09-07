/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer
opdracht: pizza calculator

let op! de pizza calculator werkt nog niet helemaal. (de te betalen prijs van de producten past zich niet aan, 
na het invoeren van het aantal producten dat je wil kopen)

*/

//de prijzen per product.
const pizza_small_price = 2.00;
const pizza_medium_price = 2.75;
const pizza_large_price = 4.00;
const frisdrank_price = 1.55;

//het standaard aantal producten dat je koopt.
var aantal1 = 0;
var aantal2 = 0;
var aantal3 = 0;
var aantal4 = 0;

cost();

//de standaard prijs van het product weergeven op de site
if (pizza_small_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP1").innerHTML =
  "Pizza Small €" + pizza_small_price;
}

//de standaard prijs van het product weergeven op de site
if (pizza_medium_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP2").innerHTML =
  "Pizza Medium €" + pizza_medium_price;
}

//de standaard prijs van het product weergeven op de site
if (pizza_large_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP3").innerHTML =
  "Pizza Large €" + pizza_large_price;
}

//de standaard prijs van het product weergeven op de site
if (frisdrank_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP4").innerHTML =
  "Frisdrank €" + frisdrank_price;
}

function cost() {
  // het berekenen van de kosten die betaald moeten worden voor het kopen van de producten. 
  var pizza_small_cost = pizza_small_price * aantal1;
  var pizza_medium_cost = pizza_medium_price * aantal2;
  var pizza_large_cost = pizza_large_price * aantal3;
  var frisdrank_cost = pizza_small_price * aantal4;
  var totaal_cost = pizza_small_cost + pizza_medium_cost + pizza_large_cost + frisdrank_cost;

  //de te betalen prijs van het product weergeven op de site
  if (pizza_small_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag1").innerHTML =
    "Pizza Small €" + pizza_small_cost;
  }

  //de te betalen prijs van het product weergeven op de site
  if (pizza_medium_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag2").innerHTML =
    "Pizza Medium €" + pizza_medium_cost;
  }
  
  //de te betalen prijs van het product weergeven op de site
  if (pizza_large_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag3").innerHTML =
    "Pizza Large €" + pizza_large_cost;
  }

  //de te betalen prijs van het product weergeven op de site
  if (frisdrank_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag4").innerHTML =
    "Frisdrank €" + frisdrank_cost;
  }

  //de te betalen prijs van het product weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    "Totaal €" + totaal_cost;
  }

}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Small() {
  var aantal1;
  aantal1 = prompt("Please enter the amount of pizza small you want.", "0");  

  if (aantal1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal1").innerHTML =
  "the amount of Pizza Small, " + aantal1;
  }

  
}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Medium() {
  var aantal2;
  aantal2 = prompt("Please enter the amount of pizza small you want.", "0");

  if (aantal2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal2").innerHTML =
  "the amount of Pizza Medium, " + aantal2;
  }

}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Large() {
  var aantal3;
  aantal3 = prompt("Please enter the amount of pizza small you want.", "0");

  if (aantal3 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal3").innerHTML =
  "the amount of Pizza Large, " + aantal3;
  }

}

//functie voor het invoeren van het aantal producten dat je wil kopen
function Frisdrank() {
  var aantal4;
  aantal4 = prompt("Please enter the amount of pizza small you want.", "0");

  if (aantal4 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal4").innerHTML =
  "the amount of Frisdrank, " + aantal4;
  }

}

