import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import * as api from "../api/index";
const Pay = ({totalCart}) => {
  const {cartProducts} = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState();
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  useEffect(() => {
    const makeRequest = async () => {
      const order = {
        idUser: user.resulte._id,
        Username: stripeToken.card.name,
        products: cartProducts,
        amount: totalCart,
        address: {
          city: stripeToken.card.address_city,
          country: stripeToken.card.address_country,
          line1: stripeToken.card.address_line1,
          state: stripeToken.card.address_state,
          zip: stripeToken.card.address_zip,
        },
      };
      try {
        const res = await api.createOrder(order);
        console.log(res.data);
        const response = await api.emptyCart();
        // const res = await api.createPay({
        //   tokenId: stripeToken.id,
        //   amount: 2000,
        // });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cartProducts.length > 0 && makeRequest();
  }, [stripeToken]);

  const onToken = token => {
    setStripeToken(token);
    console.log(token);
  };
  return (
    <StripeCheckout
      name="Furni shop" // the pop-in header title
      description={`Your Total is $${totalCart}`} // the pop-in header subtitle
      shippingAddress
      billingAddress
      amount={2000}
      token={onToken}
      image="/item0.png" // the pop-in header image
      stripeKey="pk_test_51MX0YcIrhS15eqW0IvToQz6Re2vngbG0knWAuwN85VOzUJqSlBxnXlu3Htw0G0lgRu8h0cm5kH7Sc2EkehODXfnd00n2age68M"
    >
      <button className="w-40 text-white bg-[#000] py-2 font-bold text-lg ">
        Check Out: <span className="text-[#ca0202]">${totalCart}</span>
      </button>
    </StripeCheckout>
  );
};

export default Pay;
