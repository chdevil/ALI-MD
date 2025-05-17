const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61UW46jRhTdS30lsjXGvLHUUjAGg98NfuEoH2UocNk8iwIbjywlO4mykexlVhJhd8+0kslMRwofqKgq7j3n3HPvR5CkuEBjVIPeR5ARXEGKmiWtMwR6oF8GASKgDXxIIegBr89fzwttJi131pqwaGGcaJbOdnOaqspm38de4hFxxW859wnc2iAr9xH2vhFw2HLP+5Up+DvoOuVweWVG6iXC89xjRdVfblpKjgcJ098lpydwayJCTHAS6tkBxYjAaIzqBcTkffCHGi9aTDJUsTqttmZanVbeCotCGTrPRm3wHNEt7thxt9E74bPnfRbZBEtKeh21dkimF+64i/3+chVNpNMod4PzMqHM+a7HrQ0KHCbIt3yUUEzrd+seDtb7TIAdSTaWZ9KhF5sn0UauRX/ijuzBwmQrNuGXgX5i3gl8EEjWDgV2aayn7kWxJ5I6pYTph1xgc27EudfBaezy1ZF5C3xBXr1y+i+6e9ZcN4bxPFPljcrPntm+lu2TIp5LrH2aDVxPTXNtZq6DRH8f/OUWcmZmtDqLWYqkqXTJBXVbrgeTpRizSYo8pyMVna46ddQv8CEtybdQzoxkM+vHRiuYhM+bYcmq5tpdI+bs5c4oPgppS/HHfWrPp954McrF+KC3PDu0KZaXXOZus7FhpuOR2F3AWloexYNy1cLnpzujE6otH/S6tzYgKMQFJZDiNLnvCXwbQL9ykEcQvcsLdvK6DquukllKlCe2oEnPRIahq1WYmvlsZk6LkW/k1tKTn0AbZCT1UFEg38QFTUk9RUUBQ1SA3s/3SjWkCYpTikbYBz2gsJzEiLyssN3uT8WH8wHSAmbZhwRR0AYBSeMpAj1KStQG9x94oS+zvKj0OUGRZEZUREmUBFkaaANF6+qDhmL8SLrEMSoojDPQ60q8xEvNvVv7/8FhMIyqqwzfZVlBUyRO7LIyy6qipPEKpwv6d3H80gYJutCHjxv1uW4bBJgUdJWUWZRC/9Xkr4fQ89IyoU6deFqzQAT03mwjSnESFg2zMoHEO+AKaQ0P0AtgVKDPBUcE+a9cXoaYlvqNDzfzjbExnD5osDeB/qFN72vyRPdrLCOwAit3WVkUBIVrbjYHbZDAJhj44dNvv3/69Y/7+8/P6x8boV4oNBl9RCGOCtAD2qLmBZQa+vRopZ4+HKqrUNVCFXyh/NpKD6ueN5UnGN71RCbDfBZXknzljHN1ZNmSWMKkFUl6OJQTM+verfr3IKAH9FFrq7fO16pUWplabPaH4wBuIXaMIjfNq3MO7ee57++k4dRV9LkpGoJubJLuyM4ZZVfqUfcg8GMqsKaouJexOLPIWDs/Ndl8VGEPvU3WUhyOLxf2Aob5cL61inqmbVeHwyka6cm13LmK4JhDZC5aJ20px8Fpisfny7Y1sbecPXKwre+5BNUWjdnK3w1nZJHsQ/XR5PchE70Md/zSfvj+GWB0n5UvVflucR/AGw8yt/abGC/T918mWN8zCDe3t1NhXF/y4460OlPl4k14hZK8njudDF2sfjW6iH4Abk0zZBGkQUpi0AMw8Ul6tw5Jy8bUVhKk30im9S1LDR/MI1hQ9UujfK33+MetBUkzExaHxrprScpXjetrNcscCulr3wG1eYyBA25/AaPX1UqiCAAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW ALI-MD 👻*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ALI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ALI-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923706489211",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ALI",
// add bot owner name 
WELCOME: process.env.WELCOME || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "true",
// true if want goodbye msg in groups
ADMIN_STATUS: process.env.ADMIN_STATUS || "false",
// make true to know who dismiss or promoted a member in group
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// maks true for always online 
//ANTI_CALL: process.env.ANTI_CALL || "true",
//maks anticall true, false for calls
//REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*", 
// add anticall message 
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘσωєʀє∂ ву αℓι м∂⎯꯭̽💀*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/2du3i5.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 IM ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923706489211",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
  
