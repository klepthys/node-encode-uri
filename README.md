# node-encode-uri
Encode javascript objects into uri query string


## Usage

    var encode = require("encode-uri");
    var args = {
      foo:"bar",
      test:true
    }
    console.log(encode(args));
    //?foo=bar&test
