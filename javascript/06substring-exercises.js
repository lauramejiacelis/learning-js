function removeLeadingTrailing(n) {
  var start;
  var end;

  for (var i = 0; i < n.length; i++) {
    var number = n.charAt(i);
    if (number !== "0") {
      start = i;
      break;
    }
  }

  for (var i = n.length - 1; i >= 0; i--) {
    var number = n.charAt(i);
    if (number === ".") {
      end = i;
      break;
    } else if (number !== "0") {
      end = i + 1;
      break;
    }
  }

  return n.substring(start, end);
}

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
