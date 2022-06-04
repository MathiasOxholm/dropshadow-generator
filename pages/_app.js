import { AppContext } from "../context";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(10);
  const [blur, setBlur] = useState(40);
  const [range, setRange] = useState(10);
  const [opacity, setOpacity] = useState(22);
  const [color, setColor] = useState("#2564eb");
  const [colorRGB, setColorRGB] = useState("37,100,235");

  const handleHorizontalOffset = (e) => {
    setHorizontalOffset(e.target.value);
  };

  const handleVerticalOffset = (e) => {
    setVerticalOffset(e.target.value);
  };

  const handleBlur = (e) => {
    setBlur(e.target.value);
  };

  const handleRange = (e) => {
    setRange(e.target.value);
  };

  const handleOpacity = (e) => {
    setOpacity(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
    const color = e.target.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    setColorRGB(`${r}, ${g}, ${b}`);
  };

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
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
