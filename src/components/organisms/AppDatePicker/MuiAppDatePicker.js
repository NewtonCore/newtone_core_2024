import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
import { convertDate, MONTHS } from "../../../constants/utils";
import AppRow from "../AppRow/AppRow";
import classStyle from "./AppDatePicker.module.css";

export default function MuiAppYearMonthPicker({
  label,
  datePicked = "2022-04-07",
  handleChange,
  inputId,
  meta,
  value,
  labelComponent,
  className,
  isRequired,
  message,
  disabled,
  showMonthYearPicker = true,
}) {
  const [defaultValue, setDefaultValue] = React.useState(null);

  const handleDateChange = (date) => {
    setDefaultValue(date);
    handleChange(convertDate(date.$d, true), meta);
  };

  useEffect(() => {
    // Preload the value of the date when a defaultValue is passed as props
    if (value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        if (value[0] !== "" && value[0] !== null) {
          let d = undefined;
          if (value.length === 2) {
            let formatedDate = `${value[0]}-${
              value[1][0] !== "0" ? `0${value[1][0]}` : value[1][0]
            }-01`;
            d = new Date(formatedDate);
          } else {
            d = new Date(`${value[0]}-${value[1]}-${value[2]}`);
          }

          // console.log({d})

          setDefaultValue(dayjs(d));
        }
      }
    }
  }, [value]);

  return (
    <>
      <AppRow id={inputId} className="input_div_mui">
        <div className="label_div">
          <span className="label">
            {label} {isRequired && "*"}
          </span>
        </div>

        {/* value: {value[0]} */}
        {/* {JSON.stringify(defaultValue)} */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={defaultValue}
            className={`mui_date ${message !== undefined && message !== "" && classStyle.error_div}`}

            // disablePast
            onChange={(date) => handleDateChange(date)}
            // onChange={(date) => handleChange(convertDate(date, true), meta)}
            disabled={disabled}
            views={["month", "year"]}
          />
        </LocalizationProvider>
      </AppRow>
      <div className={classStyle.error_message}>{message}</div>
    </>
  );
}
