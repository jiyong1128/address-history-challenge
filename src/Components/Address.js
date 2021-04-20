import React, { useState, useEffect } from "react";
import DisplayUserId from "./DisplayUserId";
import DisplayEventsOnClick from "./DisplayEventsOnClick";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Address() {
  const [userIdToFetchEvent, setUserIdToFetchEvent] = useState({});

  function displayEventComponent() {
    return userIdToFetchEvent && Object.keys(userIdToFetchEvent).length ? (
      <DisplayEventsOnClick userIdToFetchEvent={userIdToFetchEvent} />
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
