import axios from "axios";

export const SET_DATA = "SET_DATA";
export const NEWS_DATA = "NEWS_DATA";

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setNewsData = (data) => ({
  type: NEWS_DATA,
  payload: data,
});

export const fetchCricketData = () => async (dispatch) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/live-cricket-score");
    // console.log(response.data);
    dispatch(setData(response.data));
    // console.log(response.data);
  } catch (error) {
    console.error("Error fetching cricket data:", error);
  }
};

export const fetchNewsData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76844f4fcbf945049d88364c309ee7fc");
    dispatch(setNewsData(response.data.articles));
    // console.log(response.data.articles);
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
};

// export const startFetchingData = () => (dispatch) => {
//   const fetchDataWithInterval = async () => {
//     await dispatch(fetchCricketData());
//     setTimeout(fetchDataWithInterval, 9000);
//   };

//   fetchDataWithInterval();
// };

// import axios from "axios";

// // Define your action type as a constant
// export const SET_DATA = "SET_DATA";

// export const fetchScheduleData = () => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/live-cricket-score");

//       // Dispatch an action with the fetched data
//       dispatch({
//         type: SET_DATA,
//         payload: response.data,
//       });
//     } catch (error) {
//       // Handle errors here, e.g., dispatch an error action
//       console.error("Error fetching data:", error);
//     }
//   };
// };

// // Function to start the interval with a more consistent timing
// export const startFetchingData = () => {
//   return (dispatch) => {
//     const fetchDataWithInterval = async () => {
//       await dispatch(fetchScheduleData());
//       // Adjust the interval to ensure that it starts after 9 seconds from the completion of the previous call
//       setTimeout(fetchDataWithInterval, 9000);
//     };

//     // Initially fetch data
//     fetchDataWithInterval();
//   };
// };


// // export const setData = (data) => ({
// //   type: "SET_DATA",
// //   payload: data,
// // });
