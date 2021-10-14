import React, {useEffect, useState} from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Button, Typography} from "@mui/material";
import {ColorModeContext} from "../theme/ToggleColorMode";


const useStyles = makeStyles((theme) => ({
    root: {},
}));
export const App = () => {
    const colormode = React.useContext(ColorModeContext);
    const classes = useStyles();

    useEffect(() => {
    }, [])

    return <div class={"flex flex-col justify-center items-center w-full h-full"}>
        <Typography mb={4} variant={"h1"}
                    fontWeight={"bold"}>Let's
            get hackin'</Typography>
        <p>Starter template made by <a
            href={"https://lab73.at"} class={"underline"}>lab73</a></p>

        <Button sx={{mt: 1}} onClick={() => colormode.toggleColorMode()}>Toggle Colormode</Button>
    </div>
}
