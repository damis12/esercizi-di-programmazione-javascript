/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

/* ---------------- INPUT ----------------- */

//I'm defining variables
var total_cats = window.prompt("How many cats there are in total?");
var cats_queues = window.prompt("How many cats there are for any queue?");

//I'm specifying how many cats's queues there are in total.
var total_queues = Math.ceil(total_cats / cats_queues);

//I'm specifying missing cats
var missing_cats = (total_queues*cats_queues)-total_cats;

/* ---------------- OUTPUT ----------------- */
console.log("Number of cats = "+total_cats, ",", " Queues cats = "+cats_queues);
console.log("Number of queues = "+total_queues, ",", " Missing cats = "+missing_cats);
