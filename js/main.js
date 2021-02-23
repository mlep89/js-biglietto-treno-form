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
 

 //Verifica input
 /*
 if (isNaN(MyJourney)) {
    alert("Rispondi utilizzando esclusivamente valori numerici");
    
    if (isNaN(MyJourney))
    document.getElementById("MyTicket").innerHTML = ("Indicare la lunghezza del percorso esclusivamente in valori numerici ");
}
 else {
     console.log(ramoElse);

     //Categorie biglietti
     const bigliettostandard = Math.round((( 0.21 * MyJourney) + Number.EPSILON) * 100 / 100);
     const bigliettoYoung = Math.round((( 0.21 * MyJourney * 0.8) + Number.EPSILON) * 100 / 100);
     const bigliettoSenior = Math.round((( 0.21 * MyJourney * 0.6) + Number.EPSILON) * 100 / 100);


     //Prezzo Bilgietto
     if ((MyAge < 18)) {
         document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di €" + bigliettostandard);
     }
     
     else if ((MyAge >= 18) && (MyAge <= 65)) {
        document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di € " + bigliettoYoung);
     }

     else ((MyAge > 65)) 
        document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di € " + bigliettoSenior);
     
 }

 if (isNaN(MyAge)) {
    alert("Rispondi utilizzando esclusivamente valori numerici");
    
    if (isNaN(MyAge))
    document.getElementById("MyTicket").innerHTML = ("Indicare l'età in valori numerici "); */