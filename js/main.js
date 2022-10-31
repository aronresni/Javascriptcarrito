let precioTotal = 0
let salir = false

class Producto {
    constructor(marca, nombreProducto, precio, material) {
        this.marca = marca
        this.nombreProducto = nombreProducto
        this.precio = precio
        this.material = material
    }
    alertMarca() {
        alert(`${this.nombreProducto} es del siguiente material: ${this.material}`)
    }
}
const zapatilla1 = new Producto("Nike", "Pegasus 37", 16999, "Flyknit")
const zapatilla2 = new Producto("Nike", "Blazer Mid 77", 17499, "Cuero")
const zapatilla3 = new Producto("Adidas", "Ultraboost", 13999, "Tela")
const zapatilla4 = new Producto("Under Armour", "Curry 6", 14399, "Sintetico")

const arrayZapatillas = []
arrayZapatillas.push(zapatilla1, zapatilla2, zapatilla3, zapatilla4)

//Seleccion de productos y suma de precios
function promptMenu() {
    let opciones = parseInt(prompt(
        `¿Que zapatilla desea comprar? 
    2- Nike Pegasus 37 $16999
    3- Nike Mid Blazer 77 $17499
    4- Adidas Ultraboost $13999
    5- Under Armour Curry 6 $14399
    6- Finalizar compra.`))
    opcionesCatalogo(opciones)
}

function opcionesCatalogo(accionOpciones) {
    switch (accionOpciones) {

        case 2:
            alert(`Zapatillas Pegasus 37 agregado al carrito
        Total a Pagar:$${precioTotal}`)
        precioTotal=precioTotal+ 16999
            break
         

        case 3:
            alert(`Zapatillas Nike Mid Blazer 77 agregado al carrito
        Total a Pagar:$${precioTotal}`)
            precioTotal = precioTotal + 17499
            break

        case 4:
            alert(`Adidas Ultra Boost agregado al carrito
            Total a Pagar:$${precioTotal}`)
            precioTotal = precioTotal + 13499
            break

        case 5:
            alert(`Zapatillas Under Armour Curry 6 agregado al carrito
                Total a Pagar:$${precioTotal}`)
            precioTotal = precioTotal + 14399
            break

        case 6:
            salir = true
            if (precioTotal == 0) {
                alert("¡Gracias por visitar nuestra tienda!")
            }
            else {
                alert(`El total es: $${precioTotal}`)
            }
            break
        default:
            alert(`¡Ingrese una opcion del catalogo!`)
    }

}
//Para repetir el prompt
while (salir != true) {
    promptMenu()
}

