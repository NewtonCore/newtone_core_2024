import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const amount = "2";
// const currency = "USD";
const style = {"layout":"vertical"};

function AppPayPal({amount, currency, job, saveTransaction}) {
  // console.log(job, 'in paypal')
  return (
    <div>
      <PayPalScriptProvider
        options={{
          // "client-id": "sandbox",
          // "data-client-token": "fb99f48b494a46bb99239b1b4bb36af1",
          "client-id" : "AajjxQGcfQbXiooZfZUo9avExcP1x0B6piwolVN45Ydc8e-BR9gmzsqBzcGpEAOgo1E2VgF36tkmgobb",
          // "data-client-token" : "access_token$sandbox$qhm75gn99y44wdpj$88e1824c8a1cdae609c5b5e8e14967bb",
          // "client-id": "sandbox",
          // "data-client-token": "abc123xyz==",
          components: "buttons",
        }}
      >
      <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            
                            // console.log(orderId)
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        // console.log(actions)
                        // console.log(job, 'in paypal')
                        saveTransaction({...job, amount, job: job.jobID, currency: currency,apply_talent:job.talentID})
                    });
                }}
            />
      </PayPalScriptProvider>
    </div>
  );
}

export default AppPayPal;
