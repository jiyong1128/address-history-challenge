import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

function DisplayAddressInformation({ userId, setUserIdToFetchEvent }) {

    const disPlayAddressUrl = `http://localhost:5000/users/${userId}/addresses`

    const [addressInfo, setAddressInfo] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        async function answer() {
            const result = await fetch(disPlayAddressUrl)
                .then(response => response.json())
                .then(data => setAddressInfo(data));
            return result
        }
        answer();
    }, [disPlayAddressUrl])

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            display: 'grid',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    function onClick(obj) {
        setUserIdToFetchEvent(obj)
        setAddress(obj);
    }

    const classes = useStyles();

    function coverObj(obj) {
        const arr = []
        for (const [key, value] of Object.entries(obj)) {
            arr.push(<div key={arr.length}>
                {key}: <ListItemText primary={value} />
            </div>)
        }
        return (<ListItem onClick={() => onClick(obj)} style={{ display: "grid" }} button>
            {[...arr]}
        </ListItem>)
    }

    return (
        <div>
            Address information userId
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                {addressInfo.map((address, key) => (
                    <div key={key}>
                        {coverObj(address)}
                    </div>
                ))}
            </List>
        </div >
    )
}

export default DisplayAddressInformation;
