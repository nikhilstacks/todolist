// jshint esversion:6
exports.getDate = function(){
let today = new Date();
let currentDate = today.getDay();
let day = "";
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

return today.toLocaleDateString("hi-IN", options);

};

exports.getDay = function(){
let today = new Date();
let currentDate = today.getDay();
let day = "";
let options = {
  weekday: "long",
};

return today.toLocaleDateString("hi-IN", options);
};
