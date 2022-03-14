function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

const spy ='hello'
function logShout(string) {
  console.log(string.toUpperCase());
} logShout(spy);

const spy1 ='HELLO'
function logWhisper(string) {
    console.log(string.toLowerCase());
} logWhisper(spy1);

const food = "hungry"
function sayHiToHeadphonedRoommate(string) {
 if (string === string.toLowerCase())
  return "I can\'t hear you!" 
 else if (string === string.toUpperCase())
  return "YES INDEED!" 
else (string === "Let\'s have dinner together!") 
  return "I would love to!"
} 