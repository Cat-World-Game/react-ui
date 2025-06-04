import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { EntityAutocompleteProps, EntityOption } from "./types";

const EntityAutocomplete = ({
  options,
  value,
  placeholder,
  label,
  size,
  env,
  onChange,
  onFocus,
  onBlur,
}: EntityAutocompleteProps) => {
  const handleChange = (_: unknown, newValue: EntityOption | null) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      value={value}
      options={options}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      size={size}
      renderInput={(params) => (
        <>
          <Typography variant="body1" color="text.primary">
            {label}
          </Typography>
          <TextField
            {...params}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            size={size}
            env={env}
          />
        </>
      )}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            <Box>
              <Typography component="div" variant="body1" color="text.primary">
                {option.name}
              </Typography>
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
              >
                {option.id}
              </Typography>
            </Box>
          </li>
        );
      }}
    />
  );
};

export default EntityAutocomplete;
