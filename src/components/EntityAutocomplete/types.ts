import type { TextFieldProps } from "@mui/material/TextField";

export interface EntityOption {
  id: string;
  name: string;
}

export interface EntityAutocompleteProps {
  options: EntityOption[];
  value: EntityOption | null;
  size?: TextFieldProps["size"];
  placeholder?: string;
  label?: string;
  env?: TextFieldProps["env"];
  onChange: (newValue: EntityOption | null) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
