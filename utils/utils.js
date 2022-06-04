// Handle the change of horizontal offset
const handleHorizontalOffset = (e) => {
  setHorizontalOffset(e.target.value);
};

// Handle the change of vertical offset
const handleVerticalOffset = (e) => {
  setVerticalOffset(e.target.value);
};

// Handle the change of the blur
const handleBlur = (e) => {
  setBlur(e.target.value);
};

// Handle the change of the range
const handleRange = (e) => {
  setRange(e.target.value);
};

// Handle the change of the opacity
const handleOpacity = (e) => {
  setOpacity(e.target.value);
};

// Handle the change of the color
const handleColor = (e) => {
  setColor(e.target.value);
  const color = e.target.value;
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  setColorRGB(`${r}, ${g}, ${b}`);
};

// Handle the change of the preset
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

export {
  handleHorizontalOffset,
  handleVerticalOffset,
  handleBlur,
  handleRange,
  handleOpacity,
  handleColor,
  handlePreset,
};
