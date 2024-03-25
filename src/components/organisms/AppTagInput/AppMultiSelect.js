import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
function AppMultiSelect({
  data,
  label,
  isRequired,
  handleChange,
  meta,
  value,
}) {
  const [field, setField] = useState([]);
  const [isClicking, setIsClicking] = useState(null);

  const handleOnChange = (e) => {
    setIsClicking(true);
    setField([].slice.call(e.target.selectedOptions).map((item) => item.value));

    setTimeout(() => {
      handleChange(
        field.slice.call(e.target.selectedOptions).map((item) => item.value),
        meta
      );
    }, 100);
  };

  useEffect(() => {
    if (value !== "" && !isClicking) {
        setField(value)
    }
  }, [value]);
  return (
    <div className="">
      <div className="label_div">
        <span className="label">
          {label} {isRequired && "*"}
        </span>
      </div>
      {/* {field[0]} */}
      {/* {typeof(value)} */}

      {/* {field} */}

      <Form.Group as={Col} controlId="my_multiselect_field">
        <Form.Control
          style={{ padding: 10, margin: 0 }}
          as="select"
          multiple
          value={field}
          onChange={(e) => handleOnChange(e, meta)}
        >
          {data.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </div>
  );
}

export default AppMultiSelect;
