function change(elm) {
    var naszaWarstwa = document.getElementById("aktualnosci");
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
    var naszaWarstwa = document.getElementById("archiwum");
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
    var naszaWarstwa = document.getElementById("terminarz");
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
    var naszaWarstwa = document.getElementById("wyniki");
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
    var naszaWarstwa = document.getElementById("onas");
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
