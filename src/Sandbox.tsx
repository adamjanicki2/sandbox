import { Box, ui } from "@adamjanicki/ui";

export default function Sandbox() {
  return (
    <Box vfx={{ width: "full", axis: "y", align: "center" }}>
      <ui.h1 vfx={{ fontSize: "xxl" }}>Sandbox 🏖️</ui.h1>
    </Box>
  );
}
