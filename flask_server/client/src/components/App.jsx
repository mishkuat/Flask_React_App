import React, { useState } from "react";
import FetchLastEntry from "./FetchEntry";
import HandleSubmit from "./HandleSubmit";
import "../App.css";
import { TaskContext } from "../Helpers/Context";

const App = () => {
  const [lastEntry, setLastEntry] = useState(null);
  const [entry, setEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleSubmit(entry, setEntry, setLastEntry); // Call the submit handler with current values
  };

  const handleFetch = () => {
    FetchLastEntry(setLastEntry); // Fetch last entry
  };

  return (
    <TaskContext.Provider value={{ lastEntry, setLastEntry, entry, setEntry }}>
      <div className="App">
        <h1>Flask React Task</h1>

        {/* Form to submit an entry */}
        <form onSubmit={handleSubmit}>
          <h2 className="message">Insert a Record: </h2>
          <input
            className="input"
            type="text"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Type your entry here"
            required
          />
          <button className="button" type="submit">
            Submit Entry
          </button>
        </form>

        <br />
        <button className="button" onClick={handleFetch}>
          Fetch Last Entry
        </button>

        {/* Display the last entry */}
        {lastEntry && (
          <div>
            <h3>Last Entry:</h3>
            <p>{lastEntry.last_entry}</p>
            <p>
              <b>Timestamp:</b> {lastEntry.entry_time}
            </p>
          </div>
        )}
      </div>
    </TaskContext.Provider>
  );
};

export default App;
