function mostrar() {
  var peso;
  var edad;
  var tipo;
  var sump = 0;
  var prom = 0;
  var max=0;
  var nombre;
   var nmax;
   var contadoranimales=0;


  for (contador = 0; contador < 4; contador++) {

    nombre = prompt("ingrese un nombre ");

    tipo = prompt("ingrese si su mascota es perro o gato ");
    while (tipo != "perro" && tipo != "gato") {

      tipo = prompt("Error ingrese un tipo valido: ");
    }
    peso = prompt("ingrese un peso entre 1 y 100 ");

    while (isNaN(peso) || peso < 1 || peso > 100) {
      peso = prompt("Error ingrese un peso valido ");
    }

    edad = prompt("ingrese la edad de su mascota ");

    while (isNaN(edad) || edad < 1 || edad > 25) {

      edad = prompt("Error ingrese un edad valida ");
    }
    
    peso = parseInt(peso);
    if(peso!=0)
    sump = sump + peso;
    prom = sump / 4; 

      edad = parseInt(edad);
     
      
    if (edad > max && tipo == "perro") {
        max = edad;
        nmax = nombre;
    } 
      
       if(peso<10 && edad>10){

        contadoranimales++;
        }
  }
  alert("El promedio de los pesos totales es: " + prom);
  alert("El nombre del perro mas viejo es: " + nmax+" y tiene: "+max);
  alert("La cantidad animales menores a 10 kilos de mas de 10 años es: " + contadoranimales);

}
