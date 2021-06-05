const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

let countSubscribers = -1;

app.get('/metrics', (req, res) => {
  if(countSubscribers !== -1) {
    res.send('subscribers ' + countSubscribers);
  }
});


setInterval(function() {

  request('https://www.reddit.com/r/dogecoin/about.json', { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    if( body.data !== undefined && body.data.subscribers !== undefined) {
      countSubscribers = body.data.subscribers;
    } else {
      console.log(" body.data.subscribers === undefined");
    }

  });

}, 5000);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/metrics`)
  console.log(`Dog to the moon`);
});