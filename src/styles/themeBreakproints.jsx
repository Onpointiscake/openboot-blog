import { createBreakpoints } from "@chakra-ui/theme-tools"

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

// Internally, we transform to this
const breakpoints = ["0em", "30em", "48em", "62em", "80em", "96em"]