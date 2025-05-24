import darkMain from "../assets/dark-main.json";

const getTheme = () => {
  try {
    const localTheme = localStorage.getItem("cwg:theme");
    return localTheme ? JSON.parse(localTheme) : darkMain;
  } catch {
    return darkMain;
  }
};

export default getTheme;
