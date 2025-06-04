const stylesToColorSvg = (color: string) => {
  return {
    "&[fill]": {
      fill: color,
    },
    "& svg[fill]": {
      fill: color,
    },
    '& path[stroke]:not([stroke="none"])': {
      stroke: color,
    },
    '& path[fill]:not([fill="none"])': {
      fill: color,
    },
    "& path:not([fill]):not([stroke])": {
      fill: color,
    },
  };
};

export default stylesToColorSvg;
