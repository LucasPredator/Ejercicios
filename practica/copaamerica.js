//Copa américa 2024 equipos sudamericanos y la cantidad de titulos
let equiposCopAmerica = [
    {
        nombre: "Argentina",
        confederacion: "CONMEBOL",
        titulos: 15,
        jugadores: ["Lionel Messi", "Ángel Di María", "Emiliano Martínez"],
        numeros: [10, 11, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Brasil",
        confederacion: "CONMEBOL",
        titulos: 9,
        jugadores: ["Neymar", "Thiago Silva", "Alisson Becker"],
        numeros: [10, 3, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Uruguay",
        confederacion: "CONMEBOL",
        titulos: 15,
        jugadores: ["Luis Suárez", "Edinson Cavani", "Diego Godín"],
        numeros: [9, 21, 3] // Ejemplo de números de camiseta
    },
    {
        nombre: "Chile",
        confederacion: "CONMEBOL",
        titulos: 2,
        jugadores: ["Arturo Vidal", "Alexis Sánchez", "Claudio Bravo"],
        numeros: [8, 7, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Colombia",
        confederacion: "CONMEBOL",
        titulos: 1,
        jugadores: ["James Rodríguez", "Radamel Falcao", "David Ospina"],
        numeros: [10, 9, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Paraguay",
        confederacion: "CONMEBOL",
        titulos: 2,
        jugadores: ["Miguel Almirón", "Óscar Cardozo", "Antony Silva"],
        numeros: [10, 7, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Perú",
        confederacion: "CONMEBOL",
        titulos: 2,
        jugadores: ["Paolo Guerrero", "Christian Cueva", "Pedro Gallese"],
        numeros: [9, 10, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Bolivia",
        confederacion: "CONMEBOL",
        titulos: 1,
        jugadores: ["Marcelo Moreno", "Juan Carlos Arce", "Carlos Lampe"],
        numeros: [9, 7, 1] // Ejemplo de números de camiseta
    },
    {
        nombre: "Ecuador",
        confederacion: "CONMEBOL",
        titulos: 0,
        jugadores: ["Enner Valencia", "Felipe Caicedo", "Antonio Valencia"],
        numeros: [13, 9, 25] // Ejemplo de números de camiseta
    },
    {
        nombre: "Venezuela",
        confederacion: "CONMEBOL",
        titulos: 0,
        jugadores: ["Salomón Rondón", "Tomás Rincón", "Wuilker Faríñez"],
        numeros: [23, 8, 1] // Ejemplo de números de camiseta
    }
];

const listaEquipos = document.querySelector(".lista-equipos");

equiposCopAmerica.forEach(equipos => {
    const li = document.createElement("li")
    li.textContent = `${equipos.nombre}: ${equipos.titulos}`
    listaEquipos.append(li)
})

///--------------------------------- ° -------------------------------

//Ahora vamos a mostrar en otra lista, los jugadores de cada equipo con el numero de su camiseta y el nombre del equipo.

const listaJugadores = document.querySelector(".jugadores-equipos");

equiposCopAmerica.forEach(jugadores => {
    const li = document.createElement("li")
    li.textContent = `${jugadores.jugadores}: ${jugadores.numeros}: ${jugadores.nombre}`
    listaJugadores.append(li)
})