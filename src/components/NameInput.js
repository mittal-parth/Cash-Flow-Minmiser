import { TextField } from "@material-ui/core";
import Button from "./Button";

const NameInput = ({ flag, addParticipant, name, handleChange }) => {
  return (
    <div className="name-component">
      <div className="p-name">
        <h2>Enter names of People in the group</h2>
        <div className="p-name-field">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            disabled={flag}
            onChange={handleChange}
          />
        </div>
        <Button color="primary" onClick={addParticipant} text="Add" />
      </div>
    </div>
  );
};

export default NameInput;
