import productsData from "../../data/products";

function Products() {
    return (
        <div>
            <h1>Products Management</h1>
            <ul>
                {productsData.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.category} - ${product.price} -
                        Stock: {product.stockQuantity}
                    </li>
                ))}
            </ul>
            <button>Add Product</button>
        </div>
    );
}

export default Products;
