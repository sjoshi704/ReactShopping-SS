export default function NetflixHeaderComponent() {
    return <>
        <div className="d-flex justify-content-between p-3 m-3">
            <div className="text-danger">
                <h3 className="text-danger"> NETFLIX</h3>
                {/* <img src="./netflix Logo.webp" alt=""/> */}
            </div>
            <div className="input-group w-25">
                <select className="form-control">
                    <option> Language</option>
                    <option> Hindi</option>

                    <option> English</option>

                </select>
                <button className="btn btn-danger ms-2"> SignIn</button>
            </div>
        </div>
    </>
}