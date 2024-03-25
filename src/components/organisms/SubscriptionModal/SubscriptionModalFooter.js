import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppPayPal from "../AppPayPal/AppPayPal";
import AppRow from "../AppRow/AppRow";
// AppPayPal
function SubscriptionModalFooter({
  saveTransaction,
  job,
  amount,
  currency,
  paymentTitle,
  description,
}) {
  return (
    <div>
      <AppContainerFluid>
        <br></br>
        <center>
          <h6>{paymentTitle}</h6>
          <p>{description}</p>
          <h5>
            {" "}
            {currency} {amount}
          </h5>
        </center>
        <br></br>
        <AppRow>
          <AppPayPal
            amount={amount}
            currency={currency}
            job={job}
            saveTransaction={saveTransaction}
          />
        </AppRow>
        {/* <AppRow>
          <AppButton label="Pay now"></AppButton>
        </AppRow> */}
      </AppContainerFluid>
    </div>
  );
}

export default SubscriptionModalFooter;
