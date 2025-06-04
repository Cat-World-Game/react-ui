import Box from "@mui/material/Box";
import { StyledLoader } from "./styles";

const FullscreenLoader = () => {
  return (
    <Box
      position="fixed"
      top="0px"
      left="0px"
      width="100dvw"
      height="100dvh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgba(0, 0, 0, 0.6)"
      zIndex={(theme) => theme.zIndex.modal + 1}
    >
      <StyledLoader />
    </Box>
  );
};

export default FullscreenLoader;
