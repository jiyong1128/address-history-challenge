import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItem } from "@material-ui/core";

function DisplayAddressInformation({ selectedUserId, setUserIdToFetchEvent }) {
  const getAllAddressUrl = `http://localhost:5000/users/${selectedUserId}/addresses`;

  const [addressInfo, setAddressInfo] = useState([]);

  useEffect(() => {
    async function fetchAddress() {
      const result = await fetch(getAllAddressUrl)
        .then((response) => response.json())
        .then((data) => setAddressInfo(data));
      return result;
    }
    fetchAddress();
  }, [addressInfo]);

  function onClick(obj) {
    setUserIdToFetchEvent(obj);
  }

  function showAddressObj(obj) {
    const addressInfoObj = [];
    for (const [key, value] of Object.entries(obj)) {
      addressInfoObj.push(
        <div key={addressInfoObj.length}>
          {key}: <ListItemText primary={value} />
        </div>
      );
    }
    return (
      <ListItem onClick={() => onClick(obj)} style={{ display: "grid" }} button>
        {[...addressInfoObj]}
      </ListItem>
    );
  }

  return (
    <div>
      Address information userId
      <List component="nav" aria-label="mailbox folders">
        {addressInfo.map((address, key) => (
          <div key={key}>{showAddressObj(address)}</div>
        ))}
      </List>
    </div>
  );
}

export default DisplayAddressInformation;
