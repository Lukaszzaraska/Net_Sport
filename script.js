window.scrollTo(0,0);
function always(){
   var archiwum = document.getElementById("archiwum");
   var aktualnosci = document.getElementById("aktualnosci");
   var terminarz = document.getElementById("terminarz");
   var wyniki = document.getElementById("wyniki");
   var onas = document.getElementById("onas");
}

   function zmiana(x){
      switch(x){
         case 1:
               aktualnosci.style.display="none";
               archiwum.style.display = "block";
               terminarz.style.display="none";
               wyniki.style.display="none";
               onas.style.display="none";
         break;
         case 2:
               aktualnosci.style.display="none";
               archiwum.style.display = "none";
               terminarz.style.display="block";
               wyniki.style.display="none";
               onas.style.display="none";
         break;
         case 3:
               aktualnosci.style.display="none";
               archiwum.style.display = "none";
               terminarz.style.display="none";
               wyniki.style.display="block";
               onas.style.display="none";
         break;
         case 4:
               aktualnosci.style.display="none";
               archiwum.style.display = "none";
               terminarz.style.display="none";
               wyniki.style.display="none";
               onas.style.display="block";
         break;
         case 5:
               aktualnosci.style.display="flex";
               archiwum.style.display = "none";
               terminarz.style.display="none";
               wyniki.style.display="none";
               onas.style.display="none";
         break;
      }
       }
   
       
   


function change(elm) {
    let naszaWarstwa = document.getElementById("aktualnosci");
    if ( elm.marked) {
      elm.src = 'aktualnosci.png'; 
      elm.marked = false;
      naszaWarstwa.style.display = "none";
   } else {
      elm.src = 'aktualnosci_click.png';
      elm.marked = true;
      naszaWarstwa.style.display = "block";
   }
  }

  function change2(elm) {
   let naszaWarstwa = document.getElementById("archiwum");
    if ( elm.marked) {
      elm.src = 'archiwum.png'; 
      elm.marked = false;
      naszaWarstwa.style.display = "none";
   } else {
      elm.src = 'archiwum_click.png';
      elm.marked = true;
      naszaWarstwa.style.display = "block";
   }
  }
  function change3(elm) {
   let naszaWarstwa = document.getElementById("terminarz");
    if ( elm.marked) {
      elm.src = 'terminarz.png'; 
      elm.marked = false;
      naszaWarstwa.style.display = "none";
   } else {
      elm.src = 'terminarz_click.png';
      elm.marked = true;
      naszaWarstwa.style.display = "block";
   }
  }
  function change4(elm) {
   let naszaWarstwa = document.getElementById("wyniki");
    if ( elm.marked) {
      elm.src = 'wyniki.png'; 
      elm.marked = false;
      naszaWarstwa.style.display = "none";
   } else {
      elm.src = 'wyniki_click.png';
      elm.marked = true;
      naszaWarstwa.style.display = "block";
   }
  }
  function change5(elm) {
   let naszaWarstwa = document.getElementById("onas");
    if ( elm.marked) {
      elm.src = 'onas.png'; 
      elm.marked = false;
      naszaWarstwa.style.display = "none";
   } else {
      elm.src = 'onas_click.png';
      elm.marked = true;
      naszaWarstwa.style.display = "block";
   }
  }
  
  
 
     
   
 

