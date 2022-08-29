/**
 * config.js
 * Express Example. Created by Aditya Gannavarapu (https://github.com/aditya-67)
 */

"use strict";

// Load environment variables from the `.env` file.
require("dotenv").config();

module.exports = {
    // Server port.
    port: process.env.PORT || 5000,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    product_instance_id: process.env.PRODUCT_INSTANCE_ID,
    env: process.env.ENV,
};
