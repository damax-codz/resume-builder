import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, resumeReducer);
export const store = configureStore({
  reducer: {
    resume: persistedReducer,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
