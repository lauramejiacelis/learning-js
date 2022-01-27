var message = "Hi mi name is Laura and I'm studying javascript";

console.log(message.substring(14, 19));

var start = message.indexOf("Laura"); // the start index where Laura is located
var end = start + "Laura".length;

console.log(message.substring(start, end));

console.log(message.indexOf("money")) // returns -1 because could find it

