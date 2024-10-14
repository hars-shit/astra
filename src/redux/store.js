import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toggleSlice from "./toggleSlice";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig={
    key:'root',
    version:1,
    storage
}


const persistedTheme=persistReducer(persistConfig,toggleSlice);

export const store=configureStore({
    reducer:{
        theme:persistedTheme
    }
})

export const persistor=persistStore(store)

export default store ;