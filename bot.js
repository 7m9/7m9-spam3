const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561963024278355968")
setInterval(function() {
channel.send(` 37m9 thz best play minecraft`);
}, 30)
})

client.login("NTMwNDkwNTkxMzIzMzU3MTg5.XKD3AQ.wOCTle0k1gr3Qc3Tq31nrZfbNn8");
