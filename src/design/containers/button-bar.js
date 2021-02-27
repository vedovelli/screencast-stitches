import { styled } from "../../stitches.config";

export const ButtonBar = styled("div", {
  display: "flex",
  gap: "$2",
  margin: "$2",
  when: {
    sm: {
      flexDirection: "column",
      gap: 0,
      margin: 0,
    },
  },
});
