import axios from "axios";

const HandleSubmit = async (entry, setEntry, setLastEntry) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/submit_entry", {
      entry,
    });
    if (response && response.data) {
      alert(response.data.message); // Alert for succefull entry
      setLastEntry(response.data);
    } else {
      console.error("Unexpected response structure", response);
    }
    setEntry(""); // input field set to empty after submission
  } catch (error) {
    console.error("Error submitting the entry", error);
    if (error.response && error.response.data) {
      alert(error.response.data.error); // Showing error message from api response
    } else {
      alert("An unexpected error occurred");
    }
  }
};

export default HandleSubmit;
