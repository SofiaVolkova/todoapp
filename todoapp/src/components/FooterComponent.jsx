import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";


const useStyles = makeStyles(theme => ({
    appBar: {
        bottom: 0,
        top: "auto",
        height: 80,
    },
    toolBar:{
        height: 80
    }

}));

function FooterComponent() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                Todo App by Sofia © 2020 {/* content */}
            </Toolbar>
        </AppBar>
    )
};

export default FooterComponent;