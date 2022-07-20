class Producto {
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }


    sumarIva() {
    return this.precio * 1.21;
}

    vender(){
    this.disponible = false;
}

    precioSugerido(){
    return this.precio * 1.21 * 1.75;
}

}

var arrayProductos = [];
do {
    var comprobacion = prompt(`Ingrese el nombre del producto o fin para finarlizar`);
    if (comprobacion == "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
    var precioP = prompt(`Ingrese el precio del producto`);
    var detalleP = prompt(`Ingrese el detalle del producto`);
    var cantidadP = prompt(`Ingrese la cantidad comprada`);
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");
    //inner del elemento con plantilla de texto
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Precio : ${producto.precio}</p>
                            <p> Cantidad : ${producto.cantidad}</p>
                            <p> Detalle : ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}

// POCO STOCK - MENOS DE 5 PRODUCTOS

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 5);
document.write("<h3> Productos con poco stock (menos de 5 unidades): </h3>");
for (let producto of pocoStock){
    let contenedor = document.createElement("div");
    //inner del elemento con plantilla de texto
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>                            
                            <p> Cantidad : ${producto.cantidad}</p>
                            <p> Detalle : ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}

// PRODUCTOS SIN STOCK

var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Productos sin stock </h3>");

for (var producto of sinStock){
    //document.write("<h3> Productos sin stock</h3>");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>                            
                            <p> Cantidad : ${producto.cantidad}</p>
                            <p> Detalle : ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}