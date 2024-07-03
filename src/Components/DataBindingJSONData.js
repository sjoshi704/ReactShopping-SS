import { useState } from "react";

export function DataBindingJsonData() {
    var Products = [
        { Name: "Samsung TV", Price: 67000 },
        { Name: "LG TV", Price: 77000 },
        { Name: "OnePlus TV", Price: 56000 },
        { Name: "I Phone 15 Pro", Price: 126000 },
        { Name: "I Phone 12 Pro", Price: 45000 },
        { Name: "Realme Tv", Price: 34000 }
    ];

    var menu = [
        { Catogery: "Electronics", Products: ["Samsung Tv", "Mobile", "BlueTooths", "Headset"] },
        { Catogery: "Fashion", Products: ["Mens Trouser", "T-Shirts", "Jeans", "Denims"] },
        { Catogery: "Footwear", Products: ["Loafers", "Sandals", "Sport Shoes", "Sneakers"] }
    ]

    const [products, setProduct] = useState(["Tv", "Mobile", "Refrigerator", "Oven", "Iron", "Geyser", "Mixer"])
    const addProduct = () => {
        const newProducts = [...products]
        newProducts.push("Furniture", "Home Theater", "AC")
        console.log(newProducts)
        setProduct(newProducts);
    }
    const deleteProducts = () => {
        let newProducts = [...products];
       newProducts= newProducts.slice(0, -3);
        setProduct(newProducts);
    }
    return <>
        <div>
            <h2 className="text-success text-center font-weight-bold">  JSON Data Binding</h2>
            <hr />
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map(item => {
                            return <tr key="">
                                <td>{item.Name} </td>
                                <td> {item.Price} </td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="container">
            <h2 className="text-center text-primary fornt-weight-bold"> Array Of Objects </h2>
        </div>
        <ol>
            {menu.map((item) => {
                return <li key={item.Catogery} className="text-danger h4">{item.Catogery}
                    <ul>
                        {item.Products.map((product) => {
                            return <li key={product} className="text-secondary">{product}</li>
                        })}
                    </ul>

                </li>
            })}
        </ol>
        <hr />
        <div className="container">
            <h3 className="text-primary text-center h4"> Select A Dropdown</h3>
        </div>
        <div>
            <select className="form-control">
                {menu.map((item) => {
                    return <optgroup key={item.Catogery} label={item.Catogery}>
                        {item.Products.map((product) => {
                            return <option key={product} value={product}>{product} </option>
                        })}
                    </optgroup>
                })}
            </select>
        </div>
        <hr />
        <div className="container">
            <h3 className="text-success font-weight-bold text-center">useState example and syntax </h3>
        </div>
        <div>
            <ol>
                {products.map(name => {
                    return <li className="h6" key={name}>{name} </li>
                })
                }
            </ol>
        </div>
        <div className="container">
            <button className="btn btn-success" onClick={addProduct}> Add New Products</button>
            <button className="btn btn-danger m-2" onClick={deleteProducts}> Remove Products</button>

        </div>
    </>
}
