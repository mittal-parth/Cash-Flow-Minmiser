import { Button as MuiButton } from "@material-ui/core";

const Button = ({ color, text, variant, onClick }) => {
  return (
    <MuiButton
      onClick={onClick}
      color = {color}
      variant={variant || "contained"}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
