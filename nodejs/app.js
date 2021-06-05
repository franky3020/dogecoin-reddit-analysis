const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

let countSubscribers = -1;
let active_user_count = -1;

app.get('/metrics', (req, res) => {

  let sentMsg = "";
  let subscribersMsg = "";
  let active_user_count_Msg = "";

  subscribersMsg = 'subscribers ' + countSubscribers;
  active_user_count_Msg = 'active_user_count ' + active_user_count;

  if(countSubscribers !== -1 && active_user_count !== -1) {
    sentMsg = subscribersMsg + '\n' + active_user_count_Msg;
    res.send(sentMsg);
  }
});


setInterval(function() {

  request('https://www.reddit.com/r/dogecoin/about.json', { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    if( body.data !== undefined ) {
      if (body.data.subscribers !== undefined) {
        countSubscribers = body.data.subscribers;
      }

      if (body.data.active_user_count !== undefined) {
        active_user_count = body.data.active_user_count;
      }
      
    } else {
      console.log(" body.data.subscribers === undefined");
    }

  });

}, 5000);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/metrics`)
  console.log(`Dog to the moon`);
});