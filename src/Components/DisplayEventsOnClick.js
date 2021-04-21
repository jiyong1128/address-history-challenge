import React, { useState, useEffect, useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { Link, useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/GlobalState";

import List from "@material-ui/core/List";

function DisplayEventsOnClick() {
  // onclick of the single event, show this
  const { addresses } = useContext(GlobalContext);
  const getEventsUrl = `http://localhost:5000/addresses/${addresses.address.id}/events`;

  const history = useHistory();
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    async function fetchAllEvents() {
      const events = await fetch(getEventsUrl) // fetch the events based on the userID that I get by clicking on the addressDescription from DisplayAddInfo
        .then((response) => response.json())
        .then((data) => setUserEvents(addKey(data))); //save it up in userEvents
      return events;
    }
    fetchAllEvents();
  }, [addresses.address]); // whenever userIdFetch is updated, re-render

  function addKey(data) {
    // copying the array value using the map to add isSelected into the json object.
    const newData = data.map((event) => {
      return { ...event, ...event.payload, id: event.id, isSelected: false }; // getting all the array's payload into the newData
    });
    return newData;
  }

  function handleChange({ id }) {
    let isSelectedItemArr = userEvents.map(function (item) {
      return item.isSelected;
    }); // get the selected value in an array object.

    let countTwoOrMoreSelected = 0;

    for (let i = 0; i < isSelectedItemArr.length; i++) {
      // iterate through the array value to check how many items are checked
      if (isSelectedItemArr[i]) {
        countTwoOrMoreSelected += 1;
      }
    }
    const newUserEventArr = userEvents.map((event) => {
      // writing logic where if the item is already selected then deselct, other way around.
      if (event.id === id && event.isSelected) {
        event.isSelected = false;
      } else if (
        event.id === id &&
        !event.isSelected &&
        countTwoOrMoreSelected < 2
      ) {
        // if countIs more then two, dont do anything.
        event.isSelected = true;
      }
      return event;
    });
    setUserEvents(newUserEventArr);
  }

  const onSubmit = (e) => {
    console.log(userEvents, "userevents");
    e.preventDefault();

    history.push({pathname: "/compare", state: userEvents})
  }

  return (
    <div>
      Events
      <List component="nav" aria-label="mailbox folders">
        {userEvents && userEvents.length
          ? userEvents.map((evt, key) => (
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={evt.isSelected}
                        onClick={() => handleChange(evt)}
                        name="gilad"
                      />
                    }
                    value={evt}
                    label={evt.type}
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            ))
          : null}
      </List>
      <form onSubmit={onSubmit}>
        <button variant="outlined">Compare</button>
      </form>
    </div>
  );
}

export default DisplayEventsOnClick;
