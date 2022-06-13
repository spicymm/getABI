let axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const CRONOS_API_KEY = process.env.CRONOS_API_KEY;
let args = process.argv.slice(2);
const contractAddress = args[0];

async function getABI() {
    let response = await axios.get(`https://api.cronoscan.com/api?module=contract&action=getabi&address=${contractAddress}&apikey=${CRONOS_API_KEY}`);
    let toSave = JSON.stringify(JSON.parse(response.data.result), null, 4);
    fs.writeFile('./test.json', toSave, err => {
        if (err) {
          console.error(err);
        }
      });
}

getABI();
               