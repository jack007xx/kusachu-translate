import React from "react";
import { useState } from "react";
import {
  TextField,
  Box,
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import kusachuEngine from "./kusachuEngine";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import cyan from "@material-ui/core/colors/cyan";

const theme = createMuiTheme({
  palette: {
    primary: cyan,
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      width: "960px",
      margin: "20px",
    },
  })
);

const App: React.FC = () => {
  const [inText, setInText] = useState("");
  const [kusachuText, setKusachuText] = useState("");
  const classes = useStyles();
  const handleOnChangeOriginal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInText(e.target.value);
    setKusachuText(kusachuEngine(e.target.value));
  };
  return (
    <>
      <MuiThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Box>
          <TextField
            label="原文"
            multiline
            rows={5}
            variant="outlined"
            onChange={handleOnChangeOriginal}
            className={classes.field}
          />
          {/* <div>
            <ArrowDownwardIcon />
          </div> */}
          <TextField
            label="クサチュー語"
            multiline
            rows={5}
            variant="outlined"
            className={classes.field}
            value={kusachuText}
          />
        </Box>
      </MuiThemeProvider>
    </>
  );
};
export default App;
