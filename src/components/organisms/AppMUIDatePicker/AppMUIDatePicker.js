import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AppRow from "../AppRow/AppRow";
import { convertDate } from "../../../constants/utils";
import { useEffect } from "react";
import dayjs from "dayjs";
import classStyle from "./AppMUIDatePicker.module.css";

export default function AppMUIDatePicker({
  handleChange,
  inputId,
  meta,
  isRequired,
  disabled,
  label,
  defaultValue = undefined,
  message
}) {
  const [value, setValue] = React.useState(null);

  const handleDateChange = (date) => {
    setValue(date);
    handleChange(convertDate(date.$d, false), meta);
  };

  useEffect(() => {
    // Preload the value of the date when a defaultValue is passed as props
    if (defaultValue !== undefined && defaultValue !== "") {
      let d = new Date(defaultValue);
      setValue(dayjs(d));
    }
  }, [defaultValue]);

  // console.log({defaultValue})

  return (
    <AppRow id={inputId} className="input_div_mui">
      <div className="label_div">
        <span className="label">
          {label} {isRequired && "*"}
        </span>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={disabled}
          onChange={(date) => handleDateChange(date)}
          className={`mui_date ${message !== undefined && message !== "" && classStyle.error_div}`}
          disablePast
          value={value}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <div className={classStyle.error_message}> {message}</div>

    </AppRow>
  );
}
