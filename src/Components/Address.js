import React, { useState, useEffect } from 'react';
import DisplayUserId from './DisplayUserId'
import DisplayEventsOnClick from './DisplayEventsOnClick';

function Address() {
    const GetUserAddresses = "http://localhost:5000/users/a871874c-8586-438e-ba38-d311b0807805/addresses"
    const [userAddressess, setUserAddressess] = useState([]);
    const [addressInfo, setAddressInfo] = useState([]);
    const [userId, setUserId] = useState([]);
    const [value, setValue] = useState();
    const [userIdToFetchEvent, setUserIdToFetchEvent] = useState({});
    
    //ComponentDidMount
    useEffect(() => {
        async function answer() {
            const result = await fetch(GetUserAddresses)
            .then(response => response.json())
            .then(data => setUserAddressess(data));
            return result
        }
        answer();
    }, [GetUserAddresses]) // just call once whenever the value within this array gets changed
    console.log(userIdToFetchEvent, "");

    function displayEventComponent() {
        console.log(userIdToFetchEvent, "userIdToFetchEvent")
        return (
            userIdToFetchEvent && Object.keys(userIdToFetchEvent).length ? <DisplayEventsOnClick userIdToFetchEvent={userIdToFetchEvent}/> : "No Events to show"
        )
    }

    return (
        <div>
            <h1>Address App</h1>
            <DisplayUserId setUserIdToFetchEvent={setUserIdToFetchEvent}/>
            {displayEventComponent()}
        </div>
    )
}

export default Address;