const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
var path = require('path');
const rp = require('request-promise');




/**
 * Seed the database
 */
// exports.seedEvents = () => {
//     const requestOptions = {
//         method: 'GET',
//         uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//         qs: {
//           'start': '1',
//           'limit': '2',
//           'convert': 'USD'
//         },
//         headers: {
//           'X-CMC_PRO_API_KEY': '92e5cd2d-71df-4081-8a72-cd80da89818d'
//         },
//         json: true,
//         gzip: true
//       };
//     rp(requestOptions).then(response => {
//         console.log(response.data[0])
//         response.data.map((item, index) => {
//             let name = item['name'];
//             let description = item['symbol'];
//             console.log(description)
//             let price = item['quote']['USD']['price'];
//             let category = '5db00e26dd03d42c68489cb1';
//             let quantity = 1;
//             let shipping = true;
//             let filePath = '';            
//             let product = new Product({name, description, price, category, quantity, shipping});

//             fs.readdir(path.join(__dirname, '../cryptocurrencyicons/'), (err, files) => {
//                 files.forEach(file => {
//                     let fileName = file.split('.')[0];
//                     if (fileName.toLowerCase() == description.toLowerCase()) {
//                         var subPath = `../cryptocurrencyicons/${fileName}.png`
//                         var fullFilePath = path.join(__dirname, subPath);
//                         console.log(`Full filePath is ${fullFilePath}.png`);
//                         product.photo.data = fs.readFileSync(fullFilePath);
//                         product.photo.contentType = 'png';
//                     }
//                 });
//             });
//             product.save((err, result) => {
//                 if (err) {
//                     console.log('YOU MESSED UP!');
//                 }
//                 console.log('YOU SUCCEEDED UPLOAD!')
//             });
//         })
//         }).catch((err) => {
//             console.log('API call error:', err.message);
//         });
    // create some events
    // console.log("dirname: " + path.join(__dirname, '../cryptocurrencyicons/'));

    // fs.readdir(path.join(__dirname, '../cryptocurrencyicons/'), (err, files) => {
    //     files.forEach(file => {
    //         console.log(file);
    //         let name = file.split('.')[0];
    //         let description = name;

    //     });
    // });
    // use the Event model to insert/save
    // for (event of events) {
    //   var newEvent = new Event(event);
    //   newEvent.save();
    // }
  
    // // seeded!
    // res.send('Database seeded!');
//}