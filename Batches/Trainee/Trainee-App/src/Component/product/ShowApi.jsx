import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ShowApi() {
    const [data, setData] = useState([])
    async function showData() {
        await axios.get('https://dummyjson.com/products').then((res) => {
            setData(res.data.products)
            console.log(res.data.products)
        })
    }
    useEffect(() => {
        showData();
    }, [])

    async function show(id) {
        const singleData = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(singleData.data)
    }
    return (
        <>
            <table border="1" cellPadding={0} cellSpacing={0}>
                <thead>
                    <th>title</th>
                    <th>desc</th>
                    <th>price</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {
                        data.map((items, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{items?.title}</td>
                                        <td>{items?.description}</td>
                                        <td>{items?.price}</td>
                                        <td><button onClick={() => show(items.id)}>single</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default ShowApi;