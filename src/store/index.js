import { configureStore} from "@reduxjs/toolkit";
import tabsSlice from "./Slice";

export const store = configureStore({
    reducer:{
        tabsSlice
    },
})