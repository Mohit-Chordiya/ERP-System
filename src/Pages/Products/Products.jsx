import { useState } from "react";
import "./Products.css";

const initialProducts = [
    { id: 1, name: "Product 1", category: "Category 1", price: 10, stock: 20 },
    { id: 2, name: "Product 2", category: "Category 2", price: 15, stock: 25 },
    { id: 3, name: "Product 3", category: "Category 3", price: 20, stock: 30 },
    { id: 4, name: "Product 4", category: "Category 4", price: 25, stock: 35 },
    { id: 5, name: "Product 5", category: "Category 5", price: 30, stock: 40 },
];

const ProductManagement = () => {
    const [products, setProducts] = useState(initialProducts);
    const [editingProduct, setEditingProduct] = useState(null);

    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: 0,
        stock: 0,
    });

    const handleAddProduct = () => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        setNewProduct({ name: "", category: "", price: 0, stock: 0 });
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const handleEditProduct = (product) => {
        setEditingProduct({ ...product });
    };

    const handleUpdateProduct = () => {
        setProducts(
            products.map((product) =>
                product.id === editingProduct.id ? editingProduct : product
            )
        );
        setEditingProduct(null); // Clear editing product
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h1>Product Management</h1>
            {editingProduct ? (
                <div className="edit-form">
                    <center>
                        <h2>
                            <center>Update Existing Product Details</center>
                        </h2>
                        <input
                            type="text"
                            name="name"
                            value={editingProduct.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="category"
                            value={editingProduct.category}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="price"
                            value={editingProduct.price}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="stock"
                            value={editingProduct.stock}
                            onChange={handleChange}
                        />
                        <br /> <br />
                        <button onClick={handleUpdateProduct}>
                            Update Product
                        </button>
                    </center>
                </div>
            ) : (
                <div className="main-table">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <center>
                                            <button
                                                onClick={() =>
                                                    handleEditProduct(product)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteProduct(
                                                        product.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </center>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="add-product">
                        <h2>
                            <center>Add New Product</center>
                        </h2>

                        <input
                            type="text"
                            placeholder="Name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    category: e.target.value,
                                })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    price: Number(e.target.value),
                                })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            value={newProduct.stock}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    stock: Number(e.target.value),
                                })
                            }
                        />
                        <br />
                        <br />
                        <center>
                            <button
                                className="add-button"
                                onClick={handleAddProduct}
                            >
                                Add Product
                            </button>
                        </center>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;
