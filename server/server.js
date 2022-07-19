const axios = require("axios");
const CryptoJS = require("crypto-js");

const salt = CryptoJS.lib.WordArray.random(12);                              // Randomly generated for each request.
const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); // Current Unix time (seconds).
const access_key = "B0144733651EF276A9A7";                                                       // The access key from Client Portal.
const secret_key = "42907ffb56b741b21cfd3e3d8d561e735da6a4f777c1a70ac039e3c9bc6b2c35af5887ece8ef84e2";                                                       // Never transmit the secret key by itself.
const url_path = "/v1/user";

const http_method = "post";                                                   // get|put|post|delete - must be lowercase.
const data = JSON.stringify({
    "first_name": "John",
    "last_name": "Doe",
    "ewallet_reference_id": "2021-10-28d",
    "metadata": {
        "merchant_defined": true
    },
    "type": "person",
    "contact": {
        "phone_number": "+14155551234",
        "email": "johndoe@rapyd.net",
        "first_name": "John",
        "last_name": "Doe",
        "mothers_name": "Jane Smith",
        "contact_type": "personal",
        "address": {
            "name": "John Doe",
            "line_1": "123 Main Street",
            "line_2": "",
            "line_3": "",
            "city": "Anytown",
            "state": "NY",
            "country": "US",
            "zip": "12345",
            "phone_number": "+14155551611",
            "metadata": {},
            "canton": "",
            "district": ""
        },
        "identification_type": "DL",
        "identification_number": "1234567890",
        "date_of_birth": "11/22/2000",
        "country": "US",
        "nationality": "US",
        "metadata": {
            "merchant_defined": true
        }
    }
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

axios(request)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e.toJSON());
        console.log(e.response.status);
        console.log(e.response.data);
        console.log(e.response.response);
    });

