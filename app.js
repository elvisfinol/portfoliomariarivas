var randomQ = randomInt(0, 10);
function randomInt(lowest, size) {
  //Return the actual value instead
  return Math.floor(Math.random() * size) + lowest; 

  //return randomQ  <-- what is this? This is what is undefined
}

var quoteElem = document.getElementById("quote");

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
   var quotes = [
   "El secreto de la creatividad es saber ocultar tus fuentes. Albert Einstein",
   "Crea tu propio estilo visual … déjalo ser único para ti e identificable para otros. Orson Welles",
   "Un diseñador sabe que ha logrado la perfección no cuando no hay nada que añadir, sino  cuando no hay nada que quitar. Antoine de Saint Exupéry",
   "Menos es más. Ludwig Mies Van Der Roh",
   "El diseño nunca debería de decir “Mírame”. Debería de decir: “Mira esto” David Craib",
   "Todo está diseñado. Pocas cosas están bien diseñadas. Brian Reed",
   "El diseño es un plan para ordenar elementos de la mejor manera posible para llevar a cabo un propósito particular. Charles Eames",
   "Las mejores ideas vienen como chistes. Haz tus pensamientos tan divertidos como puedas. David Ogilvy",
   "Piensa más, diseña menos. Ellen Lupton",
   "Diseño es donde la ciencia y el arte llegan a un punto de equilibrio. Robin Mathew",
   "La creatividad no cosiste en una nueva manera, sino en una nueva visión. Edith Wharton"
   ];
   
   return quotes[n];
}