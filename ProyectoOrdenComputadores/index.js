class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get precio(){
        return this._precio;
    }

    get nombre(){
        return this._nombre;
    }

    set precio(precio){
        this._precio = precio;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._orden = ++contadorOrdenes;
        this._productos = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos(){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos

        }else{
            console.log("No se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVentas += producto;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this._productos){
            productoOrden +=  "/n { " +producto.toString() + "} ";
        }
        console.log(`Orden ${this._idOrden} Total ${this.calcularTotal}, Productos ${productoOrden}`);
    }

}