import { AppContext } from "../context";
import { useState } from "react";
import "../styles/globals.css";

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

  const handlePreset = (preset) => {
    switch (preset) {
      case "default":
        setHorizontalOffset(0);
        setVerticalOffset(10);
        setBlur(40);
        setRange(10);
        setOpacity(22);
        break;
      case "small":
        setHorizontalOffset(0);
        setVerticalOffset(4);
        setBlur(6);
        setRange(-1);
        setOpacity(10);
        break;
      case "medium":
        setHorizontalOffset(0);
        setVerticalOffset(10);
        setBlur(15);
        setRange(-3);
        setOpacity(15);
        break;
      case "large":
        setHorizontalOffset(0);
        setVerticalOffset(25);
        setBlur(50);
        setRange(-12);
        setOpacity(25);
        break;
    }
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
        handlePreset,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
