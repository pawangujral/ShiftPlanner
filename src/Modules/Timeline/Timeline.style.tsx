import { styled } from "@mui/system";

export const SchedulerSection = styled("div")<{ toggle: string }>(
  ({ toggle }) => ({
    display: "grid",
    gridTemplateColumns: `${toggle === "true" ? "250px 1fr" : "1fr"}`,
    backgroundColor: "#ffffff",
    marginBottom: "4em",
    transition: " all .2s ease",
  })
);

export const MainContainer = styled("div")({
  overflow: "hidden",
  overflowX: "scroll",
  padding: "15px 0 0 0",
  transition: "all .2s linear",
  position: "relative",
});
