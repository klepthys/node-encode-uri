var util = require("util");
var encode = require("../");
describe("basic tests",function(){
  [
      [{foo:"bar"},"?foo=bar"]
    , [{foo:"bar",test:true},"?foo=bar&test=true"]
    , [{foo:"http://host.org/path"},"?foo="+encodeURIComponent("http://host.org/path")]
  ].forEach(function(item){
    it("translate : "+util.inspect(item[0])+" in : "+item[1],function(){
      expect(encode(item[0])).to.equal(item[1]);
    });
  });
});
