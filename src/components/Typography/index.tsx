import { styled } from "@mui/material/styles";
import MaterialTypography, {
  type TypographyProps as MaterialTypographyProps,
} from "@mui/material/Typography";

interface TypographyProps extends MaterialTypographyProps {
  outline?: string;
}

const StyledTypography = styled(MaterialTypography)<TypographyProps>(
  ({ outline }) => ({
    ...(outline && {
      textShadow: `1px 0 0px ${outline}, 
              0 1px 0px ${outline}, 
              -1px 0 0px${outline}, 
              0 -1px 0px ${outline}`,
    }),
  })
);

const Typography = (props: TypographyProps) => {
  return <StyledTypography {...props} />;
};

export default Typography;
