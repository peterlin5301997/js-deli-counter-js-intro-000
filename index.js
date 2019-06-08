var line = [];
var name = "";

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var line = "The line is currently: ";
    for (let i = 0; i < line.length; i++) {
      line = line + `${i + 1}. ${line[i]}`;
    }
    return line;
  }
}
