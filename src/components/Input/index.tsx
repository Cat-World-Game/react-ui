import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { getVariantBySize } from "./utils";

type InputProps = TextFieldProps & {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const Input = ({
  label,
  startAdornment,
  endAdornment,
  ...restProps
}: InputProps) => {
  return (
    <Box>
      <FormLabel disabled={restProps.disabled}>
        <Typography component="div" variant={getVariantBySize(restProps.size)}>
          {label}
        </Typography>
      </FormLabel>
      <TextField
        {...restProps}
        slotProps={{
          input: {
            ...restProps.slotProps,
            startAdornment,
            endAdornment,
          },
        }}
      />
    </Box>
  );
};

export default Input;
