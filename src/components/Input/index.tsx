import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { getVariantBySize } from "./utils";
import React from "react";

type InputProps = TextFieldProps & {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, startAdornment, endAdornment, ...restProps }, ref) => {
    return (
      <Box>
        <FormLabel disabled={restProps.disabled}>
          <Typography
            component="div"
            variant={getVariantBySize(restProps.size)}
          >
            {label}
          </Typography>
        </FormLabel>
        <TextField
          {...restProps}
          inputRef={ref}
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
  }
);

export default Input;
