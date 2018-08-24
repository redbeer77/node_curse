// function sumar(a,b){
//     return a + b
// }

// let sumar=(a,b) =>{
//     return a + b;
// }


//let sumar=(a,b) => a + b;

// function saludar(){
//     return 'hola';
// }

//let saludar = () => 'hola'

// function saludar(a){
//     return `hola ${a}`
// }

// let saludar = a => `hola ${a}` 
// let saludo = (a) => `hola ${a}` 

//console.log(sumar(2,2))

// console.log(saludar('pepe'))
// console.log(saludo('pepe'))

let deadpoll = {
    nombre: 'Wade',
    apellido:'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${ this.poder}`
    }
};

console.log(deadpoll.getNombre())

