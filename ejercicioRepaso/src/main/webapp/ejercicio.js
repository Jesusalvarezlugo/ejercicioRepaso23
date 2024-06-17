var lista=[];

function agregarActividad(){
	
	/**
* Clase (1 hora), Recreo (30 minutos), Comida (45 minutos), Transporte (20 minutos), Dormir (8 horas) y Ejercicio (1h 30min)
*/

	let actividades=[0,"Clase","Recreo","Comida","Transporte","Dormir","Ejercicio"];
	let duracion=[0,"1 hora","30 minutos","45 minutos","20 minutos","8 horas","1 hora y media"];
	let opcion;
	let fechaHoy=new Date();
	let fechaAPedir;
	let fechaActividad;
	
	do{
		opcion=prompt("Introduce la opcion para la clase deseada\n 1. Clase \n 2. Recreo \n 3.Comida \n 4. Transporte \n 5. Dormir \n 6. Ejercicio");
	}while(opcion<1&&opcion>6);
	
	do{
		fechaAPedir=prompt("Introduzca la fecha de la actividad(dd/mm/yyyy)");
		fechaAPedir=fechaAPedir.split("/");
		
		fechaActividad=new Date(fechaAPedir[2],fechaAPedir[1]-1,fechaAPedir[0])
		
	}while(fechaActividad.getTime()<fechaHoy.getTime())
	
	lista.push([actividades[opcion],duracion[opcion],fechaActividad]);
	
	mostrar();
}

function mostrar(){
	const ruta=document.getElementById("tabla");
	let escritura="";
	ruta.innerHTML="";
	
	for(let i=0;i<lista.length;i++){
		escritura="";
		escritura+="<td>"+lista[i][0]+"</td>";
		escritura+="<td>"+lista[i][1]+"</td>";
		escritura+="<td>"+lista[i][2].toLocaleDateString()+"</td>";
		
		ruta.innerHTML+="<tr>"+escritura+"</tr>";
	}
}

function eliminar2(){
	let diaEliminar;
	
	
	diaEliminar=prompt("Introduce el dia para eliminar la actividad(dd/mm/yyyy)");
	diaEliminar=diaEliminar.split("/");
	const fechaEliminar=new Date (diaEliminar[2],diaEliminar[1]-1,diaEliminar[0]);
	
	lista=lista.filter((trocito)=>trocito[2].getTime()!=fechaEliminar.getTime())
	mostrar();
}


function guardar(actividad,duracion,fechaActividad){
	
	lista.push([actividad,duracion,fechaActividad])
}
























function eliminar(){
	let diaEliminar=prompt("Introduzca la fecha para eliinar la actividad");
	diaEliminar=diaEliminar.split("/");
	const fechaEliminar=new Date(diaEliminar[2],diaEliminar[1]-1,diaEliminar[0]);
	lista=lista.filter((trocito)=>trocito[2].getTime()!=fechaEliminar.getTime());
	mostrar();
}