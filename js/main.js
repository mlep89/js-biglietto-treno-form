var ramoElse;


var btn_genera = document.getElementById("genera");
btn_genera.addEventListener("click" ,
function () {
    //Prendi i valori inseriti dagli utenti all'interno degli input
   var MyName = document.getElementById("MyName").value;
   console.log(MyName);
   var MyJourney = document.getElementById("MyJourney").value;
   console.log(MyJourney);
   var MyAge = document.getElementById("MyAge").value;
   console.log(MyAge);

   //Inserire modalità di calcolo costo biglietto e loro scontistiche
   var tariffa = 0.21;
   var TicketPrice = tariffa * MyJourney;

   var offerta = "Biglietto standard";

   if (MyAge -- "minorenne") {
       TicketPrice - TicketPrice - (TicketPrice * 20 / 100);
       offerta = "Sconto Minorenne";
   }
   else if (MyAge -- "over_65") {
       TicketPrice - TicketPrice - (TicketPrice * 40 / 100);
       offerta = "Sconto Silver";
   }


   //Generatore Random per numero carrozza
   var NumberCoach = Math.floor(Math.random() (* 9) +1;

   //Generatore Random per Codice CP
   var CpCode = Math.floor(Math.random() * (100000 - 90000) + 90000;


   //Collegamenti per stampa output
   document.getElementById("passenger_name").innerHTML = 
   document.getElementById("offer_type").innerHTML =
   document.getElementById("coach").innerHTML = NumberCoach ;
   document.getElementById("codice_Cp").innerHTML = CpCode ;
   document.getElementById("ticket_price").innerHTML = TicketPrice ;

   document.getElementById(ticket_container).className = "show";


}
var btn_annulla = document.getElementById("annulla");
 

 