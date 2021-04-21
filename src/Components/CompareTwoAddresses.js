import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItem } from "@material-ui/core";
import List from "@material-ui/core/List";

function CompareTwoAddresses(props) {
  const data = props.location.state;
  const { addresses } = useContext(GlobalContext);

  function showAddressObj(address) {
    const addressInfoObj = [];
    for (const [key, value] of Object.entries(address)) {
      addressInfoObj.push(
        <div key={addressInfoObj.length}>
          {key}: <ListItemText primary={value} />
        </div>
      );
    }
    return (
      <ListItem style={{ display: "grid" }} button>
        { address.isSelected ? <div>address URL: {address.url}</div> : null}
    </ListItem>
    );
  }

  return (
  <div>
    Compare 
    { data && data.length ? 
    <List component="nav" aria-label="mailbox folders">
      {data.map((address, key) => (
        <div key={key}>{showAddressObj(address)}</div>
      ))}
    </List>
    : null}
  </div>
  )
}

export default CompareTwoAddresses;
