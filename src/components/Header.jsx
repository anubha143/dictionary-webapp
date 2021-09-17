import { makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "35vh",
    width: "100%",
  },
  title: {
    fontSize: "7vh",
    textTransform: "uppercase",
  },
  input: {},
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Word Hunt</Typography>

      <div className={classes.input}>
        <TextField id="standard-basic" label="Enter the word" />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          helperText="Please select your language"
        >
          <MenuItem>English</MenuItem>
        </TextField>
      </div>
    </div>
  );
};

export default Header;
