import React, {useEffect, useState} from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Button, IconButton, Tooltip, Typography} from "@mui/material";
import {ColorModeContext} from "../helpers/CustomContextHelper";
import {connect, useDispatch} from "react-redux";
import {toggleFullscreen} from "../redux/actions/siteSettings_actions";
import {motion} from "framer-motion"

//ICONS
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import FullscreenTwoToneIcon from '@mui/icons-material/FullscreenTwoTone';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

//This page contains samples for react Context, Redux store, styling with tailwind and some animations with framer motion
const App = ({fullscreen}) => {
    const colormode = React.useContext(ColorModeContext);
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])


    const mainTextContainerAnim = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.5,
            }
        }
    }
    const mainTextChildAnim = {
        hidden: {opacity: 0, y: -100},
        show: {opacity: 1, y: 0}
    }
    const buttonsAnim = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1,
                duration: 1
            }
        }
    }

    return <div class={"flex flex-col mt-2 h-full w-full"}>
        <motion.div variants={buttonsAnim} initial={"hidden"} animate={"show"} class={"flex flex-row flex-grow-0 justify-between mx-2"}>
            <Tooltip
                title={theme.palette.mode === 'dark' ? "Let there be light!" : "Get the shades down!"}>
                <IconButton
                    color={"primary"}
                    size={"large"}
                    sx={{mt: 1}}
                    onClick={() => colormode.toggleColorMode()}>
                    {theme.palette.mode === 'dark' ? <LightModeTwoToneIcon/> : <DarkModeTwoToneIcon/>}
                </IconButton>
            </Tooltip>
            <IconButton color={"primary"}
                        size={"large"}
                        sx={{mt: 1}}
                        onClick={() => dispatch(toggleFullscreen())}>
                {!fullscreen ? <FullscreenTwoToneIcon/> : <FullscreenExitTwoToneIcon/>}
            </IconButton>
        </motion.div>
        <motion.ul
            variants={mainTextContainerAnim}
            initial={"hidden"}
            animate={"show"}
            class={"flex flex-col justify-center items-center flex-grow flex-1"}>
            <motion.li variants={mainTextChildAnim}>
                <Typography
                    mb={4}
                    variant={"h1"}
                    fontWeight={"bold"}>
                    Let's get hackin'
                </Typography>
            </motion.li>
            <motion.li variants={mainTextChildAnim}>
                <p>
                    Starter template made by <a href={"https://lab73.at"} class={"underline"}>lab73</a>
                </p>
            </motion.li>


        </motion.ul>
    </div>
}
const mapStateToProps = (state) => {
    return {fullscreen: state.siteSettings.fullscreen}
}
export default connect(mapStateToProps)(App)
