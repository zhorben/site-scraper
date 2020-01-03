const scrape = require('website-scraper');

let options = {
    urls: [
    	'https://www.aphrodite1994.com/brands'
    ],
    directory: './designers',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
