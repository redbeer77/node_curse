let deadpoll = {
    nombre: 'Wade',
    apellido:'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${ this.poder}`
    }
};

//console.log(deadpoll.getNombre());

// let nombre = deadpoll.nombre;
// let apellido = deadpoll.apellido;
// let poder = deadpoll.poder;

let {nombre:primerNombre, apellido,poder } = deadpoll;

console.log(primerNombre , apellido , poder)