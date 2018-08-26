/*
    Practice the lessons
*/
let personas =[
    {id:1,nombre:'Fernando'},
    {id:2,nombre:'Elisa'},
    {id:3,nombre:'Francesc'}
]

/*Arrow function */
let getPractice = () => 'pepe'

console.log(getPractice())

getPractice = (id) =>{
    return {id,nombre:'Pepe'}
} 
console.log(getPractice(1))

getNombre = async(id)=>{
    return personas.find(elm =>  elm.id === id)
}
getPractice = async (id) =>{
    let nombre = await getNombre(id)
    return nombre
} 
getPractice(1)
.then(
    resp => console.log(resp)
)
.catch(
    err => console.log(err)
)
