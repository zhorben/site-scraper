const scrape = require('website-scraper');

let options = {
    urls: [
    	'http://gentlemen-barberclubs.de/'
    ],
    directory: './barber',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
