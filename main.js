function cong() { 

  var palabra= document.getElementById("verbo").value ;
  palabra= palabra.substring(0,palabra.length  -1);
    
  
  let e = document.getElementById("tiempo");
  let tiempoverbal = e.options[e.selectedIndex].value ;
  
  let i = document.getElementById("pronombre");
  let pronombre = i.options[i.selectedIndex].value ;

  let o = document.getElementById("pronombre");
  let persona = o.options[o.selectedIndex].id ;
  
  let conjugacion = persona + " " + palabra + tiempoverbal + pronombre;
  
  document.getElementById("verboconjugado").innerHTML= conjugacion ;

    if (conjugacion[conjugacion.length-1==='n']) {
      conjugacion= conjugacion.substring(0,conjugacion.length  -1);
    }


  }