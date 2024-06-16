import React, { useEffect, useState } from "react";

import {Contador} from "./Contador.jsx";
//create your first component
const Home = () => {
	
	// El estado se ejecuta cada vez la pagina carga y comienza en (0).
	const [tiempo, setTiempo] = useState(0);
	const [activo, setActivo] = useState(false);

	//Cada vez que el estado sea modificado se va a ejecutar useEfectt. 
	// Necesito que cuando la pagina cargue comience a contar los segundos por lo que 
	// utilizamos una funcios de js settimeout dentro de useEfect.
	// SetTimeout ejecuta una funcion con la cantidad de milisegundos que le digamos 1seg = 1000 miliseg.
	// Tenemos que modificar el estado a traves de setTiempo y le damos valor + 1 para que cuente de 1 en 1.
	// Aray de dependencias
	// usarBotones le pasamos el valor contrario al que tiene
	
	useEffect( () => {
		if (activo) {
			setTimeout( ()=>{
				setTiempo(valor=> valor+1)
			}, 1000 )
		}
	}, [tiempo, activo] );
	
	//funcion para los botones asignadas a oncclick.
	//Se crea un nuevo estado llamado activo
	// Para que inicio y parar funcione react dbe saber cuando esta activo  o no lo esta.
	// por eso creamos una condicionalcon el useState llamado activo.
	const inicioParar = () => {setActivo(value => !value)}
	const reiniciar = () => setTiempo (valor=> valor=0)

	// Pasamos la variable tiempo.
	// Necesitamos que cada digito muestre su numero en orden asi que comenzamos del numero mas pequeño(ultima funcion) y lo crcemos.
	// Utilizamos la funcion de js Math.floor que va a devolver el numero entero menor: 0.1>0 0.9>0 10.1>10
	// Despues de Math.floor %10 le decimos que cuando llegue a 9 vuelva 0.
	// En el siguiente dividimos tiempo /10 y añadimos %10 para que de 9 vuelva a 0.
	// Sigue la logica en los demas.
	// Creamos tres botones onclick mx-1 hace que separe los botones.
	//Cuenta regresiva.
	//Creamos un formulario onsubmit que por defecto recarga la pagina pero como no queremos que lo haga 
	//hacemos preventdefault diciendo que el evento que se va a generar no haga el funcionamiento por defecto, es decir
	// que no la pagina no se reinicie.
	// Creamos un input type numero, y el valor lo conectamos a tiempo.
	//
	return (
		<div className="text-center">
			<div className="caja-contador mt-2">
			<Contador numero = {<span className="fa fa-bomb"></span>}/>
			<Contador numero = {Math.floor(tiempo/100000)%10}/>
			<Contador numero = {Math.floor(tiempo/10000)%10}/>
			<Contador numero = {Math.floor(tiempo/1000)%10}/>
			<Contador numero = {Math.floor(tiempo/100)%10}/>
			<Contador numero = {Math.floor(tiempo/10)%10}/>
			<Contador numero = {Math.floor(tiempo%10)}/>
			</div>
			
			<div className="container text-center mt-2">
				<h2>Control Contador</h2>
				<div className="container text-center">
					<button onClick={inicioParar}  className="mx-1 btn btn-success"> Inicio     </button>
					<button onClick={inicioParar} className="mx-1 btn btn-danger">  Parar      </button>
					<button onClick={reiniciar} className="mx-1 btn btn-warning"> Reiniciar  </button>
				</div>
			</div>

			<div className="my-2">
				<h2>Cuenta Atras</h2>

			</div>
		</div>
	);
};

export default Home;
