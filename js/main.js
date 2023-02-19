/* Voy a definir las clases que voy a utilizar */
class Cliente{
    constructor(nombre,edad,membresia){
        this.nombre=nombre;
        this.edad=edad;
        this.membresia=membresia;
    }
}

class Vehiculos{
    constructor(marca,modelo){
        this.marca=marca;
        this.modelo=modelo;
    }
}

class Alquiler{
    constructor (vehiculo, cliente, costo, fecha){
        this.vehiculo=vehiculo;
        this.cliente=cliente;
        this.costo=Math.round(costo);
        this.fecha=fecha || new Date(); 
    }
}

//Membresia BLACK --> puede alquilar por 30 dìas
//Membresia NORMAL --> puede alquilar por 15 dìas

const clienteUno= new Cliente("Julian", 30,"Black");
const clienteDos= new Cliente ("Pedro", 20, "Normal");

const vehiculoUno = new Vehiculos("Ford","Ka");
const vehiculoDos = new Vehiculos("Chevrolet", "Onix");

const alquilerUno = new Alquiler (vehiculoUno, clienteUno, 20000);
const alquilerDos = new Alquiler (vehiculoDos, clienteDos, 60000, new Date("February 4, 2023 17:00"));

/* Defino las funciones */
function diasAlquilerSegunMembresia (cliente){
    if (cliente.membresia=="Black"){
        return 30;
    } else {
        return 15;
    }
}

function vehiculosDevolverHoy (alquiler){
    let fechaAlquiler =alquiler.fecha;
    let fechaActual = new Date ();
    let diasAlquiler = diasAlquilerSegunMembresia(alquiler.cliente);

    fechaAlquiler.setDate(fechaAlquiler.getDate()+diasAlquiler);

    if(fechaAlquiler < fechaActual){
        return `El cliente ${alquiler.cliente.nombre} debe devolver hoy el vehiculo ${alquiler.vehiculo.marca} modelo ${alquiler.vehiculo.modelo} y el costo es de $${alquiler.costo}`
    }else{
        return `El cliente ${alquiler.cliente.nombre} no debe devolver hoy el vehiculo ${alquiler.vehiculo.marca} modelo ${alquiler.vehiculo.modelo}`
    }
}

function verificarExistencia () {
    let marcaUsuario = prompt("Ingrese marca del vehiculo a alquilar: ");
    let modeloUsuario = prompt ("Ingrese el modelo deseado: ");
    let statusMarca = vehiculosMarca.indexOf(marcaUsuario);
    let statusModelo = vehiculosModelo.indexOf(modeloUsuario);

    if ( statusMarca >= 0 && statusModelo >= 0) {
        alert ("El vehículo a alquilar ya se encuentra alquilado");
        let decDos= parseInt(prompt("Desea probar con otro modelo? 1) Si | 2) No: "));
        if (decDos==1){
            verificarExistencia(statusMarca,statusModelo);
        }else{
            return;
        }
    } else {
        const vehiculoTres = new Vehiculos (marcaUsuario, modeloUsuario);
        vehiculosArray.push ("marca " + marcaUsuario + " modelo "+ modeloUsuario);
        return 1, marcaUsuario, modeloUsuario;
    }
}

/* Aplicativo */

let clientes = [clienteUno.nombre, clienteDos.nombre];
let vehiculosMarca = [vehiculoUno.marca, vehiculoDos.marca];
let vehiculosModelo = [vehiculoUno.modelo, vehiculoDos.modelo];
let vehiculosArray = ["marca " + vehiculoUno.marca + " modelo "+ vehiculoUno.modelo,"marca " + vehiculoDos.marca + " modelo "+ vehiculoDos.modelo ] //Vehiculos alquilados hasta el momento 

let dec = parseInt(prompt("Desea ingresar un nuevo alquiler? 1) Si | 2) No"));

if (dec == 1) {
    /* Registro del cliente nuevo */
    let nombreUsuario = prompt ("Ingrese nombre cliente: ");
    let edadUsuario = parseInt(prompt("Ingrese edad cliente: "));
    let membresiaUsuario = prompt ("Ingrese membresia cliente: ");
    const clienteTres = new Cliente (nombreUsuario, edadUsuario, membresiaUsuario);
    clientes.push (nombreUsuario);
    console.log ("Se ha añadido un nuevo cliente de nombre " + nombreUsuario + " con una membresia " + membresiaUsuario);

    /* Registro del alquiler nuevo */
    if (verificarExistencia () == 1){
        console.log (verificarExistencia());
        console.log ("Se ha registrado el alquiler de " + nombreUsuario + " por el vehiculo " + marcaUsuario + " " + modeloUsuario);
    }
    

    /* Uno los elementos del array */
    let clientesUnidos = clientes.join("/");
    console.log ("Los clientes registrados hasta el momento son: " + clientesUnidos);
}else{
    let vehiculosUnidos = vehiculosArray.join ("/");
    console.log ( "Los siguientes vehiculos se encuentran alquilados: " + vehiculosUnidos)
    console.log (vehiculosDevolverHoy(alquilerUno));
    console.log(vehiculosDevolverHoy(alquilerDos));
}