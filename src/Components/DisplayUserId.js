import React, { useState, useEffect } from 'react';
import DisplayAddressInformation from './DisplayAddressInformation';

function DisplayUserId({setUserIdToFetchEvent}) {
    const GetUserAddresses = "http://localhost:5000/user_ids"
    const [userId, setUserId] = useState([]);
    const [value, setValue] = useState();


    //ComponentDidMount
    useEffect(() => {
        async function answer() {
            const result = await fetch(GetUserAddresses)
            .then(response => response.json())
            .then(data => setUserId(data));
            return result 
        }
        answer();
    }, [GetUserAddresses])

    function onChange(e) {
        setValue(e.target.value)
        setUserIdToFetchEvent({})
    }

    return (
        <div>
            <form>
                <label>
                show user id's
                <select onChange={onChange} value={value}>
                    {userId.map((value, key) => (
                    <option placeholder="< Select User ID >" key={key} value={value}>{value}</option>
                    ))}
                </select> 
                </label>
            </form>
            <DisplayAddressInformation setUserIdToFetchEvent={setUserIdToFetchEvent} userId={value} setValue={setValue}/>
        </div>
    )
}

export default DisplayUserId;