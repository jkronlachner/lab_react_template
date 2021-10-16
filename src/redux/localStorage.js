const _ = require("lodash")
//Load state from local storage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
//Save state to local storage
export const saveState = (state) => {
    try {
        //FILTER STATE THAT SHOULD NOT BE SAVED
        const s = _.omit(state, [["siteSettings", "fullscreen"]])

        localStorage.setItem('state', JSON.stringify(s));
    } catch (e) {
        // ignore write errors
        console.log("Error while saving state: ", e);
    }
};
