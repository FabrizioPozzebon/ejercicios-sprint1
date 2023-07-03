let miNombre
miNombre = "Fabrizio"
let miApellido
miApellido = "Pozzebon"
let miEdad
miEdad = 20
let miMascota
miMascota = "Lola"
let edadMascota
edadMascota = 5
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
let nombreCompleto = "Fabrizio" + " " + "Pozzebon"
console.log(nombreCompleto)
let textoPresentacion
textoPresentacion = `Hola soy ${miNombre} ${miApellido} mi edad es ${miEdad} años, tengo una mascota llamada ${miMascota} y tiene ${edadMascota} años`
console.log(textoPresentacion) 
let sumaEdades
sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
let restaEdades
restaEdades = miEdad - edadMascota
console.log(restaEdades)
let productoEdades
productoEdades = miEdad * edadMascota
console.log(productoEdades)
let divisionesEdades
divisionesEdades = miEdad / edadMascota
console.log(divisionesEdades)

let alumno = {
    nombre: "Fabrizio",
    apellido: "Pozzebon",
    edad: 20,
    cohort: 49, 
    curso: "full stack java",  
}
console.table(alumno)
let mascota = {
    nombre: "Lola",
    edad: 5,
    color: "blanco",
    juega: true,
    come: true,
}
console.table(mascota)
let frutas = ["naranja", "banana", "mandarina", "manzana", "uva"]
console.log(frutas)
let numeros = ["uno", "dos", "tres", "cuatro", "cinco"]
console.log(numeros)
let familia = ["madre", "padre", "hermano", "abuela", "abuelo"]
console.log(familia)
let textoAleatorio
textoAleatorio = `Hola soy ${miNombre}, mi fruta favorita es la ${frutas[1]}, disfruto mucho de las tardes con mi ${familia[4]} aunque disfruto de los ${numeros[3]} que tengo`
console.log(textoAleatorio)
let soyMayorDeEdad = prompt("Ingrese su edad")
console.log("Soy mayor de edad con " + soyMayorDeEdad) 
let edadCompañero = prompt("Ingrese la edad del compañero")
console.log("Mi edad es igual a la de mi compañero" + soyMayorDeEdad == edadCompañero) 
console.log("Mi edad es mayor a la de mi compañero" + soyMayorDeEdad<=edadCompañero)
console.log("Mi edad es menor a la de mi compañero" + soyMayorDeEdad>=edadCompañero)