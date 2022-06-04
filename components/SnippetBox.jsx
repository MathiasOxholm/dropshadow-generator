import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { AppContext } from "../context";

const SnippetBox = () => {
  const {
    horizontalOffset,
    verticalOffset,
    blur,
    range,
    opacity,
    colorRGB,
    handlePreset,
  } = useContext(AppContext);
  const [realOpacity, setRealOpacity] = useState(0.22);
  const [textCopied, setTextCopied] = useState(false);

  const Dropshadow = {
    boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blur}px ${range}px rgba(${colorRGB},${realOpacity}`,
  };

  const textToCopy = `-webkit-box-shadow: ${horizontalOffset}px ${verticalOffset}px ${blur}px ${range}px rgba(${colorRGB},${realOpacity});
  -moz-box-shadow: ${horizontalOffset}px ${verticalOffset}px ${blur}px ${range}px rgba(${colorRGB},${realOpacity});
  box-shadow: ${horizontalOffset}px ${verticalOffset}px ${blur}px ${range}px rgba(${colorRGB},${realOpacity});`;

  useLayoutEffect(() => {
    let newOpacity = opacity / 100;
    setRealOpacity(newOpacity);
  }, [opacity]);

  const handleCopyText = () => {
    navigator.clipboard.writeText(textToCopy);
    setTextCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  }, [textCopied]);

  const presets = [
    { name: "Default", preset: "default" },
    { name: "Small", preset: "small" },
    { name: "Medium", preset: "medium" },
    { name: "Large", preset: "large" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex cursor-pointer flex-col gap-4 rounded-md bg-white py-8 px-8 font-mono"
        style={Dropshadow}
        onClick={handleCopyText}
      >
        <p className="select-none text-gray-400">.box-shadow {"{"}</p>
        <div className="pl-4 text-sm">
          <p>
            <span className="text-blue-500">-webkit-box-shadow: </span>
            {horizontalOffset}px {verticalOffset}px {blur}px {range}px rgba(
            {colorRGB},{realOpacity});
          </p>
          <p>
            <span className="text-blue-500">-moz-box-shadow: </span>
            {horizontalOffset}px {verticalOffset}px {blur}px {range}px rgba(
            {colorRGB},{realOpacity});
          </p>
          <p>
            <span className="text-blue-500">box-shadow: </span>
            {horizontalOffset}px {verticalOffset}px {blur}px {range}px rgba(
            {colorRGB},{realOpacity});
          </p>
        </div>
        <p className="select-none text-gray-400">{"}"}</p>
      </div>

      <div className="flex flex-col gap-2 rounded-md border border-blue-100 bg-white py-8 px-8">
        <h2 className="select-none text-lg font-medium text-gray-800">
          Presets
        </h2>
        <ul className="flex select-none gap-3">
          {presets.map((preset) => (
            <li
              key={preset.name}
              className="cursor-pointer rounded-full border border-blue-200 py-2 px-4 text-sm transition hover:bg-blue-200"
              onClick={() => handlePreset(preset.preset)}
            >
              {preset.name}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mr-auto max-w-sm select-none rounded-md  py-4 px-8 text-white transition duration-300  ${
          textCopied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-500"
        }`}
        onClick={handleCopyText}
      >
        {textCopied ? "Copied!" : "Copy code"}
      </button>
    </div>
  );
};

export default SnippetBox;
