import React, { useState, useEffect } from 'react';
import DisplayUserId from './DisplayUserId'

function Address() {
    const GetUserAddresses = "http://localhost:5000/users/a871874c-8586-438e-ba38-d311b0807805/addresses"
    const [userAddressess, setUserAddressess] = useState([]);

    //ComponentDidMount
    useEffect(() => {
        async function answer() {
            const result = await fetch(GetUserAddresses)
            .then(response => response.json())
            .then(data => setUserAddressess(data));
            return result
        }
        answer();
    }, [GetUserAddresses])
    console.log(userAddressess);

    //     async function fetchAddress() {
    //         const request = await axios.post(GetUserAddresses);
    //         console.log(request);
    //         return request;
    //     }
    //     fetchAddress();
    // }, [GetUserAddresses])

    return (
        <div>
            <h1>Address App</h1>

            <DisplayUserId />
        </div>
    )
}

export default Address;