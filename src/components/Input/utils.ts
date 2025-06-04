import type { TextFieldProps } from "@mui/material/TextField";
import type { TypographyProps } from "@mui/material/Typography";

export const getVariantBySize = (
  size: TextFieldProps["size"]
): TypographyProps["variant"] => {
  if (size === "small") return "caption";
  return "body1";
};
