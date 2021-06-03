var ramoElse;


var btn_genera = document.getElementById("genera");
btn_genera.addEventListener("click" ,
function () {
    //Prendi i valori inseriti dagli utenti all'interno degli input
   var MyName = document.getElementById("my_name").value;
   
   var MyJourney = document.getElementById("my_journey").value;
   
   var MyAge = document.getElementById("MyAge").value;
   

   //Inserire modalità di calcolo costo biglietto e loro scontistiche
   var tariffa = 0.21;
   if (MyAge == "minorenne") {
       TicketPrice = ((tariffa * MyJourney) / 100 * 80);
       offerta = "Sconto Minorenne";
   }
   else if (MyAge == "over_65") {
    TicketPrice = ((tariffa * MyJourney) / 100 * 60);
       offerta = "Sconto Silver";
   }
   else {
    var TicketPrice = tariffa * MyJourney;
    var offerta = "Biglietto standard";  
   }

   TicketPrice = TicketPrice.toFixed(2);

   //Generatore Random per numero carrozza
   var NumberCoach = Math.floor(Math.random() * 9) +1;

   //Generatore Random per Codice CP
   var CpCode = Math.floor(Math.random() * (100000 - 90000) + 90000);


   //Collegamenti per stampa output
   document.getElementById("passenger_name").innerHTML = MyName;
   document.getElementById("offer_type").innerHTML = offerta;
   document.getElementById("coach").innerHTML = NumberCoach ;
   document.getElementById("IP_code").innerHTML = CpCode ;
   document.getElementById("price_ticket").innerHTML = TicketPrice ;

   //mostra biglietto
    document.getElementById("ticket").className = "show";
});

var btn_annulla = document.getElementById("annulla");
btn_annulla.addEventListener("click" ,
function () {
    document.getElementById("passenger_name").innerHTML = "";
   document.getElementById("offer_type").innerHTML = "";
   document.getElementById("coach").innerHTML = "";
   document.getElementById("IP_code").innerHTML = "";
   document.getElementById("price_ticket").innerHTML = "";   
});