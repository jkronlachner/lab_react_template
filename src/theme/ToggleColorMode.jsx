import React, {useEffect, useState} from "react";
import {makeStyles, useTheme} from "@mui/styles";


const useStyles = makeStyles((theme)=>({
    root: {},
}));
export const ToggleColorMode = () => {
    const classes = useStyles();
    const theme = useTheme(); 
    
    useEffect(() => {}, [])
    
    return <div className={classes.root}></div>
}
