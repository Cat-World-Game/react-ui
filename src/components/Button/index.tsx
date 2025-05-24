import MaterialButton, {
  type ButtonProps as MaterialButtonProps,
} from "@mui/material/Button";

const Button = (props: MaterialButtonProps) => {
  return <MaterialButton {...props} />;
};

export default Button;
