import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    border: "5px solid #27104e",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 200,
  },
}));
const Definition = ({ word, category, meaning }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {meaning[0] && word && category === "en" && (
        <audio
          style={{ width: "100%" }}
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          Your browser doesnot support
        </audio>
      )}
      {word === "" ? (
        <span className={classes.subTitle}>
          Start your Search by entering a word...
        </span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div style={{ marginBottom: 20, marginTop: 20 }}>
                <b>&#8226; {def.definition}</b>
                <br />
                {def.example && (
                  <div style={{ marginBottom: 0 }}>
                    <b>
                      <i>Example :</i>
                    </b>
                    {def.example}
                  </div>
                )}
                <br />
                {def.synonyms.length > 0 && (
                  <div>
                    <b>
                      <i>Synonyms :</i>
                    </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </div>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
