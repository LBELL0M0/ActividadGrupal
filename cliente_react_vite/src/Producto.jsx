import "./MisComponentes.css"

function Producto({ nombre, precio, descuento, categoria }) {

    const precioConDescuento = precio - (precio * descuento / 100);
    const tieneDescuento = descuento > 0;

    return (
    <div className="product">
        <h2>{nombre}</h2>
        <span className="category">{categoria}</span>
        
        <div>
        {tieneDescuento ? (
            <>
            <span className="original-price">${precio}</span>
            <span className="discounted-price">${precioConDescuento}</span>
            <span className="discount-badge">{descuento}% OFF</span>
            </>
        ) : (
            <span>${precio}</span>
        )}
        </div>
    </div>
    );
}

export default Producto;