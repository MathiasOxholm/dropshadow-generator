import { useContext } from "react";
import { AppContext } from "../context";
import ControlInput from "./ControlInput";

const Controls = () => {
  const {
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
  } = useContext(AppContext);
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-md border border-blue-100 bg-white p-8">
      <ControlInput
        type="range"
        name="horizontal-offset"
        title="Horizontal offset"
        value={horizontalOffset}
        onChange={handleHorizontalOffset}
        min={-200}
        max={200}
        unit="px"
      />

      <ControlInput
        type="range"
        name="vertical-offset"
        title="Vertical offset"
        value={verticalOffset}
        onChange={handleVerticalOffset}
        min={-200}
        max={200}
        unit="px"
      />

      <ControlInput
        type="range"
        name="blur"
        title="Blur"
        value={blur}
        onChange={handleBlur}
        min={0}
        max={300}
        unit="px"
      />

      <ControlInput
        type="range"
        name="range"
        title="Range"
        value={range}
        onChange={handleRange}
        min={0}
        max={200}
        unit="px"
      />

      <ControlInput
        type="range"
        name="opacity"
        title="Opacity"
        value={opacity}
        onChange={handleOpacity}
        min={0}
        max={100}
        unit="%"
      />

      <div className="input-row group flex-1 select-none">
        <div className="flex items-center justify-between pb-2">
          <label
            htmlFor="color"
            className="cursor-pointer text-gray-600 transition"
          >
            Color
          </label>
          <p className="text-blue-700">{color}</p>
        </div>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleColor}
          className="h-12 w-full cursor-pointer border-0 shadow-none"
        />
      </div>
    </div>
  );
};

export default Controls;
