import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "./localStorage";
import {siteSettingsReducer} from "./reducers/siteSettings_reducer";

const persistedStore = loadState();
export const store = configureStore({
    devTools: true,
    preloadedState: persistedStore,
    reducer: combineReducers({
        "siteSettings": siteSettingsReducer,
    }),
})
store.subscribe(() => {
    saveState(store.getState())
})
