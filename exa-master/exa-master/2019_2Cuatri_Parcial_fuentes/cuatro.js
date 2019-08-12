function mostrar() {
	var letra;
	var numero;
	var contadorpares = 0;
	var contadorimpar = 0;
	var contadorceros = 0;
	var acumuladorpositivos = 0;
	var contadorpositivos = 0;
	var contadornegativos = 0;
	var min = 99999999;
	var max = 0;
	var lmax;
	var lmin;
	var sumnega = 0;
	var promediop;
	var respuesta = true;

	while (respuesta == true) {
		letra = prompt(" Ingrese una Letra: ");
		numero = prompt(" Ingrese un numero: ");


		while (isNaN(numero) || numero < -100 || numero > 100) {
			numero = prompt("Error ingrese un numero valido ");
		}

		numero = parseInt(numero);

		if (numero % 2 == 0) {
			contadorpares++;
		}
		if (!(numero % 2 == 0)) {
			contadorimpar++;

		}
		if (numero == 0) {
			contadorceros++;

		}
		if (numero > 0) {
			contadorpositivos++;
			acumuladorpositivos += numero;
			promediop = acumuladorpositivos / contadorpositivos;
		} else {
			promediop = 0;

		}
		if (numero < 0) {
			contadornegativos++;

			sumnega += numero;

		}
		if (numero < min) {
			min = numero;
			lmin = letra;

		}
		if (numero > max)
			max = numero;
		lmax = letra;

		respuesta = confirm("Desea ingresar mas datos: ");
	}
	document.write(" La cantidad de numeros pares es: " + contadorpares + "<br>");
	document.write(" La cantidad de numeros impares es: " + contadorimpar + "<br>");
	document.write(" La cantidad de ceros es: " + contadorceros + "<br>");
	document.write(" Promedio de los numeros positivos es: " + promediop + "<br>");
	document.write(" La suma de negativos es: " + sumnega + "<br>");
	document.write(" La numero menor es; " + min + " y su letra es: " + lmin + "<br>" + "el numero mayor es: "
		+ max + " y su letra es: " + lmax);
}
