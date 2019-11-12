const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
const rp = require('request-promise');
const Product = require("./models/product");
const fs = require("fs");
var path = require('path');

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");
const seed = require("./helpers/seed");

// app
const app = express();

// db
mongoose
    .connect("mongodb+srv://thienng93:hello123@cluster0-w0dsx.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//seed.seedEvents();
// const requestOptions = {
//     method: 'GET',
//     uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//     qs: {
//         'start': '1',
//         'limit': '3000',
//         'convert': 'USD'
//     },
//     headers: {
//         'X-CMC_PRO_API_KEY': '92e5cd2d-71df-4081-8a72-cd80da89818d'
//     },
//     json: true,
//     gzip: true
// };
// rp(requestOptions).then(response => {
//     console.log(response.data[0])
//     response.data.map((item, index) => {
//         let name = item['name'];
//         let description = item['symbol'];
//         console.log(description)
//         let price = item['quote']['USD']['price'];
//         let category = '5dca4bf5b5a823c6ddf09ecd';
//         let quantity = 1;
//         let shipping = true;
//         let filePath = '';
//         let product = new Product({ name, description, price, category, quantity, shipping });
//         fs.readdir(path.join(__dirname, './cryptocurrencyicons/'), (err, files) => {
//             files.forEach(file => {
//                 let fileName = file.split('.')[0];
//                 if (fileName.toLowerCase() == description.toLowerCase()) {
//                     var subPath = `./cryptocurrencyicons/${fileName}.png`
//                     var fullFilePath = path.join(__dirname, subPath);
//                     console.log(`Full filePath is ${fullFilePath}.png`);
//                     product.photo.data = fs.readFileSync(fullFilePath);
//                     console.log('444');
//                     product.photo.contentType = 'img/png';
//                     product.save((err, result) => {
//                         if (err) {
//                             console.log('YOU MESSED UP');
//                         }
//                         console.log('YOU SUCCEEDED UPLOAD!')
//                     });
//                 }
//             });
//         });

//     })
// }).catch((err) => {
//     console.log('API call error:', err.message);
// });

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
