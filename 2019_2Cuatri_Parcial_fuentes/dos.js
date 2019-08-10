function mostrar() {
  var peso;
  var edad;
  var tipo;
  var nombre;
  


  for (contador=0; contador < 4; contador++) {

      nombre=prompt("ingrese un nombre ");

      tipo=prompt("ingrese si su mascota es perro o gato ");
    while (tipo!= "perro" && tipo != "gato") {

      tipo=prompt("Error ingrese un tipo valido: " );
    }
      peso = prompt("ingrese un peso entre 1 y 100 ");

    while (isNaN(peso) || peso < 1 || peso > 100) {
      
           peso=prompt("Error ingrese un peso valido ");
          }

      edad=prompt("ingrese la edad de su mascota ");
        
    while (isNaN(edad) || edad < 1 || edad > 25) {
          
                edad=prompt("Error ingrese un edad valida ");
              }
              if(){
                peso=parseInt(peso);
                acumulador=acumulador+peso;
              }
           
              
                
  }
  //alert("dos");
}
