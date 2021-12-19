import React, { useState } from "react";
import NameList from "./NameList";
import NameInput from "./NameInput";
import Button from "./Button";

const Names = (props) => {
  const [name, setName] = useState("");

  const addParticipant = (event) => {
    event.preventDefault();
    if (name !== "") {
      props.setAllNames((previous) => [{ name }, ...previous]);
      setName("");
    } else {
      alert("Name cant be empty");
    }
    // setAllNames((previous) => [{ name }, ...previous]);
    // setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <NameInput
        flag={props.flag}
        addParticipant={addParticipant}
        name={name}
        handleChange={handleChange}
      />

      {props.allNames && props.allNames.length ? (
        <>
          <NameList allNames={props.allNames} />

          <Button
            variant="contained"
            color="secondary"
            text="Submit"
            onClick={props.handleOpenForm}
            isDisabled={props.flag ? true:false}
          />
        </>
      ) : null}
    </>
  );
};

export default Names;
