//funciones - functions expresions
//declarion de funciones

function sumardeclarion(n1=0,n2=0)
{
    return n1+n2
}
console.log(sumardeclarion(10,10))
//expresion de funciones

const sumarexpresion=function(n1=0,n2=0)
{
    return n1+n2
}
console.log(sumardeclarion(10+15))
//funciones arrow functions
const sumararrow=(n1=0,n2=0)=>
{
    return n1+n2
}
console.log(sumararrow(5,50))
const sumararrow2=(n1=0,n2=0)=>n1 +n2
console.log(sumararrow2(10,20))

//arrow function y array methods

const lenguajedeprogramacion=["javascript", "python","c#","ruby","php","lisp"]

const nuevoArray =lenguajedeprogramacion.map (function(lenguaje)
{

    if (lenguaje==='phyton')
    {
        return 'mojo'
    }
    else 
    {
        return lenguaje
    }   
})

const nuevoarratmap = lenguajedeprogramacion.map (lenguaje =>
{
    if (lenguage == 'python')
    {
        return 'arrowmojo'
    }
    else
    {
        return lenguaje
    }


})

cosole.log(nuevoArray)
console.log(nuevoarratmap)
const nuevoarray2=lenguajedeprogramacion.filter(function(lenguaje)
{
    return lenguaje === 'javascript'

})

const nuevoarrayfilterarrow = lenguajedeprogramacion.filter(lenguage => 
{
    return lenguage !=='javascript'
})
console.log(nuevoarray2)
console.log(nuevoarrayfilterarrow)

const mensaje = ( msg )=> `Hola como estas ${msg}`
console.log('Mensaje: ', mensaje('Christian'))