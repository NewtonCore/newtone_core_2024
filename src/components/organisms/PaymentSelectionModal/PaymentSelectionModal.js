import React from "react";
import { Modal } from "react-bootstrap";
import { FLUTTERWAVE_IMAGE, PAYPAL_IMAGE } from "../../../constants/AppImages";
import AppImage from "../AppImage/AppImage";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AppButton from "../../atoms/AppButton/AppButton";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { useDispatch } from "react-redux";
import { togglePayPalModal } from "../../../app-redux/features/jobCompany/jobCompanySlice";

function PaymentSelectionModal({
  show,
  toggleFunction,
  currency,
  onHide,
  dataPassed,
  saveTransaction,
  job,
  amount = 300,
  paymentTitle = "Payment for Newton Talent",
  description = "Payment for items in cart",
}) {
  // let amount = 400
  // let currency = { currency };
  const [paymentSelected, setPaymentSelected] = useState(null);
  const dispatch = useDispatch();
  const flutterwave_config = {
    public_key: "FLWPUBK_TEST-6e914e358bf3863513b9b75a9cb3b8dc-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: paymentTitle,
      description: description,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(flutterwave_config);

  const flutterWavePay = () => {
    handleFlutterPayment({
      callback: (response) => {
        saveTransaction({
          ...job,
          amount,
          job: job.jobID,
          currency: currency,
          apply_talent: job.talentID,
        });

        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        console.log("closed the modal");
      },
    });
  };

  const PayPallPay = () => {
    dispatch(togglePayPalModal(dataPassed));
  };

  const payment_gateweays = [
    {
      id: uuidv4(),
      name: "Paypal",
      image: PAYPAL_IMAGE,
      triggerFunc: PayPallPay,
    },
    {
      id: uuidv4(),
      name: "Flutterwave",
      image: FLUTTERWAVE_IMAGE,
      triggerFunc: flutterWavePay,
    },
  ];

  const returnTriggerFn = (id) => {
    // console.log({id})
    return payment_gateweays.filter((pg) => {
      return pg.name === id;
    })[0].triggerFunc;

    // x()
  };

  //   console.log(JSON)
  return (
    <div>
      <Modal scrollable show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <span className="ms-auto">{paymentTitle}</span>
        </Modal.Header>
        <Modal.Body>
          <center>
            <span>{description}</span>
            <br></br>
            <span>Please choose a payment method below</span>
          </center>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {payment_gateweays.map((pg, index) => {
              return (
                <>
                  <button
                    onClick={() => setPaymentSelected(JSON.stringify(pg))}
                    key={pg.id + index}
                    className="btn btn-default"
                  >
                    <AppImage
                      style={{ width: "70%" }}
                      image={pg.image}
                    ></AppImage>
                  </button>
                </>
              );
            })}
          </div>
          <br></br>
          <br></br>

          {paymentSelected !== null && (
            <AppButton
              size="small"
              //   onClick={
              //     paymentSelected !== null
              //       ? JSON.parse(paymentSelected).name === "Flutterwave"
              //         ? flutterWavePay
              //         : PayPallPay
              //       : {}
              //   }

              onClick={
                paymentSelected !== null
                  ? () => returnTriggerFn(JSON.parse(paymentSelected).name)()
                  : {}
              }
              className="w-100"
            >
              Proceed with{" "}
              {paymentSelected !== null ? JSON.parse(paymentSelected).name : ""}
            </AppButton>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentSelectionModal;
