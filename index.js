"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.echoText
  :https://datosabiertos.ayto-arganda.es/api/3/action/group_list;
     // : "Ha habido algunos problemas. Vuelve a intentarlo"+req.body;
  return res.json({

  "fulfillmentText": speech,
  "fulfillmentMessages": [
    {
      "text": {
        "text": [speech]
      }
    }
  ],
  "source": "<abuelaelvira>"


  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
