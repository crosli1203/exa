function mostrar() {
	var locali;
	var habi;
	var temp;
	var contadorPares = 0;
	var acumuladorh = 0;
	var respuesta = true;
	var min = 9999999;
	var unomin=999999;
	var tmin;
	var lmin;
	var contadort = 0;
	var contador = 0;
	var promediohabitantes;

	while (respuesta == true) {
		locali = prompt("ingrese una localidad: ");

		habi = prompt("ingrese cantidad de habitantes: ");
		while (isNaN(habi) || habi < 1 || habi > 40) {
			habi = prompt("Error ingrese una cantidad valida entre 1 y 40 ");
		}

		temp = prompt("ingrese una temperatura entre -50 y 50 : ");
		while (isNaN(temp) || temp < -50 || temp > 50) {
			temp = prompt("Error ingrese una temperatura valida:");
		}

		temp = parseInt(temp);
		if (temp % 2 == 0) {
			contadorPares++;
		}

		habi = parseInt(habi);

		if (habi < min) {
			min = habi;
			lmin = locali;
		}
		temp = parseInt(temp);
		if (temp > 40) {

			contadort++;
		}


		if (habi != 0) {
			contador++;
			acumuladorh += habi;

			promediohabitantes = acumuladorh / contador;
		}
		if (temp < unomin) {
			unomin = temp;
			tmin = locali;
			}
		


		respuesta = confirm("Desea ingresar mas datos: ");
	}

	document.write(" cantidad de temperaturas pares: " + contadorPares + "<br>");
	document.write("la localidad con menos habitantes es: " + lmin + " y tiene " + min + "<br>");
	document.write(" cantidad de localidades que superan los 40 grados: " + contadort + "<br>");
	document.write("promedio de habitantes: " + promediohabitantes + "<br>");
	document.write("la temperatura  minima ingresada es: " + unomin + " y es la localidad: " + tmin + "<br>");
}














