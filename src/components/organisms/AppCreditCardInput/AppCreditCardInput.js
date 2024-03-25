import React from "react";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { toast } from "react-toastify";
import AppButton from "../../atoms/AppButton/AppButton";
import AppCol from "../AppCol/AppCol";
import AppRow from "../AppRow/AppRow";
import AppTextField from "../AppTextField/AppTextField";
import "./AppCreditCard.css";

function AppCreditCardInput({ defaultValues, handleSaveDebitInfo }) {
  const [data, setData] = useState(
    defaultValues !== undefined
      ? defaultValues
      : {
          CVV: "",
          expiryCode: "",
          focus: "",
          name: "",
          cardNum: "",
        }
  );

  const handleInputFocus = (e) => {
    // this.setState({ focus: e.target.name });
    // console.log(e.target.getAttribute('alias'))
    setData({
      ...data,
      focus: e.target.getAttribute("alias"),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // this.setState({ [name]: value });

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault()
    if (data.cardNum === "") {
      toast.error(`Card number is required`, { autoClose: 6000 });

      return 0;
    }
    if (data.expiryCode === "") {
      toast.error(`Expiry Code is required`, { autoClose: 6000 });

      return 0;
    }
    if (data.CVV === "") {
      toast.error(`CVV is required`, { autoClose: 6000 });

      return 0;
    } else {
      handleSaveDebitInfo(data,e);
    }
  };
  return (
    <>
      <Cards
        cvc={data.CVV}
        expiry={data.expiryCode}
        focused={data.focus}
        name={data.name}
        number={data.cardNum}
      />
      <AppRow className="gx-5">
        <AppCol size={12 / 4}>
          <AppTextField
            alias="number"
            placeholder="Card number"
            label="Card Number"
            type="tel"
            value={data.cardNum}
            name="cardNum"
            handleChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          ></AppTextField>
        </AppCol>
        <AppCol size={12 / 4}>
          <AppTextField
            alias="name"
            placeholder="Name on card"
            label="Name on card"
            type="text"
            value={data.name}
            name="name"
            handleChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          ></AppTextField>
        </AppCol>
        <AppCol size={12 / 4}>
          <AppTextField
            alias="expiry"
            placeholder="Expiry"
            label="Expiry"
            type="text"
            value={data.expiryCode}
            name="expiryCode"
            handleChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          ></AppTextField>
        </AppCol>
        <AppCol size={12 / 4}>
          <AppTextField
            alias="cvc"
            placeholder="CVV"
            label="CVV"
            type="text"
            value={data.CVV}
            name="CVV"
            handleChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          ></AppTextField>
        </AppCol>
      </AppRow>
      <AppButton onClick={(e) => handleSave(e)} label="Save"></AppButton>
    </>
  );
}

export default AppCreditCardInput;
