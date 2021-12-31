import { FC } from "react";
import { useTheme } from "@mui/material";
import { useThemeSwitch } from "../../hooks/switchTheme";

const Index: FC = () => {
  const theme = useTheme();
  const [mode, switchTheme] = useThemeSwitch();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        left: "10px",
        padding: "10px 10px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
      }}
      onClick={() => {
        switchTheme();
      }}
    >
      Switch Theme
    </div>
  );
};

export default Index;
