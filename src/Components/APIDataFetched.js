

import { useState, useEffect } from "react";

export function ApiDataFetched() {
    const [mars, setMars] = useState({ photos: [] });

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(response => response.json())
            .then(data => {
                setMars(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="container">
                <h2 className="text-center font-weight-bold">Api Data fetched</h2>
                <hr />
            </div>
            {/* table format data */}
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Photo Id</th>
                            <th> Camera Name</th>
                            <th>Rover Name </th>
                            <th> Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mars.photos.map((photo) => (
                                <tr key={photo.id}>
                                    <td>{photo.id}</td>
                                    <td>{photo.camera.full_name}</td>
                                    <td>{photo.rover.name}</td>
                                    <td>
                                        <img src={photo.img_src} alt="MarsPic" width="100" height="100" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            {/* card Format Data */}
            {/* <div className="d-flex flex-wrap">
                {mars.photos.map((photo) => {
                    return <div className="card p-2 m-2 w-25" key={photo.id}>
                        <img src={photo.img_src} className="card-img-top" alt="MarsPic" width="150" height="150" />
                        <div className="card-header">
                            <h3 className="text-danger font-weight-bold">{photo.camera.full_name}</h3>
                        </div>
                        <div className="card-body">
                            <h3> {photo.rover.name}</h3>
                        </div>
                    </div>
                })}

            </div> */}
        </>
    );
}



