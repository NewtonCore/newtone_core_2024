import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Modal } from "react-bootstrap";
import AppButton from "../../atoms/AppButton/AppButton";
import { LinearProgress } from "@mui/material";

function AppFlutterwave({ message, show, onHide, loading }) {
  const config = {
    public_key: "FLWPUBK_TEST-6e914e358bf3863513b9b75a9cb3b8dc-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <div>
        <Modal
          scrollable
          contentClassName=""
          show={show}
          backdrop="static"
          keyboard={false}
          // onHide={() => dispatch(toggleLoginForm())}
          onHide={onHide}
          centered
        >
          {loading && <LinearProgress />}
          <Modal.Header closeButton>
            <span className="ms-auto">Flutterwave Payment</span>
          </Modal.Header>

          <Modal.Body>
            <p className="text-center">{message}</p>
            <div className="d-flex flex-row mb-2 justify-content-between">
              <div className="p-3 w-100">
                <AppButton
                  className="w-100"
                  size="small"
                  loading={loading}
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {
                        console.log("closed the modal");
                      },
                    });
                  }}
                  // onClick={actionButtonFn}
                >
                  Make payment
                </AppButton>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default AppFlutterwave;
