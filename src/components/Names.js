import React, { useState } from "react";
import NameList from "./NameList";
import NameInput from "./NameInput";
import Button from "./Button";

const Names = ({ flag }) => {
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);

  const addParticipant = (event) => {
    event.preventDefault();
    console.log("Button clicked!");
    setAllNames((previous) => [{ name }, ...previous]);
    setName("");

    console.log("Log");
  };

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <NameInput
        flag={flag}
        addParticipant={addParticipant}
        name={name}
        handleChange={handleChange}
      />

      {allNames && allNames.length ? (
        <>
          <NameList allNames={allNames} />

          <Button
            variant="contained"
            color="secondary"
            text="Submit"
            // onClick={handleOpenForm}
          />
        </>
      ) : null}
    </>
  );
};

export default Names;
