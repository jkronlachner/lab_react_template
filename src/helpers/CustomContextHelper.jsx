import {createContext, useEffect, useMemo, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {getDesignTokens} from "../theme/theme";
import {connect} from "react-redux";


///Usage to toggle darkmode
///const colormode = React.useContext(ColorModeContext);
///colormode.toggleColorMode();
export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

function CustomContextHelper({children, fullscreen}) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');


    //region MEMOS
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                ...getDesignTokens(mode)
            }),
        [mode],
    );
    //endregion

    useEffect(() => {
        toggleFullscreenHelper(fullscreen);
    }, [fullscreen])

    //region HELPERS
    const toggleFullscreenHelper = (fullscreen) => {
        const elem = window.document.documentElement;
        console.log("Toggeling fullscreen", fullscreen)
        if (fullscreen === true) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen({navigationUI: "hide"});
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        } else {
            if (window.document.fullscreenElement) {
                if (window.document.exitFullscreen) {
                    window.document.exitFullscreen();
                } else if (window.document.webkitExitFullscreen) { /* Safari */
                    window.document.webkitExitFullscreen();
                } else if (window.document.msExitFullscreen) { /* IE11 */
                    window.document.msExitFullscreen();
                }
            }
        }
    }
    //endregion

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

const mapStateToProps = (state) => {
    return {
        fullscreen: state.siteSettings.fullscreen,
    }
}
export default connect(mapStateToProps)(CustomContextHelper)
