import React, { useEffect, useState } from 'react'

export default function UseFetchedData(url) {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch((exception)=>{
                console.error(exception)
            })
    },[url])
    return <>
        <div>UseFetchedData</div>
    </>
}
