import { combineReducers } from "redux";
import getApidata from "./ApiData";
import NewsApiData from "./NewsApiData";

const rootReducer = combineReducers({
    NewsApiData,getApidata
})

export default rootReducer;