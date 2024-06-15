import React, { useEffect, useState } from "react";

import {Contador} from "./Contador.jsx";
//create your first component
const Home = () => {
	
	// El estado se ejecuta cada vez la pagina acarga y comienza en 0.
	const [tiempo, setTiempo] = useState(0);

	//Cada vez que el estado sea modificado se va a ejecutar useEfectt 
	// Necesito que cuando la pagina cargue comience a contar los segundos por lo que 
	// utilizamos una funcios de js settimeout dentro de useEfect.
	// SetTimeout ejecuta una funcion con la cantidad de milisegundos que le digamos 1seg = 1000 miliseg.
	// Tenemos que modificar el estado a traves de setTiempo y le damos valor + 1 para que cuente de 1 en 1.
	// Aray de dependencias
	useEffect( () => {
		setTimeout( ()=>{
			setTiempo(valor=> valor+1)
		}, 1000 )
	}, [tiempo] );
	


	// Pasamos la variable tiempo.
	// Necesitamos que cada digito muestre su numero en orden asi que comenzamos del numero mas pequeño(ultima funcion) y lo crcemos.
	// Utilizamos la funcion de js Math.floor que va a devolver el numero entero menor: 0.1>0 0.9>0 10.1>10
	// Despues de Math.floor %10 le decimos que cuando llegue a 9 vuelva 0.
	// En el siguiente dividimos tiempo /10 y añadimos %10 para que de 9 vuelva a 0.
	// Sigue la logica en los demas.
	return (
		<div className="text-center">
			<div className="caja-contador">
			<Contador numero = {<span className="fa fa-bomb"></span>}/>
			<Contador numero = {Math.floor(tiempo/100000)%10}/>
			<Contador numero = {Math.floor(tiempo/10000)%10}/>
			<Contador numero = {Math.floor(tiempo/1000)%10}/>
			<Contador numero = {Math.floor(tiempo/100)%10}/>
			<Contador numero = {Math.floor(tiempo/10)%10}/>
			<Contador numero = {Math.floor(tiempo%10)}/>
			</div>
		</div>
	);
};

export default Home;
