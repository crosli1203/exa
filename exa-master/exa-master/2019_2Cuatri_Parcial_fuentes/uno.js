function mostrar() {
	var ladouno;
	var ladodos;
	var ladotres;
	var perimetro;

	
		ladouno = parseInt(prompt("ingrese lado uno del triangulo: "));
		ladodos = parseInt(prompt("ingrese lado dos del triangulo: "));
		ladotres = parseInt(prompt("ingrese lado tres del triangulo: "));

		if (ladouno == ladodos && ladodos == ladotres && ladotres == ladouno){

		perimetro = ladouno + ladodos + ladotres;

		alert("es un triangulo equilatero y su perimetro es : " + perimetro);
		}

		else{
			if(ladouno != ladodos || ladodos != ladotres || ladouno != ladotres) {


			alert(" Es un triangulo escaleno y sus lados son: " + " Lado uno " + ladouno + " Lado dos " + ladodos + " Lado tres " + ladotres);

		} 
			
	}	
	
}



