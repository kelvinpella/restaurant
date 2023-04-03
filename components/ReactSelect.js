import React from "react";
import Select from "react-select";
const ReactSelect = ({
  selectOptions,
  selectPlaceholder,
  handleChange,
  ...otherProps
}) => {
  return (
    <Select
      className="capitilize w-full"
      options={selectOptions}
      placeholder={selectPlaceholder}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default ReactSelect;
