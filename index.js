

module.exports = function(args){
  var res = "";
  Object.keys(args).forEach(function(key){
    if(key == "argv"){
      return;
    }
    res = res+"&"+key+"="+encodeURIComponent(args[key]);
  });
  return "?"+res.substr(1);
}
