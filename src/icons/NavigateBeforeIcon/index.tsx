import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const NavigateBefore = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
      </svg>
    </SvgIcon>
  );
};

export default NavigateBefore;
