
function agregar() {
    var listaIzquierda = document.getElementById("comtizq");
    var listaDerecha = document.getElementById("comtDer");
  
    var selectedOptions = Array.from(listaIzquierda.selectedOptions);
  

    selectedOptions.forEach(function(option) {
      listaDerecha.appendChild(option);
      
    });
  
  
    selectedOptions.forEach(function(option) {
      option.selected = false;
    });
  }


function eliminar() {
    var listaIzquierda = document.getElementById("comtizq");
    var listaDerecha = document.getElementById("comtDer");
  
    var selectedOptions = Array.from(listaDerecha.selectedOptions);
  
   
    selectedOptions.forEach(function(option) {
      listaIzquierda.appendChild(option);
      
      
    });
  
    
    selectedOptions.forEach(function(option) {
      option.selected = false;
    });
  }
