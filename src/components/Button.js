import { Button as MuiButton } from "@material-ui/core";

const Button = ({ color, text, onClick }) => {
  return (
    <MuiButton
      onClick={onClick}
      style={{ backgroundColor: color }}
      variant="contained"
    >
      {text}
    </MuiButton>
  );
};

export default Button;
