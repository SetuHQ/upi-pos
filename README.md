# UPI Deeplinks POS via NFC

POS application for accepting payments using Setu UPI Deeplinks via NFC

[Demo](https://setu-upi-over-nfc.herokuapp.com/how-it-works)

> This app only works on mobile as browsers on desktop doesn't support NFC APIs.

This is a node server which uses [Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API) to read and write to an NFC tag.

Merchants can generate an UPI link with desired amount using this application and write to a NFC tag. Customers can read the link from their NFC enabled mobile phones and make payments.

If you're looking to get NFC tags, you can check out [these](https://www.amazon.in/gp/product/B09BQBB69Q/).

## How it works

### Step 1 - Attach NFC

Attach NFC tag to any place that you want to accept payments. In the video, NFC tag has been attached to the back of the book.

https://user-images.githubusercontent.com/9695866/212429194-90b803fc-704e-42ed-9be8-1257b7febae9.mp4

### Step 2 - Generate payment link and write to NFC tag

Merchant can generate a payment link with needed amount by visiting the page and write the generated link to the NFC tag.

Place phone near the tag until it is detected and click `Write to Tag` to write data

https://user-images.githubusercontent.com/9695866/212429283-5b992d14-b034-41b8-9577-4c570df350f0.mp4

### Step 3 - Read NFC tag to make payment

Customer can read the NFC tag by placing phone near the NFC tag to which the payment link has been written and make the payment.

https://user-images.githubusercontent.com/9695866/212429220-02f39ba5-f4d5-4992-97cc-76babb04db18.mp4

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
