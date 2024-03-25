import React from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import AppButton from "../../atoms/AppButton/AppButton";
import axios from "axios";

function AppStripePayment() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const pay = await stripe.createPaymentMethod({
      type: "card",
    //   name:"Daniel Albert",
      card: elements.getElement(CardElement),
    }).then(res=>{
    console.log({res})

    try{
       axios.post("http://localhost:5000/api/create-checkout-session/",{
        token:res,
        email:"albertagoya@gmail.com",
        amount:100,
    //   name:"Michael Kitas"

    }).then((res2)=>{
    console.log({res2})
        
    }).catch((err2)=>{
        console.log({err2})
    
        })

    }
    catch(error){
    console.log({error})

    }



    }).catch((err)=>{
    console.log({err})

    })

    // console.log(paymentMethod)
  };
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <CardElement />
          <AppButton onClick={(e)=>handleSubmit(e)}  disabled={!stripe || !elements}>
            Pay
          </AppButton>
        </form>
    </div>
  );
}

export default AppStripePayment;
