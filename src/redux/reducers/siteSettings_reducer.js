import {createReducer} from '@reduxjs/toolkit'
import {DefaultSiteSettings} from "../objects/SiteSettings";
import {toggleFullscreen} from "../actions/siteSettings_actions";

export const siteSettingsReducer = createReducer(DefaultSiteSettings, (builder) => {
    builder
        .addCase(toggleFullscreen, (state, action) => {
            return {fullscreen: !state.fullscreen};
        });
})
