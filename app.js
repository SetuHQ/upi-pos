/**
 * app.js
 * Express Example. Created by Aditya Gannavarapu (https://github.com/aditya-67)
 */

// create an express app
const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config");
const { SetuUPIDeepLink } = require("@setu/upi-deep-links");

// use the express-static middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser.text({ defaultCharset: "utf-8" }));

app.use(express.static("public"));

app.post("/generate-link", async function (req, res) {
    console.log("In generate link", req.body);
    generate(req.body.amount)
        .then((data) => {
            const id = data.paymentLink.shortURL.split("/").pop();
            res.redirect(`/link?id=${id}&env=${config.env}`);
        })
        .catch((err) => {
            console.log(err);
            res.redirect("/");
        });
});

const generate = async (amount) => {
    const upidl = SetuUPIDeepLink({
        schemeID: config.client_id,
        secret: config.client_secret,
        productInstanceID: config.product_instance_id,
        mode: config.env,
        authType: "OAUTH",
    });

    let paymentLinkBody = {
        amountValue: parseInt(amount) * 100,
        billerBillID: "NFC_TEST_" + ("" + Math.random()).substring(2, 8),
        amountExactness: "EXACT",
    };

    const data = await upidl.createPaymentLink(paymentLinkBody);

    return data;
};
// start the server listening for requests
app.listen(config.port || 3000, () => console.log("Server is running..."));
