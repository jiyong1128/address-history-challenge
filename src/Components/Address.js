import React, { useState, useContext } from 'react';
import DisplayUserId from "./DisplayUserId";
import DisplayEventsOnClick from "./DisplayEventsOnClick";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { GlobalContext } from "../context/GlobalState";

function Address() { //access here 
  const [userIdToFetchEvent, setUserIdToFetchEvent] = useState({});
  const { addresses } = useContext(GlobalContext);

  function displayEventComponent() {
    return addresses.address && Object.keys(addresses.address).length ? ( // passing down setUserIdToFetchEvent state as a prop, so when we actually have data, call the event component
      <DisplayEventsOnClick />
    ) : (
      "No Events to show"
    );
  }

  return (
    <div>
      <h1>Noyo Front End Coding Challenge</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            {" "}
            <DisplayUserId setUserIdToFetchEvent={setUserIdToFetchEvent} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper> {displayEventComponent()}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Address;
