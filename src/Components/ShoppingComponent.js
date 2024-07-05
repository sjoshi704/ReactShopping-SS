import React, { useEffect, useState } from 'react';


export function ShoppingComponent() {

    const [Catogeries, setCatogeries] = useState([]);
    const [products, setProducts] = useState([]);

    // type 1
    // function LoadCatogeries() {
    //     fetch("https://fakestoreapi.com/products/categories")
    //         .then(response => response.json())
    //         .then(data => {
    //             setCatogeries(data);
    //         })
    // }
    // useEffect(() => {
    //     LoadCatogeries();
    // }, []);

    //  Short Method Type 2

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("All");
                setCatogeries(data);
            }, []);
    });
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            }, []);
    });
    console.log(Catogeries);

    const capitalizeFirstLetter = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };
    return (
        <>
            <div className='container-fluid'>
                <header className='text-white bg-danger text-center p-2'>
                    <h3> <span className='bi bi-cart'> Shopping Cart </span> </h3>
                </header>
            </div>
            <section className='row'>
                <nav className='col-md-3'>
                    <div>
                        <label className='col-form-label'>   Select Catogery</label>
                    </div>
                    <div>
                        <select className='form-select'>
                            {
                                Catogeries.map((Catogery) => {
                                    return <option key={Catogery} value={Catogery}>{capitalizeFirstLetter(Catogery)}</option>;
                                })
                            }
                        </select>
                    </div>

                </nav>

                <main className='col-md-9 d-flex flex-wrap overflow-auto' style={{height:"400px"}}>
                    {
                        products.map((product) => {
                            return <div key={product.id} className='card m-2  w-25 p-2'>
                                <img src={product.image} className='card-img-top' alt="product" width="150" height="150" />
                                <div className='card-title card-header'>
                                    <strong>{product.title}</strong>
                                </div>
                                <div className='card-body'>
                                    <dl>
                                        <dt> Price</dt>
                                        <dd> {product.price} </dd>
                                        <dt> Rating</dt>
                                        <dd> <span className='bi bi-star-fill text-success'> </span>
                                        {product.rating.rate} [<span className=''> {product.rating.count}</span>]
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        })
                    }

                </main>
            </section>
        </>
    )
}
