import React, { useState, useEffect, useContext } from 'react';
import DisplayAddressInformation from "./DisplayAddressInformation";
import { GlobalContext } from "../context/GlobalState";

function DisplayUserId() {
  // to display to value of the address upon the allUserIds
  const getAllUserIdUrl = "http://localhost:5000/user_ids"; // getting all the user Id's
  const [allUserIds, setAllUserIds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const { editAddress, addresses } = useContext(GlobalContext);

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
    editAddress({});
  }

  return (
    <div>
      <form>
        <label>
          <select value={selectedUserId} onChange={onChange}>
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
          selectedUserId={selectedUserId}
        />
      ) : (
        "None Selected"
      )}
    </div>
  );
}

export default DisplayUserId;
