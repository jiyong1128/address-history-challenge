import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import {DisplayAddressInformation} from './'
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import List from "@material-ui/core/List";

function DisplayEventsOnClick({ userIdToFetchEvent }) {
  // onclick of the single event, show this
  console.log(userIdToFetchEvent, "called");
  const getEventsUrl = `http://localhost:5000/addresses/${userIdToFetchEvent.id}/events`;

  const [eventArr, setEventArr] = useState([]);

  useEffect(() => {
    async function answer() {
      const result = await fetch(getEventsUrl)
        .then((response) => response.json())
        .then((data) => setEventArr(addKey(data)));
      return result;
    }
    answer();
  }, [getEventsUrl]);

  function addKey(data) {
    console.log(data);
    const newData = data.map((each) => {
      console.log(each);
      return { ...each, ...each.payload, id: each.id, isSelected: false };
    });
    return newData;
  }

  function handleChange({id}) {

    var valueArr = eventArr.map(function(item){ return item.isSelected });

    var countTwoOrMoreSelected = 0;

    for (let i = 0; i < valueArr.length; i++) {
        if (valueArr[i]) {
            countTwoOrMoreSelected += 1;
        } 
    }
        const newArr = eventArr.map((each) => {
            if (each.id === id && each.isSelected) {
                each.isSelected = false;
            } else if (each.id === id && !each.isSelected && countTwoOrMoreSelected < 2) {
            each.isSelected = true;
            }
            return each;
        });
        setEventArr(newArr);
    }

  console.dir(eventArr);

  return (
    <div>
      Events
      <List component="nav" aria-label="mailbox folders">
        {eventArr && eventArr.length
          ? eventArr.map((evt, key) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">Label Placement</FormLabel>
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
    </div>
  );
}

export default DisplayEventsOnClick;
