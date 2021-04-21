import React, { useState, useEffect } from "react";
import DisplayAddressInformation from "./DisplayAddressInformation";

function DisplayUserId({ setUserIdToFetchEvent }) {
  // to display to value of the address upon the allUserIds
  const getAllUserIdUrl = "http://localhost:5000/user_ids"; // getting all the user Id's
  const [allUserIds, setAllUserIds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    async function fetchAllUserId() {
      const userId = await fetch(getAllUserIdUrl)
        .then((response) => response.json())
        .then((data) => {
          setAllUserIds(data);
        });
      return userId;
    }
    fetchAllUserId();
  }, []);

  function onChange(e) {
    // whenever we select and change the value in userId dropdown, change selectedUserId also reset the userIdToFetch to empty to make the event empty.
    setSelectedUserId(e.target.value);
    setUserIdToFetchEvent({});
  }

  return (
    <div>
      <form>
        <label>
          <select value={selectedUserId} onChange={(e) => onChange(e)}>
            <option>Select User ID</option>
            {allUserIds.map((userId, key) => (
              <option key={key} value={userId}>
                {userId}
              </option>
            ))}
          </select>
        </label>
      </form>
      {selectedUserId && selectedUserId.length ? (
        <DisplayAddressInformation
          setUserIdToFetchEvent={setUserIdToFetchEvent}
          selectedUserId={selectedUserId}
        />
      ) : (
        "None Selected"
      )}
    </div>
  );
}

export default DisplayUserId;
