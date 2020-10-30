//Define your standard font sizes here
const font_sizes = {
  h1: "3.75rem",
  h2: "2.5rem",
  h3: "2.0rem",
  h4: "1.5rem",
  h5: "1.25rem",
  h6: "1rem",
  h7: "0.75rem",
};
//Define your standard line height here
const line_heights = {};
//Define your standard base colours here
const base_colours = {
  primary: "#DDD",
  secondary: "black"
};

export const theme = {
  breakpoints: [640, 960],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  maxWidths: [480, 960, 1440],
  fontWeights: {
    normal: "400",
    bold: "500"
  },
  fontSizes: {
    ...font_sizes
  },
  lineHeights: { ...line_heights },
  colors: {
    ...base_colours
  },
}