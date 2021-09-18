import { makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import React from "react";
import Category from "../data/Category";
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
    fontSize: "7vw",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    // columnGap: 35,
  },
  search: {
    width: "43%",
  },
}));

const Header = ({ category, setCategory, word, setWord }) => {
  const classes = useStyles();
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {word ? word : "Word Hunt"}
      </Typography>

      <div className={classes.input}>
        <TextField
          className={classes.search}
          id="standard-basic"
          label="Enter the word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        {console.log(word)}
        <TextField
          className={classes.search}
          size="small"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {Category.map((data) => (
            <MenuItem key={data.label} value={data.label}>
              {data.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
