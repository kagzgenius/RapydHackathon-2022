const axios = require("axios");
const CryptoJS = require("crypto-js");


const salt = CryptoJS.lib.WordArray.random(12);                              // Randomly generated for each request.
const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); // Current Unix time (seconds).
const access_key = "B0144733651EF276A9A7";                                                       // The access key from Client Portal.
const secret_key = "42907ffb56b741b21cfd3e3d8d561e735da6a4f777c1a70ac039e3c9bc6b2c35af5887ece8ef84e2";                                                       // Never transmit the secret key by itself.
const url_path = "/v1/checkout";

const http_method = "post";                                                   // get|put|post|delete - must be lowercase.
const data = JSON.stringify({
        "amount": 100,
        "country": "SG",
        "currency": "SGD",
        "requested_currency": "USD",
        "complete_checkout_url": "https://example.com/complete",
        "cancel_checkout_url": "https://example.com/cancel",
        "merchant_reference_id": "950ae8c6-76",
        "custom_elements": {
            "dynamic_currency_conversion": "true",
        },
        "payment_method_type_categories": [
            "bank_redirect", 
            "bank_transfer", 
            "card", 
            "cash", 
            "ewallet"],     
});


 const getSignature = () => {
    const to_sign =
        http_method + url_path + salt + timestamp + access_key + secret_key + data;
    let signature = CryptoJS.enc.Hex.stringify(
        CryptoJS.HmacSHA256(to_sign, secret_key)
    );

    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));

    return signature;
};

 const headers = {
    access_key: access_key,
    signature: getSignature(),
    salt,
    timestamp,
    "Content-Type": `application/json`,
};

 const request = {
    baseURL: "https://sandboxapi.rapyd.net",
    headers: headers,
    url: url_path,
    method: http_method,
    data,
};

  const getCheckout = function getCheckoutLink() {
      axios(request).then((res) => {
        console.log(res.data.data.redirect_url);
        return res.data.data.redirect_url
    })
        .catch((e) => {
            console.log(e);
        });
} 

export default getCheckout;