import React, {useEffect, useState} from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {routes} from "./routes";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
    },
}));
export const RoutingIndex = () => {
    const classes = useStyles();
    const cRoutes = routes;

    return <div class={"w-full h-full"}>
        <Router>
            <Switch>
                {cRoutes.map((route) => <Route key={route.key} path={route.path}>{route.component}</Route>)}
            </Switch>
        </Router>
    </div>
}
