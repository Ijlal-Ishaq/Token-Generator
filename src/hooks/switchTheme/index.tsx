import { PaletteMode } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/actions/themeActions";

export const useThemeSwitch = (): [PaletteMode, () => void] => {
  const mode: PaletteMode = useSelector((state: any) => {
    return state.themeReducer.theme;
  });

  const dispatch = useDispatch();

  const switchTheme = () => {
    dispatch(changeTheme(mode === "light" ? "dark" : "light"));
  };

  return [mode, switchTheme];
};
