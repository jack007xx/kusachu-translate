import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import kusachuEngine from "../functions/kusachuEngine";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const App: React.FC = () => {
  const [inText, setInText] = useState("");
  const [kusachuText, setKusachuText] = useState("");
  const handleOnChangeOriginal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInText(e.target.value);
    setKusachuText(kusachuEngine(inText));
  };
  return (
    <>
      <TextField
        label="原文"
        multiline
        rows={5}
        variant="outlined"
        onChange={handleOnChangeOriginal}
      />
      <ArrowDownwardIcon />
      <TextField label="クサチュー語"
        multiline
        rows={5}
        variant="outlined"
        value={kusachuText} />
    </>
  );
};
export default App;
