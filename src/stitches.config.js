import { createCss } from "@stitches/react";

export const { styled, css } = createCss({
  theme: {
    space: {
      1: "10px",
      2: "20px",
      3: "40px",
    },
  },
  conditions: {
    sm: "@media (max-width: 480px)",
  },
  utils: {
    px: (config) => (value) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
  },
});
