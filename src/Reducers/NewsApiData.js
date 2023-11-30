// Define the initial state of the reducer
const initialState = {
    newApiData: [], // Initialize an empty array for news data
  };
  
  // Reducer function to manage the news data state
  const NewsApiData = (state = initialState, action) => {
    switch (action.type) {
      case 'NEWS_DATA':
        // When the action type is 'NEWS_DATA', update the state with new news data
        return {
          ...state, // Use the spread operator to create a new state object
          newApiData: action.payload, // Update the 'newApiData' property with the new data
        };
      default:
        // For any other action types, return the current state without changes
        return state;
    }
  };
  
  // Export the reducer function for use in your Redux store
  export default NewsApiData;
  