import { AppContext } from "../context";
import { useState } from "react";
import "../styles/globals.css";
import {
  handleHorizontalOffset,
  handleVerticalOffset,
  handleBlur,
  handleRange,
  handleOpacity,
  handleColor,
  handlePreset,
} from "../utils/utils";

function MyApp({ Component, pageProps }) {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(10);
  const [blur, setBlur] = useState(40);
  const [range, setRange] = useState(10);
  const [opacity, setOpacity] = useState(22);
  const [color, setColor] = useState("#2564eb");
  const [colorRGB, setColorRGB] = useState("37,100,235");

  return (
    <AppContext.Provider
      value={{
        horizontalOffset,
        verticalOffset,
        blur,
        range,
        opacity,
        color,
        handleHorizontalOffset,
        handleVerticalOffset,
        handleBlur,
        handleRange,
        handleOpacity,
        handleColor,
        colorRGB,
        handlePreset,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
