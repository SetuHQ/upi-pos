# UPI Deeplinks POS via NFC

POS application for accepting payments using Setu UPI Deeplinks via NFC

[Demo](https://setu-upi-over-nfc.herokuapp.com/how-it-works)

> This app only works on mobile as browsers on desktop doesn't support NFC APIs.

This is a node server which uses [Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API) to read and write to an NFC tag.

Merchants can generate an UPI link with desired amount using this application and write to a NFC tag. Customers can read the link from their NFC enabled mobile phones and make payments.

If you're looking to get NFC tags, you can check out [these](https://www.amazon.in/gp/product/B09BQBB69Q/).

## How to

### Setup UPI Deeplink with Setu

Follow this documentation to setup UPI Deeplinks with Setu. At the end of it, you would be able to get sandbox credentials, `product_instance_id`, `client_id` and `client_secret` for your product.

Replace the values in `.env` file

### Running the app

#### Install dependencies

`npm install`

#### Start server

`npm run start`

## Deploy to Heroku

This repo comes with a `Procfile` which you can use to deploy to Heroku following this [guide](https://medium.com/geekculture/deploy-node-applications-on-heroku-a89ed51e0a34).
