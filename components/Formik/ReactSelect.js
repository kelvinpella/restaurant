import React from "react";
import Select from "react-select";
const ReactSelect = ({
  field: { name, value, onBlur },
  form: { touched, errors, values, setValues },
  selectOptions,
  selectPlaceholder,
  instanceId,
  defaultValue,
}) => {
  const getValue = () => {
    return selectOptions
      ? selectOptions.find((option) => option.value === value)
      : "";
  };
  const handleChange = (option) => {
    // update field value and also total price if category === 'size'
    return setValues({
      ...values,
      [name]: option.value,
      totalPrice:
        option.category === "size"
          ? +(values.quantity * option.price).toFixed(2)
          : values.totalPrice,
    });
  };
  return (
    <div>
      <Select
        className="capitilize w-full"
        name={name}
        defaultValue={defaultValue}
        value={getValue()}
        instanceId={instanceId}
        options={selectOptions}
        placeholder={selectPlaceholder}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-sm text-center my-1.5">
          {errors[name]}
        </p>
      )}
    </div>
  );
};

export default ReactSelect;
