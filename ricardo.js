//objects
const nombreproducto = "ipad"
// const precio =549
//const disponible = true

const producto ={
    nombre:"ipad",
    precio:549,
    disponible: true
}

console.table(producto)
console.table(producto.nombre)
console.table(producto.disponible)
console.table(producto.precio)

//destructuring

const {nombre,precio,disponible}= producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//object literal enhancment
/*const autenticado = true
const usuario = "ivan"
const newobject {
    autenticado: autenticado,
    usuario: usuario
}*/

//manipulacion de objetos
const producto2 = {
    nombre:"macbookpro",
    precio:1299,
    disponible: true,

}
console.table(producto2)
//modificacion de objeto
producto2.nombre = "macmini"
producto2.precio = 599
producto2.disponible = true
console.table(producto2)
//como agregarle un elemento al objeto
producto2.image = "inage.jpg"
console.table(producto2)
//como eliminar a un  elemento de un objeto
delete producto2.image
console.table(producto2)
