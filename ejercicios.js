//Ejercicio 1

const comparacionNumeros = (num1, num2) =>
{
    if (num1 == num2)
    {
        console.log("Ambos números son iguales")
        
    }else if (num1 > num2)
    {
        console.log("El numero mayor es", num1)
        console.log("El numero menor es", num2)       
    }else
    {
        console.log("El numero mayor es", num2)
        console.log("El numero menor es", num1) 
    }
}
//comparacionNumeros(80,100)

//Ejercicio 2

const num = []

const numerosEnteros = (num1, num2) =>
{
    if(num1 < num2)
    {
        for (let index = num1+1; index < num2; index++) {
            const enteros = index;  
            console.log(enteros)      
        }
    }else
    {
        console.log("El primer número debe ser menor que el segundo")
    }
    
}

//numerosEnteros(9,8)

// Ejercicio 3

let nombre = "Jose"
let apellido = "Peña"

const bienvenida = (nombre, apellido) =>
{    
    console.log("Bienvenido@ a nuestro sitio web", nombre, apellido)
}

//bienvenida("Jose","Peña")


//Ejercicio 4

const persona1 = 
{
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

const persona2 = 
{
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 25
}

const persona3 = 
{
    nombre: 'Ernesto',
    apellido: 'Ocanto',
    edad: 35
}

const persona4 = 
{
    nombre: 'Jose',
    apellido: 'Perez',
    edad: 40
}

const persona5 = 
{
    nombre: 'May',
    apellido: 'Ibarra',
    edad: 27
}

const personas = [persona1,persona2,persona3,persona4,persona5]


const edadesPersonas = (personas = []) =>
{
    let edadMayor = 0
    let edadMenor = 100
    let acumEdad = 0
    let edadPromedio = 0

    for (let index = 0; index < personas.length; index++) 
    {  
        

        if(personas[index].edad > edadMayor)
        {     
            edadMayor = personas[index].edad
        }    
    }
    console.log("La mayor edad del arreglo es: ", edadMayor)

    for (let index = 0; index < personas.length; index++) 
    {  
        

        if(personas[index].edad < edadMenor)
        {     
            edadMenor = personas[index].edad
        }    
    }
    console.log("La menor edad del arreglo es: ", edadMenor)

    for (let index = 0; index < personas.length; index++) 
    {      
         acumEdad = acumEdad += personas[index].edad      
                
    }
    edadPromedio = acumEdad/5
    console.log("El promedio de edad es: ", edadPromedio)

   
}
edadesPersonas(personas)





