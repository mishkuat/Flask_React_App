import axios from "axios";

const FetchLastEntry = async (setLastEntry) => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/fetch_entry");

    // Checking if response exist
    if (response && response.data) {
      setLastEntry(response.data);
    } else {
      console.error("Unexpected response structure", response);
      alert("Unexpected response structure");
    }
  } catch (error) {
    console.error("Error fetching the last entry", error);
    if (error.response && error.response.data) {
      alert(
        error.response.data.message ||
          "An error occurred while fetching the entry."
      );
    } else {
      alert("An unexpected error occurred.");
    }
  }
};

export default FetchLastEntry;
