import React, { useEffect, useState } from 'react';

export function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Load categories
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("All");
                setCategories(data);
            });
    }, []);

    // Load products
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleCategoryChange = (e) => {
        if (e.target.value === "All") {
            fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                });
        } else {
            fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                });
        }
    };

    const handleAddToCart = (e) => {
        alert("Item Added To Cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                // setCartItems(prevCartItems => [...prevCartItems, data]); ---------type 1
                //  type-2
                setCartItems([...cartItems, data]);
                setItemCount(prevCount => prevCount + 1);
                setTotalPrice(prevPrice => prevPrice + data.price); // Add item price to total
                console.log(data);
            });
    };

    const DeleteProduct = (id, price) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setCartItems(cartItems.filter(item => item.id !== id));
            setItemCount(prevCount => prevCount - 1);
            setTotalPrice(prevPrice => prevPrice - price); // Subtract item price from total
        }
    };

    const clearCart = () => {
        if (window.confirm('Are you sure you want to delete all items?')) {
            setCartItems([]);
            setItemCount(0);
            setTotalPrice(0); // Reset total price
        }
    };

    return (
        <div className='container-fluid' style={{ height: "100vh" }}>
            <header className='text-white bg-danger text-center p-2'>
                <h3><span className='bi bi-cart'> Shopping Cart </span></h3>
            </header>
            <section className='row mt-3' style={{ height: "calc(100% - 56px)" }}>
                <nav className='col-md-3'>
                    <div>
                        <label className='col-form-label'>Select Category</label>
                    </div>
                    <div>
                        <select className='form-select' onChange={handleCategoryChange}>
                            {categories.map((category) => (
                                <option key={category} value={category}>{capitalizeFirstLetter(category)}</option>
                            ))}
                        </select>
                    </div>
                </nav>
                <main className='col-md-6 d-flex flex-wrap overflow-auto' style={{ height: "100%" }}>
                    {products.map((product) => (
                        <div key={product.id} className='card m-2 w-25 p-2' style={{ width: "200px" }}>
                            <img src={product.image} className='card-img-top' alt="product" width="150" height="150" />
                            <div className='card-title card-header' style={{ height: "160px" }}>
                                <strong>{product.title}</strong>
                            </div>
                            <div className='card-body'>
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className='bi bi-star-fill text-success'></span>
                                        {product.rating.rate} [<span>{product.rating.count}</span>]
                                    </dd>
                                </dl>
                            </div>
                            <div className='card-footer text-center w-100'>
                                <button id={product.id} onClick={handleAddToCart} className='btn btn-danger'><span className='bi bi-cart4'></span> Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </main>
                <aside className='col-md-3'>
                    <button className='btn btn-danger w-100'><span className='bi bi-cart3'></span>[{itemsCount}]  Your Cart Items</button>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Preview</th>
                                <th onClick={clearCart}><span className="bi bi-trash3-fill">  All</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price} <span className='h6'> &#8377;</span></td>
                                    <td>
                                        <img src={item.image} alt="itemphoto" width="40" height="40" />
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => DeleteProduct(item.id, item.price)}>
                                            <span className="bi bi-trash"></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                                <td><strong>{totalPrice.toFixed(2)} &#8377;</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </aside>
            </section>
        </div>
    );
}
