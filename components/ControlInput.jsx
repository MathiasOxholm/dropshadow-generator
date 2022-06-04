const ControlInput = ({
  type,
  name,
  title,
  value,
  onChange,
  min,
  max,
  unit,
}) => {
  return (
    <div className="group flex-1 select-none">
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="text-gray-00 cursor-pointer transition"
        >
          {title}
        </label>
        <p className="text-blue-700">{value + unit}</p>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-blue-100"
      />
    </div>
  );
};

export default ControlInput;
