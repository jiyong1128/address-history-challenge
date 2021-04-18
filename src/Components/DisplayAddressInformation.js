import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
// import {DisplayAddressInformation} from './'

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItem } from '@material-ui/core';

function DisplayAddressInformation({ userId }) {

    const disPlayAddressUrl = `http://localhost:5000/users/${userId}/addresses`

    const [addressInfo, setAddressInfo] = useState([]);

    useEffect(() => {
        async function answer() {
            const result = await fetch(disPlayAddressUrl)
                .then(response => response.json())
                .then(data => setAddressInfo(data));
            return result
        }
        answer();
    }, [disPlayAddressUrl])

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         justifyContent: 'space-around',
    //         overflow: 'hidden',
    //         backgroundColor: theme.palette.background.paper,
    //     },
    //     gridList: {
    //         width: 500,
    //         height: 450,
    //     },
    //     icon: {
    //         color: 'rgba(255, 255, 255, 0.54)',
    //     },
    // }));

    const useStyles = makeStyles((theme) => ({
        root: {
        //   width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
      }));

          const classes = useStyles();

          const add = {
            "id": "0ea28ad0-9fc1-11eb-87b9-cfb9b39afd38",
            "user_id": "a871874c-8586-438e-ba38-d311b0807805",
            "street_one": "111 Main Street",
            "street_two": "Apt 42",
            "city": "josh",
            "state_id": "LA",
            "zip_code": "94618",
          }

    return (
        <div>
            Address information userId
            <List component="nav" className={classes.root} aria-label="mailbox folders">
            {addressInfo.map((address) => (
                <ListItem button>
                    id: <ListItemText primary={address.id} />
                    user_Id: <ListItemText primary={address.userId} />
                    city: <ListItemText primary={address.city} />
                    city: <ListItemText primary={address.city} />
                    city: <ListItemText primary={address.city} />

                </ListItem>
            ))}
            </List>
        </div>
    )
}

export default DisplayAddressInformation;


{/* <GridList cellHeight={180} className={classes.gridList}>
<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    <ListSubheader component="div">December</ListSubheader>
</GridListTile>
{addressInfo.map((address) => (
    <GridListTile>
        <GridListTileBar
            title={address}
        />
    </GridListTile>
))}
</GridList> */}