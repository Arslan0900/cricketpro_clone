import rootReducer from "./Reducers/CombineAllReducers";
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const Store = createStore(rootReducer,applyMiddleware(thunk));
export default Store;
// import { legacy_createStore as createStore,applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
// import rootReducer from './Reducers/CombineAllReducers';

// // Redux Persist configuration
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the store with middleware
// const store = createStore(persistedReducer, applyMiddleware(thunk));

// // Create a persisted version of the store
// const persistor = persistStore(store);

// export { store, persistor };
