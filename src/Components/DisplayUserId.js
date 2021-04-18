import React, { useState, useEffect } from 'react';
import DisplayAddressInformation from './DisplayAddressInformation';

function DisplayUserId() {
    const GetUserAddresses = "http://localhost:5000/user_ids"
    const [userId, getUserId] = useState([]);
    const [value, setValue] = useState();

    //ComponentDidMount
    useEffect(() => {
        async function answer() {
            const result = await fetch(GetUserAddresses)
            .then(response => response.json())
            .then(data => getUserId(data));
            return result
        }
        answer();
    }, [GetUserAddresses])


    return (
        <div>
            <form>
                <label>
                show user id's
                <select onChange={e => setValue(e.target.value)} value={value}>
                    {userId.map(value => (
                    <option placeholder="< Select User ID >" value={value}>{value}</option>
                    ))}
                </select>
                </label>
            </form>
            <DisplayAddressInformation userId={value} />
        </div>
    )
}

export default DisplayUserId;