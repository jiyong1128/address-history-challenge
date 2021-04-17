import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Address() {
    const GetUserAddresses = "localhost:5000/users/a871874c-8586-438e-ba38-d311b0807805/addresses"
    const [userId, setUserId] = useState([]);

    //ComponentDidMount
    useEffect(() => {
        async function fetchAddress() {
            const request = await axios.post(GetUserAddresses);
            console.log(request);
            return request;
        }
        fetchAddress();
    }, [])

    return (
        <h1>Address App</h1>
    )
}

export default Address;