import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import CartSlice from "../features/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root", // Change this key to a unique string
  storage,
};

const persistedReducer = persistReducer(persistConfig, CartSlice);

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: persistedReducer,
    // Add other reducers if you have them
  },
  middleware: [...getDefaultMiddleware(), thunk], // Add thunk middleware
});

// Create the persistor object
const persistor = persistStore(store);

export { store, persistor };
