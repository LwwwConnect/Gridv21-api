// scrapers/permit_scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

const scrapePermits = async () => {
  try {
    const response = await axios.get('https:                                                   
    const $ = cheerio.load(response.data);
    const permits = [];

                                                                     
    $('//example.com/permits'); // Replace with actual URL
    const $ = cheerio.load(response.data);
    const permits = [];

    // Example scraping logic (adjust based on actual HTML structure)
    $('table tr').each((index, element) => {
      const permit = {
        address: $(element).find('td:nth-child(1)').text().trim(),
        zip: $(element).find('td:nth-child(2)').text
