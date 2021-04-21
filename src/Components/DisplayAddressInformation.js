import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItem } from "@material-ui/core";

function DisplayAddressInformation({ selectedUserId }) {
  const getAllAddressUrl = `http://localhost:5000/users/${selectedUserId}/addresses`;
  const { editAddress } = useContext(GlobalContext);
  const [addressInfo, setAddressInfo] = useState([]);

  useEffect(() => {
    async function fetchAddress() {
      const address = await fetch(getAllAddressUrl)
        .then((response) => response.json())
        .then((data) => setAddressInfo(data));
      return address;
    }
    fetchAddress();
  }, [selectedUserId]);

  function onClick(obj) {
    // onclick of the address, the event should be updated
    console.log(obj, "obj");
    editAddress(obj);
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
    console.log(addressInfoObj, "what abt")
    return (
      <ListItem onClick={() => onClick(obj)} style={{ display: "grid" }} button>
        {[...addressInfoObj]}
      </ListItem>
    );
  }

  return (
    <div>
      Address information
      <List component="nav" aria-label="mailbox folders">
        {addressInfo.map((address, key) => (
          <div key={key}>{showAddressObj(address)}</div>
        ))}
      </List>
    </div>
  );
}

export default DisplayAddressInformation;
