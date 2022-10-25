/**
 * 
 */
//Funciones con js
//Declaración de la función
function verificarEdad(edad){
	//Condicionales 
	if(edad >= 18){
		var verify = "Mayor de edad";
	}else{
		var verify = "Menor de edad";
	}
	//Retornar el resultado esperado
	return verify;

}
//Imprimir en el documento
document.write(verificarEdad(19));
document.write(verificarEdad(8));
document.write(verificarEdad(17));
document.write(verificarEdad(87));

 
 