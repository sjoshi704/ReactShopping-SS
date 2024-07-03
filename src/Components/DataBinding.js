export default function DataBinding() {

    var products = {
        Name: "LG Ultra 4k HD Tv",
        price: 79900,
        stock: false
    }

    var size = {
        width: 200,
        // height:400,
    }

    var Catogeries = ["Shoes", "Electronice", " Jwelleries", "Cosmetics", "Mens Fashion", "Womens Fashion", "Kids Wear"];
    return <>
        <div className="container">
            <h2> Products Details</h2>
            <dl>
                <dt> Name</dt>
                <dd> {products.Name}</dd>
            </dl>
            <dl>
                <dt> Price</dt>
                <dd> {products.price}</dd>
            </dl>
            <dl>
                <dt> Stock Availabel</dt>
                <dd>{(products.stock === true) ? "Availabel" : "Out of Stock"}</dd>
            </dl>
            <hr />

        </div>

        <div className="container">
            <h2 className="text-center text-danger"> Property Bindings</h2>
            <table border="1" width={size.width}>
                <tr>
                    <td>  Property Bindings</td>
                </tr>
            </table>
        </div>
        <hr />

        <div className="container">
            <h2 className="text-primary text-center"> Catogeries Availabel</h2>
            <ol>
                {Catogeries.map((items,index)=>{
                    // type 1
                    // return <li className="text-success" key={index}>{items}</li>;

                    // type2
                  return  <li key={index}> {items}</li>
                })}
            </ol>
            <hr />
            <h2 className="text-danger text-center">Select options</h2>
            <select className="form-control form-input-md">
                {Catogeries.map((item, index) =>{
                    return <option value={item} key={index}>{item} </option>
                })}
            </select>
        </div>

        <div className="">


        </div>

    </>
}