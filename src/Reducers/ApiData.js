// // redux/reducers.js
// const initialState = {
//   data:[]
// };

// const getApidata = (state = initialState, action) => {
//     console.log(action.payload)
//   switch (action.type) {
//     case 'SET_DATA':
//       // Return a new array with the action payload
//       return action.payload;
//     default:
//       // If the action type doesn't match, return the current state
//       return state;
//   }
// };

// export default getApidata;

// reducers.js
const initialState = {
  apiData: [],
};

const getApidata = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        apiData: action.payload,
      };
    // Handle other actions as needed
    default:
      return state;
  }
};

export default getApidata;
