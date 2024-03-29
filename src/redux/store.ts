// import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// export default configureStore({
//   reducer:{
//     user: userReducer,
//   }
// })

const persistConfig = {
  key: "root",
  storage
}

const rootReducer = combineReducers({ 
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: []
});

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

const persistor = persistStore(store);

export {store, persistor};